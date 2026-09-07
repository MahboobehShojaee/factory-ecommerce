import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useRTL } from "../hooks/useRTL.js";

import InfoBlock from "../components/about/InfoBlock.jsx";
import StatCard from "../components/about/StatCard.jsx";
import LabCard from "../components/about/LabCard.jsx";
import CertificationsSection from "../components/about/CertificationsSection.jsx";
import FactoryCredibilitySection from "../components/about/FactoryCredibilitySection.jsx";
import SeoHead from "../lib/seo/SeoHead.jsx";
import { buildBreadcrumbSchema, buildOrganizationSchema } from "../lib/seo/schema.js";
import { Heading, Text } from "../components/ui/Typography.jsx";
import EngineeringExpertise from "../components/ui/EngineeringExpertise.jsx";
import QualityAssurance from "../components/ui/QualityAssurance.jsx";
import ScrollReveal from "../components/common/ScrollReveal.jsx";
import SectionDivider from "../components/common/SectionDivider.jsx";
import { ScrollRevealStagger } from "../components/common/ScrollReveal.jsx";
import { images } from "../assets/images/registry.js";

export default function About() {
  const { dict } = useLanguage();
  const { isRTL } = useRTL();
  const t = dict.about || {};
  const labSectionRef = useRef(null);
  const processSectionRef = useRef(null);
  const isInView = useInView(labSectionRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processSectionRef, {
    once: true,
    margin: "-100px",
  });

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
      imgSrc: null,
    },
    {
      title: isRTL ? "تست مقاومت هادی" : "Conductor Resistance",
      code: "IEC 60228",
      imgSrc: null,
    },
    {
      title: isRTL ? "آنالیز مواد پلیمری" : "Polymer Analysis",
      code: "ASTM D1238",
      imgSrc: null,
    },
    {
      title: isRTL ? "تست انتشار شعله" : "Flame Retardancy",
      code: "IEC 60332",
      imgSrc: null,
    },
  ];

  const manufacturingSteps = [
    {
      step: "01",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: isRTL ? "بازرسی مواد اولیه" : "Raw Material Inspection",
      description: isRTL
        ? "بررسی دقیق کیفیت و استانداردهای مواد اولیه قبل از شروع فرآیند تولید برای تضمین بالاترین کیفیت نهایی."
        : "Thorough quality inspection of raw materials before production begins to ensure the highest final quality standards.",
      image: images.process.step1,
    },
    {
      step: "02",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: isRTL ? "کشش سیم" : "Wire Drawing",
      description: isRTL
        ? "فرآیند کشش دقیق سیم‌های مسی با استفاده از دستگاه‌های پیشرفته برای رسیدن به ابعاد و خواص مکانیکی مورد نظر."
        : "Precision wire drawing process using advanced machinery to achieve desired dimensions and mechanical properties.",
      image: images.process.step2,
    },
    {
      step: "03",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: isRTL ? "تابیدن و عایق‌کاری" : "Twisting & Insulation",
      description: isRTL
        ? "تابیدن سیم‌ها و اعمال عایق‌کاری با مواد پلیمری با کیفیت بالا برای محافظت در برابر عوامل محیطی و الکتریکی."
        : "Twisting wires and applying high-quality polymer insulation for protection against environmental and electrical factors.",
      image: images.process.step3,
    },
    {
      step: "04",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: isRTL ? "کابل‌سازی و زره‌دار کردن" : "Cable Assembly & Armoring",
      description: isRTL
        ? "مونتاژ نهایی کابل‌ها و اعمال لایه زره برای افزایش مقاومت مکانیکی و محافظت در برابر آسیب‌های فیزیکی."
        : "Final cable assembly and armoring layer application to enhance mechanical strength and protect against physical damage.",
      image: images.process.step4,
    },
    {
      step: "05",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: isRTL ? "آزمایش کیفیت" : "Quality Testing",
      description: isRTL
        ? "انجام تست‌های جامع الکتریکی، مکانیکی و حرارتی مطابق با استانداردهای بین‌المللی برای تضمین عملکرد بهینه."
        : "Comprehensive electrical, mechanical, and thermal testing in compliance with international standards to ensure optimal performance.",
      image: images.process.step5,
    },
    {
      step: "06",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: isRTL ? "بسته‌بندی و ارسال" : "Packaging & Shipping",
      description: isRTL
        ? "بسته‌بندی حرفه‌ای کابل‌ها با برچسب‌گذاری دقیق و آماده‌سازی برای حمل‌ونقل ایمن به مقصد مشتری."
        : "Professional cable packaging with precise labeling and preparation for safe transportation to customer destinations.",
      image: images.process.step6,
    },
  ];

  return (
    <>
      <SeoHead
        title={isRTL ? "درباره ما | ستاره کرمان" : "About Us | Setareh Kerman"}
        description={
          isRTL
            ? "آشنایی با آزمایشگاه، استانداردها و توانمندی های کارخانه سیم و کابل ستاره کرمان."
            : "Learn about Setareh Kerman factory quality systems, lab capabilities, and engineering expertise."
        }
        canonical="/about"
        jsonLd={[
          buildBreadcrumbSchema([
            { name: isRTL ? "خانه" : "Home", url: "https://setarehkerman.com" },
            { name: isRTL ? "درباره ما" : "About Us", url: "https://setarehkerman.com/about" },
          ]),
          buildOrganizationSchema(),
        ]}
      />
      <section
        className={`space-y-12 pb-16 ${isRTL ? "text-right" : "text-left"}`}
      >
        {/* Hero Header */}
        <ScrollReveal>
        <header
          className="space-y-4"
          aria-label="About page introduction"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div
              dir={isRTL ? "rtl" : "ltr"}
            >
              <div className={`max-w-4xl ${isRTL ? "border-r-2 border-[#D4AF37]/60 pr-5" : "border-l-2 border-[#D4AF37]/60 pl-5"}`}>
                <div className="space-y-4">
                  <Text size="xs" weight="black" className="text-[#D4AF37] tracking-[0.4em] uppercase">
                    {t.eyebrow}
                  </Text>
                  <Heading level={1} className="sm:text-5xl">
                    {t.title}
                  </Heading>
                  <Text size="lg" className="max-w-3xl text-gray-500 leading-relaxed">
                    {t.subtitle}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </header>
        </ScrollReveal>

        {/* Main Content Section */}
        <section
          className="container mx-auto px-6"
          aria-label="Quality assurance and expertise"
        >
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
            <div className="space-y-8">
              {/* Content Card */}
              <ScrollReveal>
              <div className="ds-card p-6 sm:p-8">
                <Heading level={3} className="text-xl mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                  {isRTL
                    ? "تضمین کیفیت و تخصص"
                    : "Quality Assurance & Expertise"}
                </Heading>
                <Text size="sm" weight="medium" className="leading-[1.9] text-gray-500 mb-10">
                  {t.content}
                </Text>

                {/* Info Blocks */}
                <div className="grid gap-4 text-sm sm:grid-cols-3">
                  {blocks.map((block, i) => (
                    <InfoBlock key={i} {...block} />
                  ))}
                </div>
              </div>
              </ScrollReveal>

              <ScrollRevealStagger className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {t.stats?.map((item, i) => (
                  <StatCard
                    key={i}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </ScrollRevealStagger>
            </div>

            {/* Sidebar */}
            <ScrollReveal delay={0.1}>
            <aside
              className="ds-card-dark flex flex-col justify-between p-8 sm:p-10"
              aria-label="Laboratory metrics"
            >
              <div className="space-y-6">
                <div className="w-12 h-1 bg-[#D4AF37] rounded-full" />
                <Text size="xs" weight="black" className="text-white tracking-[0.2em] uppercase">
                  {isRTL ? "آزمایشگاه آکرودیته" : "Accredited Laboratory"}
                </Text>
                <Text size="sm" weight="medium" className="text-gray-300 leading-relaxed italic">
                  {isRTL
                    ? "دقت در هر میلی‌متر، اطمینان در هر کیلومتر."
                    : "Precision in every millimeter, trust in every kilometer."}
                </Text>
              </div>
              <div className="mt-10 space-y-3">
                {[
                  {
                    label: isRTL ? "تست روتین" : "Routine Tests",
                    value: "150+",
                  },
                  { label: isRTL ? "تست تایپ" : "Type Tests", value: "40+" },
                  { label: isRTL ? "دقت تست" : "Accuracy", value: "99.9%" },
                ].map((metric, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-3"
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
            </aside>
            </ScrollReveal>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6">
          <SectionDivider />
        </div>

        {/* Lab Equipment Section */}
        <section
          className="container mx-auto px-6 space-y-10 overflow-hidden"
          ref={labSectionRef}
          aria-label="Advanced laboratory equipment"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <span className="h-[2px] w-8 bg-[#D4AF37]"></span>
                <Text size="xs" weight="black" className="text-[#D4AF37] uppercase tracking-[0.3em]">
                  {isRTL ? "تجهیزات آزمایشگاهی" : "Laboratory Equipment"}
                </Text>
                <span className="h-[2px] w-8 bg-[#D4AF37]"></span>
              </div>
              <Heading level={3}>
                {isRTL
                  ? "تجهیزات پیشرفته آزمایشگاهی"
                  : "Advanced Lab Equipment"}
              </Heading>
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
                  transition={{
                    delay: i * 0.2,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                >
                  <LabCard {...item} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Manufacturing Process Section */}
        <section
          className="relative bg-[#F8F9FA] overflow-hidden"
          ref={processSectionRef}
          aria-label="Manufacturing process"
        >
          {/* Subtle Background Gradient */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#D4AF37]/2 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#374151]/3 rounded-full blur-[60px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center pt-12 pb-8 space-y-3"
            >
              <div
                className={`flex items-center justify-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                <Text size="xs" weight="black" className="text-[#D4AF37] uppercase tracking-[0.25em]">
                  {isRTL ? "فرآیند تولید" : "Manufacturing Process"}
                </Text>
                <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              </div>
              <Heading level={2} className="text-2xl md:text-3xl tracking-tight">
                {isRTL
                  ? "جایی که دقت با نوآوری همراه می‌شود"
                  : "Where Precision Meets Innovation"}
              </Heading>
              <Text size="xs" className="max-w-xl mx-auto text-gray-500 leading-relaxed">
                {isRTL
                  ? "فرآیند تولید پیشرفته ما با استفاده از تجهیزات مدرن و استانداردهای بین‌المللی، کیفیت بی‌نظیری را تضمین می‌کند."
                  : "Our advanced manufacturing process utilizes state-of-the-art equipment and international standards to ensure unparalleled quality."}
              </Text>
            </motion.div>

            {/* Compact Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical Timeline Line */}
              <div
                className={`absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37]/15 to-transparent ${isRTL ? "left-6 md:left-1/2" : "left-6 md:left-1/2"} transform md:-translate-x-1/2`}
              />

              {manufacturingSteps.map((step, index) => (
                <ManufacturingStep
                  key={index}
                  step={step}
                  index={index}
                  isRTL={isRTL}
                  isLast={index === manufacturingSteps.length - 1}
                />
              ))}
            </div>

            {/* Bottom Section */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="pt-8 pb-12 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-100 rounded-full shadow-sm">
                <span className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                <span className="text-[10px] text-gray-500 font-medium">
                  {isRTL
                    ? "تضمین کیفیت در هر مرحله از تولید"
                    : "Quality assured at every stage of production"}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {!isRTL && (
        <ScrollReveal>
          <CertificationsSection />
        </ScrollReveal>
        )}

        {!isRTL && (
        <ScrollReveal delay={0.05}>
          <FactoryCredibilitySection />
        </ScrollReveal>
        )}

        <ScrollReveal delay={0.05}>
          <EngineeringExpertise lang={isRTL ? "fa" : "en"} />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <QualityAssurance lang={isRTL ? "fa" : "en"} />
        </ScrollReveal>

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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 bg-[#D4AF37] text-white rounded-full shadow-lg flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.button>
        </motion.div>
      </section>
    </>
  );
}

function ManufacturingStep({ step, index, isRTL, isLast }) {
  const stepRef = useRef(null);
  const stepInView = useInView(stepRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, y: 20 }}
      animate={stepInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative py-5 md:py-6 ${!isLast ? "border-b border-gray-200/40" : ""}`}
    >
      <div
        className={`absolute left-6 md:left-1/2 top-1/2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20 ${isRTL ? "left-6 md:left-1/2" : "left-6 md:left-1/2"}`}
      />
      <div
        className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${isRTL ? (index % 2 === 0 ? "md:flex-row-reverse" : "") : index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
      >
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          animate={stepInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="w-full md:w-1/2"
        >
          <div className="relative aspect-[16/6] overflow-hidden rounded-[16px] shadow-md shadow-gray-200/40">
            <img
              src={step.image}
              alt={step.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#374151]/15 via-transparent to-transparent opacity-30" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
          animate={stepInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full md:w-1/2 space-y-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#D4AF37]/5 rounded-lg flex items-center justify-center border border-[#D4AF37]/10">
              <div className="text-[#D4AF37]">{step.icon}</div>
            </div>
            <Text size="xs" weight="black" className="text-[#D4AF37] tracking-[0.15em] uppercase">
              {isRTL ? "مرحله" : "STEP"} {step.step}
            </Text>
          </div>

          <Heading level={3} className="text-base md:text-lg leading-tight">
            {step.title}
          </Heading>

          <Text size="xs" className="text-gray-500 leading-relaxed">
            {step.description}
          </Text>

          <div
            className={`h-px w-12 bg-gradient-to-r from-[#D4AF37]/30 to-transparent ${isRTL ? "ml-auto" : ""}`}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
