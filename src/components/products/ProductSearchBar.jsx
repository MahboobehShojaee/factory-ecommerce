/**
 * Product Search Bar Component
 * Reusable search input with filter toggle
 */

import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { useRTL } from '../../hooks/useRTL.js';

export const ProductSearchBar = React.memo(({ 
  searchTerm, 
  onSearchChange, 
  showFilters, 
  onToggleFilters,
  hasActiveFilter,
  placeholder
}) => {
  const { lang, isRTL } = useRTL();
  const defaultPlaceholder = lang === "fa" ? "جستجوی محصولات..." : "Search products...";

  const handleSearchChange = useCallback((e) => {
    onSearchChange(e.target.value);
  }, [onSearchChange]);

  const handleToggleFilters = useCallback(() => {
    onToggleFilters();
  }, [onToggleFilters]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex items-center gap-4"
    >
      {/* Search Input */}
      <div className="flex-1">
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder || defaultPlaceholder}
            value={searchTerm}
            onChange={handleSearchChange}
            className={`w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 ${
              isRTL ? "pr-10 pl-4" : "pl-10 pr-4"
            }`}
          />
          <svg
            className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 ${isRTL ? "right-3" : "left-3"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Filter Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggleFilters}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
          showFilters
            ? "bg-[#D4AF37] text-white border-[#D4AF37]"
            : "bg-white text-[#374151] border-gray-200 hover:border-[#D4AF37]"
        }`}
      >
        <Filter className="w-4 h-4" />
        <span className="text-xs font-black uppercase">
          {lang === "fa" ? "فیلترها" : "Filters"}
        </span>
        {hasActiveFilter && (
          <span className="w-2 h-2 bg-white rounded-full" />
        )}
      </motion.button>
    </motion.div>
  );
});

ProductSearchBar.displayName = 'ProductSearchBar';
