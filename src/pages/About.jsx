import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";

import InfoBlock from "../components/about/InfoBlock.jsx";
import StatCard from "../components/about/StatCard.jsx";
import LabCard from "../components/about/LabCard.jsx";

export default function About() {
  const { dict, isRTL } = useLanguage();
  const t = dict.about || {};
  const labSectionRef = useRef(null);
  const isInView = useInView(labSectionRef, { once: true, margin: "-100px" });

  const blocks = [
    {
      title: isRTL ? "تست الکتریکی" : "Electrical Test",
      text: isRTL ? "تداوم و مقاومت عایقی" : "Continuity & Insulation",
    },
    {
      title: isRTL ? "تست مکانیکی" : "Mechanical Test",
      text: isRTL ? "کشش و خمش نهایی" : "Tensile & Elongation",
    },
    {
      title: isRTL ? "تست حریق" : "Fire Test",
      text: isRTL ? "تست خودخاموش‌شوندگی" : "Self-extinguishing Test",
    },
  ];

  const labEquipment = [
    {
      title: isRTL ? "تست ولتاژ بالا" : "High Voltage Test",
      code: "IEC 60502",
      imgSrc: "/src/assets/images/images/lab1.jpg",
    },
    {
      title: isRTL ? "تست مقاومت هادی" : "Conductor Resistance",
      code: "IEC 60228",
      imgSrc: "/src/assets/images/images/lab2.jpg",
    },
    {
      title: isRTL ? "آنالیز مواد پلیمری" : "Polymer Analysis",
      code: "ASTM D1238",
      imgSrc: "/src/assets/images/images/lab3.jpg",
    },
    {
      title: isRTL ? "تست انتشار شعله" : "Flame Retardancy",
      code: "IEC 60332",
      imgSrc: "/src/assets/images/images/lab4.jpg",
    },
  ];

  return (
    <main
      className={`space-y-12 pb-16 ${isRTL ? "text-right" : "text-left"}`}
    >
      {/* Hero Header */}
      <header
        className="space-y-4 border-[#D4AF37]"
        aria-label="About page introduction"
      >
        <div className={`container mx-auto px-6 ${isRTL ? "border-r-4 pr-6" : "border-l-4 pl-6"}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-[10px] font-black tracking-[0.4em] text-[#D4AF37] uppercase">
              {t.eyebrow}
            </p>
            <h2 className="text-4xl font-black tracking-tight text-[#374151] sm:text-5xl">
              {t.title}
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-gray-500 sm:text-lg font-medium">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="container mx-auto px-6" aria-label="Quality assurance and expertise">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-8">
            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white border border-gray-100 p-8 shadow-2xl shadow-gray-200/50 rounded-[40px] relative overflow-hidden"
            >
              <div
                className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl`}
              />
              <h3 className="text-xl font-black text-[#374151] mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                {isRTL ? "تضمین کیفیت و تخصص" : "Quality Assurance & Expertise"}
              </h3>
              <p className="text-sm leading-[1.9] text-gray-500 mb-10 font-medium">
                {t.content}
              </p>

              {/* Info Blocks */}
              <div className="grid gap-4 text-sm sm:grid-cols-3">
                {blocks.map((block, i) => (
                  <InfoBlock key={i} {...block} />
                ))}
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
            >
              {t.stats?.map((item, i) => (
                <StatCard key={i} i={i} label={item.label} value={item.value} />
              ))}
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col justify-between border border-white/20 bg-[#374151] p-10 shadow-2xl rounded-[45px] relative overflow-hidden"
            aria-label="Laboratory metrics"
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full translate-x-20 translate-y-20 blur-[80px]" />
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
              <p className="text-xs font-black tracking-[0.2em] text-white uppercase">
                {isRTL ? "آزمایشگاه آکرودیته" : "Accredited Laboratory"}
              </p>
              <p className="text-sm leading-relaxed text-gray-300 italic font-medium">
                {isRTL
                  ? "دقت در هر میلی‌متر، اطمینان در هر کیلومتر."
                  : "Precision in every millimeter, trust in every kilometer."}
              </p>
            </div>
            <div className="relative z-10 mt-12 space-y-4">
              {[
                { label: isRTL ? "تست روتین" : "Routine Tests", value: "150+" },
                { label: isRTL ? "تست تایپ" : "Type Tests", value: "40+" },
                { label: isRTL ? "دقت تست" : "Accuracy", value: "99.9%" },
              ].map((metric, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-[22px] bg-white/5 border border-white/10 px-5 py-4 backdrop-blur-md"
                >
                  <span className="font-black text-[#D4AF37] text-lg">
                    {metric.value}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Section Divider */}
      <div className="container mx-auto px-6" aria-hidden="true">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-[#F8F9FA] px-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lab Equipment Section */}
      <section className="container mx-auto px-6 space-y-10 overflow-hidden" ref={labSectionRef} aria-label="Advanced laboratory equipment">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="flex flex-col items-center text-center">
            <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              <span className="h-[2px] w-8 bg-[#D4AF37]"></span>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">
                {isRTL ? "تجهیزات آزمایشگاهی" : "Laboratory Equipment"}
              </span>
              <span className="h-[2px] w-8 bg-[#D4AF37]"></span>
            </div>
            <h3 className="text-2xl font-black text-[#374151]">
              {isRTL ? "تجهیزات پیشرفته آزمایشگاهی" : "Advanced Lab Equipment"}
            </h3>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={
              isInView ? { x: isRTL ? ["0%", "-50%"] : ["-50%", "0%"] } : {}
            }
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {labEquipment.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
              >
                <LabCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className={`fixed bottom-8 z-50 ${isRTL ? "right-8" : "left-8"}`}
        aria-hidden="true"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-[#D4AF37] text-white rounded-full shadow-lg flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      </motion.div>
    </main>
  );
}
