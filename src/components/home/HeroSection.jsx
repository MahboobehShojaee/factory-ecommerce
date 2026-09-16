import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useRTL } from "../../hooks/useRTL.js";
import { Download, ArrowLeft, ArrowRight, Factory, Globe, Handshake, Settings, ShieldCheck, Zap } from "lucide-react";
import { getCatalogConfig } from "../../content/homepage/catalog.js";
import { getLocalizedNavPath } from "../../content/navigation/data.js";
import { analytics } from "../../lib/analytics/GoogleAnalytics.jsx";
import { heroEnterProps } from "../../animations/cinematicMotion.js";
import { images } from "../../assets/images/registry.js";

const FEATURE_ICONS = [ShieldCheck, Zap, Settings, Handshake];
const STAT_ICONS = [Factory, null, ShieldCheck, Globe];

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
  const CtaArrow = isRTL ? ArrowLeft : ArrowRight;

  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion === true;

  // Parallax effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : 50]);
  const y2 = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : 30]);
  const scale = useTransform(scrollY, [0, 500], [1, reduceMotion ? 1 : 1.05]);

  // Language-specific hero image
  const heroImage = lang === "fa" ? images.heroBackdropFA : images.heroBackdrop;
  const heroImageMobile = lang === "fa" ? images.heroBackdropFA : images.heroBackdropMobile;

  const enter = (step) => heroEnterProps(step, reduceMotion);

  return (
    <section
      className={`relative isolate w-full max-w-none overflow-hidden p-0 ${isRTL ? "text-right" : "text-left"}`}
      aria-labelledby="hero-heading"
      style={{ minHeight: "100vh" }}
    >
      {/* Full-bleed cinematic background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y: y1, scale: reduceMotion ? 1 : scale }}
          className="absolute inset-0"
        >
          <img
            src={heroImageMobile}
            alt=""
            width={1408}
            height={704}
            className="relative z-0 block h-auto w-full max-w-none object-cover lg:hidden"
            decoding="async"
            fetchPriority="high"
          />
          <img
            src={heroImage}
            alt=""
            width={1774}
            height={887}
            className="relative z-0 hidden h-auto w-full max-w-none object-cover lg:block"
            decoding="async"
            fetchPriority="high"
          />
        </motion.div>

        {/* Subtle gradient for text readability */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"
          aria-hidden="true"
        />
      </div>

      {/* ---------------------------------------------------------------- COPY */}
      <motion.div
        dir={isRTL ? "rtl" : "ltr"}
        style={{ y: y2 }}
        className={`relative z-20 box-border flex w-full min-w-0 max-w-full flex-col items-start px-5 pt-32 pb-52 sm:px-8 sm:pt-36 sm:pb-56
          lg:absolute lg:inset-x-auto lg:right-[5%] lg:w-[45%] lg:max-w-[45%] lg:p-0 lg:pb-0
          ${isRTL ? "lg:top-[17.5%]" : "lg:top-[16.5%]"}`}
      >
        <div className="w-full pt-5 sm:pt-7 lg:pt-[2.5vw] mt-6 sm:mt-8 lg:mt-[2vw]">
        <motion.h1
          {...enter(0)}
          id="hero-heading"
          className={`w-full max-w-full text-balance break-words text-[1.8rem] font-black leading-[1.2] tracking-tight text-[#374151] sm:text-[2.2rem] lg:leading-[1.14] ${
            isRTL
              ? "lg:whitespace-nowrap lg:text-[3.5vw]"
              : "lg:whitespace-normal lg:text-[clamp(1.5rem,2.5vw,3rem)]"
          }`}
        >
          {t.title?.split("{highlight}").map((part, index, array) => (
            <span key={index}>
              {part}
              {index < array.length - 1 && (
                <span className="text-[#D4AF37]">
                  {t.titleHighlight}
                </span>
              )}
            </span>
          ))}
        </motion.h1>

        <motion.p
          {...enter(1)}
          className="mt-4 w-full max-w-[30rem] text-[0.95rem] leading-[1.75] text-[#374151] sm:text-[1rem]
            lg:mt-[1.05vw] lg:max-w-full lg:text-[1.32vw] lg:leading-[1.63]"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          {...enter(2)}
          className="mt-6 flex w-full min-w-0 max-w-full flex-row items-stretch gap-3 sm:gap-4 lg:mt-[1.46vw] lg:w-full lg:max-w-full lg:gap-[0.98vw]"
          role="group"
          aria-label="Primary actions"
        >
          <Link
            to={getLocalizedNavPath("/products", lang)}
            className="group inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-4 py-3 text-[11px] font-bold leading-tight text-[#26313A] shadow-[0_4px_16px_-4px_rgba(212,175,55,0.4)] transition-all duration-300 hover:bg-[#E5B94E] hover:shadow-[0_6px_20px_-4px_rgba(212,175,55,0.5)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 min-[380px]:gap-2 min-[380px]:px-5 min-[380px]:text-[12px] sm:min-w-[200px] sm:flex-none sm:justify-between sm:gap-4 sm:px-6 sm:py-3 sm:text-sm
              lg:min-w-0 lg:flex-1 lg:justify-between lg:gap-[1.4vw] lg:whitespace-nowrap lg:px-[1.2vw] lg:py-[0.82vw] lg:text-[1.22vw] lg:leading-[1.2]"
          >
            <span className="truncate">{t.ctaPrimary}</span>
            <CtaArrow
              className={`h-4 w-4 shrink-0 transition-transform duration-300 min-[380px]:h-4 min-[380px]:w-4 sm:h-4 sm:w-4 lg:h-[1.35vw] lg:w-[1.35vw] ${isRTL ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
              strokeWidth={2.4}
            />
          </Link>
          <a
            href={catalogConfig.path}
            download={catalogConfig.filename}
            onClick={() => analytics.trackCatalogDownload(false)}
            className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full border border-[#D4AF37]/50 bg-white/90 px-4 py-3 text-[11px] font-bold leading-tight text-[#374151] shadow-[0_4px_14px_-8px_rgba(55,65,81,0.3)] transition-all duration-300 hover:border-[#D4AF37] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 min-[380px]:gap-2 min-[380px]:px-5 min-[380px]:text-[12px] sm:min-w-[186px] sm:flex-none sm:justify-between sm:gap-4 sm:px-6 sm:py-3 sm:text-sm
              lg:min-w-0 lg:flex-1 lg:justify-between lg:gap-[1.4vw] lg:whitespace-nowrap lg:px-[1.2vw] lg:py-[0.82vw] lg:text-[1.22vw] lg:leading-[1.2]"
            aria-label={`${catalogConfig.downloadText} - ${lang === "fa" ? "نسخه فارسی" : "English Version"}`}
          >
            <span className="truncate">{catalogConfig.downloadText}</span>
            <Download className="h-4 w-4 shrink-0 text-[#D4AF37] min-[380px]:h-4 min-[380px]:w-4 sm:h-4 sm:w-4 lg:h-[1.35vw] lg:w-[1.35vw]" strokeWidth={2} />
          </a>
        </motion.div>
        </div>

        {/* Four equal columns, hairline dividers between them. */}
        <motion.div
          {...enter(3)}
          className={`mt-4 grid w-full grid-cols-4 sm:mt-4 lg:max-w-full ${
            isRTL
              ? "lg:mt-[2.5vw] divide-x divide-x-reverse divide-[#374151]/14"
              : "lg:mt-[1.75vw] divide-x divide-[#374151]/14"
          }`}
        >
          {heroFeatures.slice(0, 4).map((feature, i) => {
            const Icon = FEATURE_ICONS[i] || ShieldCheck;
            return (
              <div key={i} className="flex flex-col items-center gap-1.5 px-1 text-center lg:gap-[0.88vw]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/35 bg-white/85 shadow-[0_3px_10px_-6px_rgba(212,175,55,0.6)] backdrop-blur-sm lg:h-[3.32vw] lg:w-[3.32vw] lg:rounded-[0.98vw]">
                  <Icon className="h-[17px] w-[17px] text-[#C9A227] lg:h-[1.62vw] lg:w-[1.62vw]" strokeWidth={1.6} />
                </span>
                <span className="text-[10px] font-bold leading-tight text-[#111827] lg:text-[1.03vw]">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* ----------------------------------------------------------- STATS BAR */}
      <motion.div
        {...enter(4)}
        className="absolute inset-x-4 bottom-6 z-30 overflow-hidden rounded-[28px] border border-white/25 shadow-[0_16px_40px_-16px_rgba(17,24,39,0.55)] sm:inset-x-6 sm:bottom-8
          lg:inset-x-[5%] lg:bottom-auto lg:top-[86%] lg:h-[12%] lg:rounded-[2.55vw]"
        role="region"
        aria-label="Key statistics"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="flex h-full items-center bg-[#26313A]/90 px-3 py-3 backdrop-blur-md sm:px-4 lg:px-[1.1vw] lg:py-0 supports-[backdrop-filter]:bg-[#26313A]/85">
          <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
            <div
              className={`grid flex-1 grid-cols-2 gap-x-3 gap-y-3 lg:grid-cols-4 lg:gap-0 ${
                isRTL
                  ? "lg:divide-x lg:divide-x-reverse lg:divide-white/12"
                  : "lg:divide-x lg:divide-white/12"
              }`}
            >
              {stats.slice(0, 4).map((item, i) => {
                const Icon = STAT_ICONS[i];
                const isCapacity = i === 1;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-2 sm:px-3 lg:gap-[0.78vw] lg:px-[1.05vw] ${isRTL ? "flex-row-reverse text-right" : "text-left"}`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/45 bg-[#D4AF37]/10 text-[#E3C359] lg:h-[2.93vw] lg:w-[2.93vw] lg:rounded-[0.78vw]">
                      {isCapacity ? (
                        <StatCoilIcon className="h-[17px] w-[17px] lg:h-[1.55vw] lg:w-[1.55vw]" />
                      ) : (
                        Icon && <Icon className="h-[17px] w-[17px] lg:h-[1.55vw] lg:w-[1.55vw]" strokeWidth={1.6} />
                      )}
                    </span>
                    <div className="min-w-0">
                      <p className="mb-0.5 text-[9px] font-semibold leading-tight text-[#E3C359] lg:mb-[0.2vw] lg:text-[0.88vw]">
                        {item.label}
                      </p>
                      <p className="whitespace-nowrap text-[12px] font-black leading-tight tabular-nums text-white lg:text-[1.27vw]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className={`flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 lg:shrink-0 lg:gap-[0.78vw] lg:rounded-[0.98vw] lg:px-[0.88vw] lg:py-[0.55vw] ${isRTL ? "flex-row-reverse text-right lg:mr-[0.9vw]" : "lg:ml-[0.9vw]"}`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 lg:h-[4.3vw] lg:w-[4.3vw] lg:rounded-[0.78vw]">
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
                <p className="text-[11px] font-bold leading-snug text-white lg:text-[1.07vw]">
                  {heroStatCard.title}
                </p>
                <p className="mt-0.5 text-[9px] leading-snug text-white/55 lg:mt-[0.15vw] lg:text-[0.83vw]">
                  {heroStatCard.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
