import React from "react";

export default function HeaderSection({ t, isRTL }) {
  return (
    <header
      className={`space-y-4 ${
        isRTL ? "pr-8 border-r-4" : "pl-8 border-l-4"
      } border-[#D4AF37]`}
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
  );
}