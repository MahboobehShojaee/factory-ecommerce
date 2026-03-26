import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProductCard({
  category,
  isRTL,
  lang = "fa",
  isHighlighted = false,
  onClickHighlight, // برای اتصال به ChatBot یا هایلایت
}) {
  const refScroll = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // 🧠 پشتیبانی همزمان از دیتای قدیم و جدید
  const name =
    typeof category.name === "object" ? category.name?.[lang] : category.name;

  const subtitle =
    typeof category.subtitle === "object"
      ? category.subtitle?.[lang]
      : category.subtitle;

  const description =
    typeof category.description === "object"
      ? category.description?.[lang]
      : category.description;

  const highlights = category.features?.[lang] || category.highlights || [];
  const firstTwoLetters = name?.substring(0, 2) || "";

  // 🔥 اسکرول خودکار هنگام highlight
  useEffect(() => {
    if (isHighlighted && refScroll.current) {
      refScroll.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isHighlighted]);

  if (!inView) return <div ref={ref} className="h-[350px] w-full"></div>;

  return (
    <motion.article
      ref={(node) => {
        ref(node);
        refScroll.current = node;
      }}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: isHighlighted ? 1.02 : 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[40px] border bg-white transition-all duration-500 cursor-pointer
        ${
          isHighlighted
            ? "border-[#D4AF37] shadow-[#D4AF37]/30 ring-2 ring-[#D4AF37]/20"
            : "border-gray-100 shadow-2xl shadow-gray-200/50 hover:shadow-[#D4AF37]/20"
        }
      `}
      onClick={() => onClickHighlight && onClickHighlight(category.id || name)}
    >
      {/* ✨ Highlight Glow */}
      {isHighlighted && (
        <div className="absolute inset-0 bg-[#D4AF37]/5 pointer-events-none" />
      )}

      {/* Watermark */}
      <div
        className={`absolute pointer-events-none opacity-[0.03] text-9xl font-black select-none uppercase tracking-tighter ${
          isRTL ? "-left-6 -top-6" : "-right-6 -top-6"
        }`}
      >
        Setareh
      </div>

      {/* Header */}
      <div className="p-8 pb-0">
        <div
          className={`flex items-start justify-between gap-4 ${
            isRTL ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className={`space-y-2 ${isRTL ? "text-right" : "text-left"}`}>
            <div
              className={`flex items-center gap-2 ${isRTL ? "justify-end" : "justify-start"}`}
            >
              {!isRTL && <span className="h-[2px] w-4 bg-[#D4AF37]" />}
              <p className="text-[10px] font-black tracking-widest text-[#D4AF37] uppercase">
                {subtitle || ""}
              </p>
              {isRTL && <span className="h-[2px] w-4 bg-[#D4AF37]" />}
            </div>
            <h3 className="text-2xl font-black text-[#374151] group-hover:text-[#D4AF37] transition-colors">
              {name || ""}
            </h3>
          </div>

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-[#374151] text-[#D4AF37] shadow-xl group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">
            <span className="text-xs font-black rotate-[-12deg] group-hover:rotate-0 transition-transform">
              {firstTwoLetters}
            </span>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-gray-500 font-medium">
          {description || ""}
        </p>
      </div>

      {/* Highlights */}
      {highlights.length > 0 && (
        <div className="px-8 mt-8">
          <div className="rounded-[30px] bg-gray-50/50 border border-gray-100 p-6">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 text-[11px] font-bold text-[#4B5563] ${
                    isRTL ? "justify-end text-right" : "justify-start text-left"
                  }`}
                >
                  <span
                    className={`${
                      isRTL ? "order-last" : "order-first"
                    } flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]`}
                  >
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="p-8 flex items-center justify-between">
        <div className="h-[1px] flex-1 bg-gray-100"></div>
        <motion.button
          whileHover={{ x: isRTL ? -5 : 5 }}
          className={`${
            isRTL ? "mr-6" : "ml-6"
          } flex items-center gap-3 text-[10px] font-black text-[#374151] uppercase tracking-[0.2em] group/btn`}
        >
          <span className="group-hover/btn:text-[#D4AF37] transition-colors">
            {isRTL ? "کاتالوگ فنی" : "Technical Specs"}
          </span>

          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 group-hover/btn:bg-[#D4AF37] group-hover/btn:text-white transition-all ${
              isRTL ? "" : "rotate-180"
            }`}
          >
            <span className="text-lg">←</span>
          </div>
        </motion.button>
      </div>
    </motion.article>
  );
}
