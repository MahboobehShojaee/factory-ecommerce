import React from "react";

export default function ProductFilters({
  filterOptions,
  activeFilter,
  setActiveFilter,
  isRTL,
}) {
  return (
    <nav
      className={`flex flex-wrap gap-3 mt-8 ${
        isRTL ? "justify-end" : "justify-start"
      }`}
      aria-label="Product filters"
    >
      {filterOptions.map((opt) => (
        <button
          key={opt.id}
          onClick={() => setActiveFilter(opt.id)}
          className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
            activeFilter === opt.id
              ? "bg-[#374151] text-white border-[#374151] shadow-lg shadow-gray-200"
              : "bg-white text-gray-400 border-gray-100 hover:border-[#D4AF37] hover:text-[#D4AF37]"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </nav>
  );
}
