/**
 * Pagination Component
 * Reusable pagination with animated buttons
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useRTL } from '../../hooks/useRTL.js';

export const Pagination = React.memo(({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  const { isRTL } = useRTL();

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8 pt-8 border-t border-gray-100">
      {/* Previous Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white border border-gray-200 text-[#374151] hover:border-[#D4AF37] hover:text-[#D4AF37]"
        }`}
        aria-label="Previous page"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <motion.button
          key={page}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg font-black text-sm transition-all ${
            currentPage === page
              ? "bg-[#D4AF37] text-white"
              : "bg-white border border-gray-200 text-[#374151] hover:border-[#D4AF37] hover:text-[#D4AF37]"
          }`}
          aria-label={`Page ${page}`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </motion.button>
      ))}

      {/* Next Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white border border-gray-200 text-[#374151] hover:border-[#D4AF37] hover:text-[#D4AF37]"
        }`}
        aria-label="Next page"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>
    </div>
  );
});

Pagination.displayName = 'Pagination';
