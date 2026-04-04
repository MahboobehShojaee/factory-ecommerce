import React, { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/products/ProductCard.jsx";
import ProductFilters from "../components/products/ProductFilters.jsx";

export default function Products() {
  const { dict, isRTL, lang } = useLanguage();
  const t = dict.products || {};
  const categories = t.categories || [];

  const [activeFilter, setActiveFilter] = useState("all");
  const [highlightedCategory, setHighlightedCategory] = useState(null); // برای هایلایت حرفه‌ای

  // 🔹 گزینه‌های فیلتر
  const filterOptions = useMemo(() => {
    const allLabel = isRTL ? "همه محصولات" : "All Products";
    return [
      { id: "all", label: allLabel },
      ...categories.map((c) => ({
        id: c.name,
        label: typeof c.name === "object" ? c.name[lang] : c.name, // multi-language
      })),
    ];
  }, [categories, isRTL, lang]);

  // 🔹 محصولات فیلتر شده
  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return categories;
    return categories.filter((item) => item.name === activeFilter);
  }, [activeFilter, categories]);

  // 🔹 Loading state
  if (categories.length === 0) {
    return (
      <div className="py-20 text-center font-black opacity-20 text-4xl uppercase tracking-tighter">
        Loading Products...
      </div>
    );
  }

  return (
    <main
      className={`space-y-12 pb-20 ${isRTL ? "text-right" : "text-left"}`}
    >
      {/* Hero Header */}
      <header
        className="space-y-4 border-[#D4AF37]"
        aria-label="Products page introduction"
      >
        <div className={`container mx-auto px-6 ${isRTL ? "border-r-4 pr-6" : "border-l-4 pl-6"}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-[10px] font-black tracking-[0.4em] text-[#D4AF37] uppercase">
              {t.eyebrow}
            </p>
            <h2 className="text-4xl font-black tracking-tight text-[#374151] sm:text-5xl">
              {t.title}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg font-medium">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Filters Section */}
      <section className="container mx-auto px-6" aria-label="Product filters">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ProductFilters
            filterOptions={filterOptions}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            isRTL={isRTL}
          />
        </motion.div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-6" aria-label="Product listings">
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((category) => (
              <ProductCard
                key={
                  typeof category.name === "object"
                    ? category.name[lang]
                    : category.name
                }
                category={category}
                isRTL={isRTL}
                lang={lang}
                isHighlighted={
                  highlightedCategory &&
                  highlightedCategory ===
                    (typeof category.name === "object"
                      ? category.name[lang]
                      : category.name)
                }
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Scroll to Top Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className={`fixed bottom-8 z-50 ${isRTL ? "right-8" : "left-8"}`}
        aria-hidden="true"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-[#D4AF37] text-white rounded-full shadow-lg flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      </motion.div>
    </main>
  );
}
