import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function NotFound() {
  const { isRTL, dict } = useLanguage();
  const t = dict.notFound; // فرض بر این است که در فایل دیکشنری بخش notFound را دارید

  // اگر در دیکشنری ندارید، می‌توانید مستقیماً اینجا تعریف کنید:
  const content = {
    title: isRTL ? "ارتباط قطع شده است!" : "Connection Lost!",
    sub: isRTL
      ? "صفحه‌ای که به دنبال آن هستید یافت نشد یا ممکن است منتقل شده باشد."
      : "The page you are looking for was not found or has been moved.",
    btn: isRTL ? "بازگشت به مرکز کنترل" : "Back to Control Center",
  };

  return (
    <div
      className={`min-h-[70vh] flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden ${isRTL ? "font-fa" : "font-en"}`}
    >
      {/* المان گرافیکی پس‌زمینه */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <h1 className="text-[15rem] md:text-[20rem] font-black text-[#374151]">
          404
        </h1>
      </div>

      {/* بخش بصری کابل و عدد */}
      <div className="relative">
        <motion.div
          animate={{ rotate: [0, -1, 1, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="text-7xl md:text-9xl font-black text-[#374151] flex items-center gap-4 relative z-10"
        >
          4
          <div className="relative flex flex-col items-center">
            {/* واشر مسی */}
            <div className="w-16 h-16 md:w-24 md:h-24 border-[8px] md:border-[12px] border-[#D4AF37] rounded-full shadow-[0_0_30px_rgba(212,175,55,0.2)] flex items-center justify-center">
              <div className="w-3 h-3 bg-[#374151] rounded-full animate-pulse" />
            </div>
            <div className="absolute -bottom-8 w-1 h-12 bg-gradient-to-b from-[#D4AF37] to-transparent rounded-full" />
          </div>
          4
        </motion.div>
      </div>

      {/* متن‌ها */}
      <div className="space-y-4 relative z-10 px-6">
        <h2 className="text-2xl font-black text-[#374151] uppercase tracking-tighter sm:text-3xl">
          {content.title}
        </h2>
        <p className="max-w-md mx-auto text-gray-500 font-medium leading-relaxed text-sm md:text-base">
          {content.sub}
        </p>
      </div>

      {/* دکمه بازگشت */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/"
          className="group relative inline-flex items-center gap-3 bg-[#374151] hover:bg-[#D4AF37] text-white px-8 py-4 rounded-2xl font-black text-[10px] md:text-xs transition-all duration-500 shadow-xl shadow-gray-300/20"
        >
          <span className="uppercase tracking-[0.2em]">{content.btn}</span>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isRTL ? "group-hover:translate-x-[-5px]" : "rotate-180 group-hover:translate-x-[5px]"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>
      </motion.div>

      {/* تزئینات گوشه */}
      <div
        className={`absolute top-0 ${isRTL ? "right-0" : "left-0"} w-32 h-[1px] bg-gradient-to-l from-[#D4AF37] to-transparent opacity-20`}
      />
    </div>
  );
}
