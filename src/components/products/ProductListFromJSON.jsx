import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext.jsx";
import JSONProductFilters from "./JSONProductFilters.jsx";
import JSONProductGrid from "./JSONProductGrid.jsx";

export default function ProductListFromJSON() {
  const { lang, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  // Get product count for filter status
  const productCount = React.useMemo(() => {
    // Total products in JSON
    return 18;
  }, []);

  const filteredCount = React.useMemo(() => {
    // This would be calculated based on active filter
    if (activeFilter === "all") return productCount;
    // Each category has 2-4 products
    return 2; 
  }, [activeFilter, productCount]);

  return (
    <>
      {/* Skip Links for Accessibility */}
      <div className="sr-only">
        <a href="#json-filters" className="skip-link">
          {lang === "fa" ? "رفتن به فیلترها" : "Skip to filters"}
        </a>
        <a href="#json-products" className="skip-link">
          {lang === "fa" ? "رفتن به محصولات" : "Skip to products"}
        </a>
      </div>

      <section className="container mx-auto px-6 py-12" aria-label="Complete product catalog">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className={`flex items-center justify-center gap-3 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
            <motion.span 
              className="h-[2px] w-8 bg-[#D4AF37]"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">
              {lang === "fa" ? "کاتالوگ کامل محصولات" : "Complete Product Catalog"}
            </span>
            <motion.span 
              className="h-[2px] w-8 bg-[#D4AF37]"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </div>
          <h2 className="text-3xl font-black text-[#374151] leading-tight">
            {lang === "fa" ? "همه محصولات ما" : "All Our Products"}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="text-gray-500">
              {filteredCount} {lang === "fa" ? "محصول" : "products"}
            </span>
          </div>
        </motion.div>

        {/* JSON Product Filters */}
        <div id="json-filters" role="region" aria-label="Product filters">
          <JSONProductFilters 
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            isRTL={isRTL}
          />
        </div>

        {/* Filter Status */}
        {activeFilter !== "all" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-black rounded-full border border-[#D4AF37]/20">
              {lang === "fa" ? "فیلتر:" : "Filtered by:"} {activeFilter}
            </span>
          </motion.div>
        )}

        {/* Compact Product Grid */}
        <JSONProductGrid 
          activeFilter={activeFilter}
          isRTL={isRTL}
        />
      </section>
    </>
  );
}
