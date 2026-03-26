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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`space-y-12 pb-20 ${isRTL ? "text-right" : "text-left"}`}
    >
      {/* Header */}
      <header
        className={`space-y-4 border-[#D4AF37] ${
          isRTL ? "border-r-4 pr-6" : "border-l-4 pl-6"
        }`}
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
      </header>

      {/* Filters */}
      <ProductFilters
        filterOptions={filterOptions}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        isRTL={isRTL}
      />

      {/* Product Grid */}
      <motion.section layout className="grid gap-8 md:grid-cols-2">
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
      </motion.section>
    </motion.div>
  );
}
