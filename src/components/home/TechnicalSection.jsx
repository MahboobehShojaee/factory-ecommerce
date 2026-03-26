import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function TechnicalSection() {
  const { dict, isRTL } = useLanguage();
  const t = dict.home || {};

  return (
    <section className="container mx-auto px-6 mt-10">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative max-w-6xl mx-auto overflow-hidden 
        rounded-[50px] bg-gradient-to-br 
        from-[#D4AF37]/20 to-[#4B5563]/10 
        p-[1px] shadow-2xl"
      >
        <div className="bg-white rounded-[49px] p-10 lg:p-16 grid md:grid-cols-3 items-center gap-12">
          {/* LOGO SECTION */}

          <div
            className={`hidden md:flex items-center justify-center relative 
            ${isRTL ? "md:order-last border-r" : "md:order-first border-l"} 
            border-gray-100 px-12`}
          >
            <div className="relative flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border-[3px] border-dashed border-[#D4AF37]/20 animate-spin-slow" />

              <img
                src="/logo-wb-wt.png"
                className="absolute w-28 h-28 object-contain 
                drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
                alt="Setareh Kerman"
              />
            </div>
          </div>

          {/* TEXT */}

          <div
            className={`md:col-span-2 space-y-6 ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`flex items-center ${
                isRTL ? "justify-end" : "justify-start"
              }`}
            >
              <span
                className="bg-[#374151] text-[#D4AF37] 
              px-5 py-2 rounded-xl text-[11px] 
              font-black tracking-[0.2em] uppercase 
              shadow-lg shadow-gray-200"
              >
                {isRTL ? "مشخصات فنی و کیفی" : "Technical Specifications"}
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-black text-[#374151] leading-tight italic uppercase">
              {t.macroTextLine1 ||
                (isRTL
                  ? "تکنولوژی برتر انتقال قدرت"
                  : "Superior Power Technology")}
            </h2>

            <p className="text-gray-500 font-medium text-xl leading-relaxed max-w-2xl">
              {t.macroTextLine2 ||
                (isRTL
                  ? "تضمین پایداری شبکه با بهره‌گیری از خلوص مس ۹۹.۹٪ در تمامی محصولات."
                  : "Ensuring network stability using 99.9% copper purity.")}
            </p>

            {/* STANDARD LINE */}

            <div
              className={`flex items-center gap-4 pt-6 ${
                isRTL ? "justify-end" : "justify-start"
              }`}
            >
              {!isRTL && (
                <div className="w-16 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
              )}

              <span
                className="text-[11px] font-extrabold text-gray-400 
                uppercase tracking-[0.3em] italic"
              >
                {isRTL
                  ? "استاندارد ملی و بین‌المللی"
                  : "Global Conductivity Standards"}
              </span>

              {isRTL && (
                <div className="w-16 h-[2px] bg-gradient-to-l from-[#D4AF37] to-transparent" />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
