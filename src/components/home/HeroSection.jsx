import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useRTL } from "../../hooks/useRTL.js";
import { useEffect, useState } from "react";
import Image from "../../components/ui/Image.jsx";
import { Download, FlaskConical, Globe, Handshake, Settings, ShieldCheck, Zap } from "lucide-react";
import { getCatalogConfig } from "../../content/homepage/catalog.js";
import { analytics } from "../../lib/analytics/GoogleAnalytics.jsx";
import { MOTION, staggerContainerVariants, staggerItemVariants } from "../../animations/cinematicMotion.js";
import { images } from "../../assets/images/registry.js";

const FEATURE_ICONS = [ShieldCheck, Settings, Zap, Handshake];
const STAT_ICONS = [FlaskConical, null, Zap, Globe];

function StatCoilIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="16" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 16c0-4 2.5-7 7-7s7 3 7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HeroSection() {
  const { dict, lang } = useLanguage();
  const { isRTL } = useRTL();
  const t = dict.home || {};
  const stats = t.stats || [];
  const heroFeatures = t.heroFeatures || [];
  const heroStatCard = t.heroStatCard || {};
  const catalogConfig = getCatalogConfig(lang);

  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion === true;

  const [isCompact, setIsCompact] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsCompact(mq.matches);
    const handler = (e) => setIsCompact(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollY } = useScroll();
  const bgScroll = useTransform(scrollY, [0, 800], [0, -55]);
  const imageScroll = useTransform(scrollY, [0, 600], [0, -45]);

  const glowAnim = reduceMotion
    ? {}
    : {
        scale: [1, 1.05, 1],
        opacity: [0.18, 0.28, 0.18],
        transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
      };

  const floatAnim = reduceMotion
    ? {}
    : {
        y: [0, -6, 0, -2, 0],
        transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
      };

  const breatheAnim = reduceMotion
    ? {}
    : {
        scale: [1, 1.015, 1],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      };

  const textMotion = reduceMotion
    ? {}
    : { initial: "hidden", animate: "visible", variants: staggerContainerVariants };

  const itemMotion = reduceMotion ? {} : { variants: staggerItemVariants };

  const workerEnter = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.85, delay: 0.28, ease: MOTION.ease.out },
      };

  const statsEnter = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, delay: 0.42, ease: MOTION.ease.out },
      };

  return (
    <section
      className={`relative flex flex-col overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] bg-gradient-to-br from-[#FAFBFC] via-[#F5F6F8] to-[#EEF0F3] border border-white/80 shadow-[0_24px_60px_-12px_rgba(55,65,81,0.18),0_8px_24px_-8px_rgba(212,175,55,0.12)] mx-2 mt-1.5 sm:mt-2 ${isRTL ? "text-right" : "text-left"}`}
      aria-labelledby="hero-heading"
    >
      {/* Top inner highlight */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 to-transparent"
        aria-hidden="true"
      />

      {/* Subtle gold accent line */}
      <motion.div
        className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"
        animate={reduceMotion ? {} : { x: ["-100%", "100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      {/* Golden blurred shape */}
      <motion.div
        animate={
          reduceMotion ? {} : { opacity: [0.12, 0.22, 0.12], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#FFD700]/15 via-[#D4AF37]/15 to-[#B8860B]/15 blur-[150px]"
        aria-hidden="true"
      />

      {/* Factory background — full-bleed cover on all breakpoints */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          style={{ y: bgScroll }}
          className="absolute inset-0 min-h-full min-w-full"
        >
          <img
            src={images.factory}
            alt=""
            className="absolute left-1/2 top-1/2 h-[125%] w-[125%] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center opacity-[0.08] grayscale"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </motion.div>
      </div>

      {/* MOBILE & TABLET: man image as background overlay (below lg breakpoint) */}
      {isCompact && (
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none z-[5]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/25 to-[#EEF0F3]/90 z-10" />
          <div
            className={`absolute inset-0 z-10 ${isRTL ? "bg-gradient-to-r" : "bg-gradient-to-l"} from-transparent via-white/20 to-white/75`}
          />
          <div className="absolute -right-10 bottom-0 w-[250px] h-[250px] bg-gradient-to-tr from-[#FFD700]/10 via-[#D4AF37]/8 to-transparent rounded-full blur-[100px]" />
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -3, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute inset-y-0 ${isRTL ? "left-0" : "right-0"} w-[58%] bg-cover bg-no-repeat bg-[position:center_25%] opacity-[0.22] contrast-[1.05] saturate-[0.85]`}
            style={{ backgroundImage: `url(${images.men})` }}
          />
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="container relative z-20 mx-auto w-full flex-1 flex items-center px-5 sm:px-8 py-3 sm:py-4 lg:py-5">
        <div className="w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-2.5 lg:gap-5 xl:gap-7 lg:items-center">
          {/* TEXT SIDE */}
          <motion.div
            {...textMotion}
            className="self-start space-y-2 sm:space-y-2.5 lg:space-y-2.5"
          >
            <motion.div
              {...itemMotion}
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-white/75 px-3.5 py-1 text-[11px] sm:text-xs font-bold text-[#9A7B1A] shadow-[0_2px_12px_rgba(212,175,55,0.15)] backdrop-blur-sm ring-1 ring-[#D4AF37]/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-[#FFD700] to-[#B8860B]" />
              </span>
              <span className="tracking-wide">{t.badge}</span>
            </motion.div>

            <motion.h1
              {...itemMotion}
              id="hero-heading"
              className="text-balance text-[1.35rem] sm:text-2xl lg:text-[1.9rem] xl:text-[2.1rem] font-black leading-[1.08] tracking-tight text-[#1F2937] w-full"
            >
              {t.title?.split("{highlight}").map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span
                      className="inline animate-gold-shimmer text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #B8860B 0%, #FFD700 50%, #B8860B 100%)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      {t.titleHighlight}
                    </span>
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              {...itemMotion}
              className="text-[#4B5563] max-w-md sm:max-w-lg text-sm sm:text-[0.9375rem] font-medium leading-snug"
            >
              {t.subtitle}
            </motion.p>

            <motion.div
              {...itemMotion}
              className="flex flex-col sm:flex-row gap-2 pt-0"
              role="group"
              aria-label="Primary actions"
            >
              <Link
                to="/products"
                className="bg-[#374151] text-white px-5 py-1.5 sm:py-2 rounded-xl text-sm sm:text-[0.9375rem] font-bold shadow-[0_10px_24px_-8px_rgba(55,65,81,0.55)] hover:bg-gradient-to-r hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#B8860B] hover:text-white hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.45)] transform hover:scale-[1.02] transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 text-center"
              >
                {t.ctaPrimary}
              </Link>
              <a
                href={catalogConfig.path}
                download={catalogConfig.filename}
                onClick={() => analytics.trackCatalogDownload(false)}
                className="inline-flex items-center justify-center gap-1.5 border border-[#D1D5DB] bg-white/85 text-[#374151] px-5 py-1.5 sm:py-2 rounded-xl text-sm sm:text-[0.9375rem] font-bold hover:border-[#D4AF37] hover:bg-[#FFFBEB] hover:text-[#9A7B1A] transform hover:scale-[1.02] transition-all duration-500 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 backdrop-blur-sm"
                aria-label={`${catalogConfig.downloadText} - ${lang === "fa" ? "نسخه فارسی" : "English Version"}`}
              >
                <Download className="w-4 h-4 flex-shrink-0" />
                <span>{catalogConfig.downloadText}</span>
              </a>
            </motion.div>

            {/* Feature icons row */}
            <motion.div
              {...itemMotion}
              className={`flex flex-wrap items-start gap-y-1 pt-1.5 border-t border-gray-200/70 ${isRTL ? "justify-start" : ""}`}
            >
              {heroFeatures.slice(0, 4).map((feature, i) => {
                const Icon = FEATURE_ICONS[i] || ShieldCheck;
                return (
                  <div
                    key={i}
                    className={`flex flex-col items-center gap-0.5 px-2 sm:px-2.5 min-w-[3.75rem] sm:min-w-[4.25rem] ${
                      i > 0
                        ? isRTL
                          ? "border-r border-gray-200"
                          : "border-l border-gray-200"
                        : ""
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#D4AF37]" strokeWidth={1.5} />
                    <span className="text-[9px] sm:text-[10px] font-medium text-[#4B5563] text-center leading-tight">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* DESKTOP ONLY: image side */}
          {!isCompact && (
            <motion.div
              {...workerEnter}
              className="relative flex justify-center items-center min-h-[175px] lg:min-h-[195px]"
              aria-hidden="true"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#D4AF37]/15 bg-gradient-to-t from-[#D4AF37]/5 via-transparent to-transparent" />
              <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 w-[230px] h-11 rounded-[100%] bg-[#374151]/10 blur-2xl" />

              <motion.div
                animate={glowAnim}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-[#FFD700]/20 via-[#D4AF37]/15 to-[#B8860B]/10 blur-[100px]"
              />

              <motion.div
                animate={floatAnim}
                style={{ y: imageScroll }}
                className="relative z-20"
              >
                <motion.div animate={breatheAnim}>
                  <Image
                    src={images.men}
                    loading="lazy"
                    className="max-w-[210px] sm:max-w-[240px] lg:max-w-[285px] xl:max-w-[305px] drop-shadow-[0_28px_42px_rgba(17,24,39,0.26)]"
                    alt="Factory worker"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* STATS BAR */}
      <motion.div
        {...statsEnter}
        className="relative z-30 mx-3 sm:mx-auto w-[calc(100%-1.5rem)] sm:w-[92%] max-w-5xl shrink-0 mt-auto pt-1 mb-4 sm:mb-5 lg:mb-5 rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-[0_16px_40px_-12px_rgba(17,24,39,0.45)] border border-white/15"
        role="region"
        aria-label="Key statistics"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
        <div className="bg-gray-700/90 backdrop-blur-xl py-2 sm:py-2.5 px-2.5 sm:px-3.5 lg:px-4">
          <div
            className={`flex flex-col lg:flex-row lg:items-stretch gap-2.5 lg:gap-0 ${isRTL ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Feature card */}
            <div
              className={`flex items-center gap-2 rounded-lg border border-white/10 bg-gray-800/50 px-2 py-1.5 sm:p-2 lg:min-w-[185px] lg:max-w-[220px] shrink-0 ${isRTL ? "flex-row-reverse text-right lg:ml-2.5" : "lg:mr-2.5"}`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-[#D4AF37]/35 bg-[#D4AF37]/10">
                <img
                  src={images.menCableDetail}
                  alt=""
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                  width={36}
                  height={36}
                />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-[11px] font-bold text-white leading-snug">
                  {heroStatCard.title}
                </p>
                <p className="text-[8px] sm:text-[9px] text-white/50 mt-0.5 leading-snug">
                  {heroStatCard.subtitle}
                </p>
              </div>
            </div>

            {/* Stat columns */}
            <div
              className={`grid flex-1 grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-1.5 sm:gap-x-2 lg:gap-0 ${
                isRTL
                  ? "lg:divide-x-reverse lg:divide-x lg:divide-white/10"
                  : "lg:divide-x lg:divide-white/10"
              }`}
            >
              {stats.slice(0, 4).map((item, i) => {
                const Icon = STAT_ICONS[i];
                const isCapacity = i === 1;
                return (
                  <div
                    key={i}
                    className={`flex gap-1.5 px-1 sm:px-2 lg:px-2.5 ${isRTL ? "flex-row-reverse text-right" : "text-left"}`}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#D4AF37]">
                      {isCapacity ? (
                        <StatCoilIcon className="w-3.5 h-3.5" />
                      ) : (
                        Icon && <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                      )}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[7px] sm:text-[7.5px] uppercase text-[#D4AF37]/90 tracking-[0.12em] font-semibold mb-0.5 leading-tight">
                        {item.label}
                      </p>
                      <p className="text-[11px] sm:text-xs lg:text-sm font-black text-white leading-tight tabular-nums">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
