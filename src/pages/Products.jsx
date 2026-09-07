import React, { useMemo, useCallback, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/products/ProductCard.jsx";
import ProductListFromJSON from "../components/products/ProductListFromJSON.jsx";
import SeoHead from "../lib/seo/SeoHead.jsx";
import { buildBreadcrumbSchema } from "../lib/seo/schema.js";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRTL } from "../hooks/useRTL.js";
import { FadeInUp } from "../animations/motionPresets.jsx";
import { Heading, Text } from "../components/ui/Typography.jsx";

const Products = React.memo(function Products() {
  const { dict, lang } = useLanguage();
  const { isRTL, dirClass } = useRTL();
  const t = dict.products || {};
  const categories = t.categories || [];
  const [showCategories, setShowCategories] = useState(true);

  // Memoized categories to prevent unnecessary re-renders
  const memoizedCategories = useMemo(() => categories, [categories]);

  // Memoized breadcrumb schema
  const breadcrumbSchema = useMemo(() => 
    buildBreadcrumbSchema([
      { name: isRTL ? "خانه" : "Home", url: "https://setarehkerman.com/" },
      { name: isRTL ? "محصولات" : "Products", url: "https://setarehkerman.com/products" },
    ]),
    [isRTL]
  );

  // Callback for scroll to top
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // 🔹 Error boundary fallback
  if (!t || typeof t !== 'object') {
    return (
      <div className="py-20 text-center font-black opacity-20 text-4xl uppercase tracking-tighter">
        Loading Products...
      </div>
    );
  }

  // 🔹 Loading state
  if (memoizedCategories.length === 0) {
    return (
      <div className="py-20 text-center font-black opacity-20 text-4xl uppercase tracking-tighter">
        Loading Products...
      </div>
    );
  }

  return (
    <>
      <SeoHead
        title={isRTL ? "محصولات | ستاره کرمان" : "Products | Setareh Kerman"}
        description={
          isRTL
            ? "کاتالوگ کامل کابل های قدرت، صنعتی، ارتباطی و تخصصی با مشخصات فنی."
            : "Explore the full catalog of power, industrial, communication, and specialty cables."
        }
        canonical="/products"
        jsonLd={buildBreadcrumbSchema([
          { name: isRTL ? "خانه" : "Home", url: "https://setarehkerman.com/" },
          { name: isRTL ? "محصولات" : "Products", url: "https://setarehkerman.com/products" },
        ])}
      />
      <section
      className={`space-y-8 sm:space-y-12 pb-12 sm:pb-16 md:pb-20 pt-14 sm:pt-16 md:pt-24 ${dirClass}`}
    >
      {/* Hero Header */}
      <header
        className="space-y-6 sm:space-y-8 border-[#D4AF37]"
        aria-label="Products page introduction"
      >
        <div className={`container mx-auto px-4 sm:px-6 ${isRTL ? "border-r-2 sm:border-r-4 pr-3 sm:pr-6" : "border-l-2 sm:border-l-4 pl-3 sm:pl-6"}`}>
          <FadeInUp>
            <div className="space-y-3 sm:space-y-4">
              <Text className="text-[8px] sm:text-[10px] font-black tracking-[0.3em] sm:tracking-[0.4em] text-[#D4AF37] uppercase">
                {t.eyebrow}
              </Text>
              <Heading level={1} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
                {t.title}
              </Heading>
              <Text className="max-w-2xl lg:text-lg text-gray-500 font-medium">
                {t.subtitle}
              </Text>
            </div>
          </FadeInUp>
        </div>
      </header>

      {/* Collapsible Category Overview */}
      <section className="container mx-auto px-4 sm:px-6">
        <motion.button
          onClick={() => setShowCategories(!showCategories)}
          className={`w-full flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${isRTL ? "flex-row-reverse" : ""}`}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
              <span className="text-[#D4AF37] font-black text-lg">{memoizedCategories.length}</span>
            </div>
            <div className={isRTL ? "text-right" : "text-left"}>
              <Heading level={2} className="text-lg">
                {isRTL ? "دسته‌بندی‌های اصلی" : "Main Categories"}
              </Heading>
              <Text className="text-sm">
                {isRTL ? "بررسی سریع دسته‌بندی‌های محصول" : "Quick overview of product categories"}
              </Text>
            </div>
          </div>
          <motion.div
            animate={{ rotate: showCategories ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isRTL ? <ChevronUp className="w-6 h-6 text-[#D4AF37]" /> : <ChevronDown className="w-6 h-6 text-[#D4AF37]" />}
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {showCategories && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              <motion.div
                layout
                className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
              >
                <AnimatePresence mode="popLayout">
                  {memoizedCategories.map((category) => (
                    <ProductCard
                      key={
                        typeof category.name === "object"
                          ? category.name[lang]
                          : category.name
                      }
                      category={category}
                      lang={lang}
                      isHighlighted={false}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Complete Product Catalog from JSON */}
      <ProductListFromJSON />

      {/* Scroll to Top Indicator */}
      <FadeInUp delay={1.5}>
        <div className={`fixed bottom-8 z-50 ${isRTL ? "right-8" : "left-8"}`} aria-hidden="true">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleScrollToTop}
            className="w-12 h-12 bg-[#D4AF37] text-white rounded-full shadow-lg flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.button>
        </div>
      </FadeInUp>
      </section>
    </>
  );
});

Products.displayName = 'Products';

export default Products;
