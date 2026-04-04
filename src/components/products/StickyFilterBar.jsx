import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext.jsx";

export default function StickyFilterBar({ 
  activeFilter, 
  setActiveFilter, 
  filteredCount, 
  totalCount,
  showClearAll = false,
  isRTL 
}) {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Show/hide sticky bar based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClearAll = () => {
    setActiveFilter("all");
    setSearchTerm("");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
        >
          <div className="container mx-auto px-6 py-3">
            <div className={`flex items-center justify-between gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              {/* Search */}
              <div className="flex items-center gap-2 flex-1 max-w-md">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder={lang === "fa" ? "جستجوی محصولات..." : "Search products..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20"
                  />
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Filter Status */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  {filteredCount} {lang === "fa" ? "از" : "of"} {totalCount} {lang === "fa" ? "محصولات" : "products"}
                </span>
                
                {showClearAll && activeFilter !== "all" && (
                  <button
                    onClick={handleClearAll}
                    className="text-xs text-[#D4AF37] hover:text-[#B8941F] font-medium transition-colors"
                  >
                    {lang === "fa" ? "پاک کردن" : "Clear All"}
                  </button>
                )}

                {/* Active Filter Badge */}
                {activeFilter !== "all" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-black rounded-full border border-[#D4AF37]/20"
                  >
                    {activeFilter}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
