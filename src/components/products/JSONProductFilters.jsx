import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext.jsx";
import productData from "../../../server/data/products.json";

export default function JSONProductFilters({ activeFilter, setActiveFilter, isRTL }) {
  const { lang } = useLanguage();

  // Extract unique categories from JSON data with counts
  const categoriesWithCounts = React.useMemo(() => {
    const categoryMap = new Map();
    
    productData.forEach(product => {
      const categoryName = product.category[lang];
      if (categoryMap.has(categoryName)) {
        categoryMap.get(categoryName).count++;
      } else {
        categoryMap.set(categoryName, {
          name: categoryName,
          count: 1,
          originalName: product.category
        });
      }
    });
    
    return Array.from(categoryMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [lang]);

  // Filter options with counts
  const filterOptions = React.useMemo(() => {
    const allLabel = lang === "fa" ? "همه محصولات" : "All Products";
    return [
      { 
        id: "all", 
        label: allLabel,
        count: productData.length
      },
      ...categoriesWithCounts.map(category => ({
        id: category.name,
        label: category.name,
        count: category.count,
        originalName: category.originalName
      }))
    ];
  }, [categoriesWithCounts, lang]);

  const handleClearAll = () => {
    setActiveFilter("all");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-wrap gap-3 mt-8 mb-8 ${isRTL ? "justify-end" : "justify-start"}`}
    >
      {filterOptions.map((option) => (
        <motion.button
          key={option.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(option.id)}
          className={`group relative px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
            activeFilter === option.id
              ? "bg-[#374151] text-white border-[#374151] shadow-lg shadow-gray-200"
              : "bg-white text-gray-400 border-gray-100 hover:border-[#D4AF37] hover:text-[#D4AF37]"
          }`}
        >
          {option.label}
          
          {/* Count Badge */}
          <span className={`absolute -top-2 -right-2 px-2 py-0.5 text-[8px] font-black rounded-full transition-all duration-300 ${
            activeFilter === option.id
              ? "bg-white text-[#374151]"
              : "bg-[#D4AF37] text-white group-hover:bg-[#B8941F]"
          }`}>
            {option.count}
          </span>
        </motion.button>
      ))}

      {/* Clear All Button */}
      {activeFilter !== "all" && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClearAll}
          className="px-4 py-2.5 rounded-full text-[10px] font-medium text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
        >
          {lang === "fa" ? "پاک کردن" : "Clear"}
        </motion.button>
      )}
    </motion.div>
  );
}
