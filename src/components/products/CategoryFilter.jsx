/**
 * Category Filter Component
 * Reusable category filter buttons with animations
 */

import React, { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useRTL } from '../../hooks/useRTL.js';
import { CATEGORY_FILTERS } from "../../constants/productFilters.js";

export const CategoryFilter = React.memo(({ 
  selectedCategory, 
  onSelectCategory,
  showFilters 
}) => {
  const { lang, isRTL } = useRTL();

  const handleSelectCategory = useCallback((index) => {
    onSelectCategory(index);
  }, [onSelectCategory]);

  const handleClearFilter = useCallback(() => {
    onSelectCategory(null);
  }, [onSelectCategory]);

  return (
    <AnimatePresence>
      {showFilters && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden mt-4"
        >
          <div className="flex flex-wrap gap-2 p-4 bg-white border border-gray-200 rounded-xl">
            {/* All Categories Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelectCategory(null)}
              className={`px-4 py-2 rounded-lg text-xs font-black uppercase transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-[#D4AF37] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {lang === "fa" ? "همه" : "All"}
            </motion.button>

            {/* Category Buttons */}
            {CATEGORY_FILTERS.map((filter, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelectCategory(index)}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase transition-all duration-300 ${
                  selectedCategory === index
                    ? "bg-[#D4AF37] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter[lang]}
              </motion.button>
            ))}

            {/* Clear Filter Button */}
            {selectedCategory !== null && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClearFilter}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-black uppercase transition-all duration-300 bg-red-50 text-red-600 hover:bg-red-100 ${isRTL ? 'mr-auto' : 'ml-auto'}`}
              >
                <X className="w-3 h-3" />
                {lang === "fa" ? "پاک کردن" : "Clear"}
              </motion.button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

CategoryFilter.displayName = 'CategoryFilter';
