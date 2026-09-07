import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useRTL } from "../hooks/useRTL.js";
import { getLocalizedNavPath } from "../content/navigation/data.js";
import { projects } from "../data/projects.js";
import { FadeInUp } from "../animations/motionPresets.jsx";
import { SectionHeader } from "../components/layout/SectionWrapper.jsx";

const AUTO_INTERVAL = 4500;
const RESUME_DELAY = 3000;

function ChevronLeft({ className }) {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className={className}>
      <path d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight({ className }) {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className={className}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const { isRTL, dirClass, flexDir } = useRTL();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const autoTimerRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const pausedRef = useRef(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (isRTL) {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setCanScrollLeft(el.scrollLeft < -1);
      setCanScrollRight(el.scrollLeft > -(maxScroll - 1));
    } else {
      setCanScrollLeft(el.scrollLeft > 1);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    }
  }, [isRTL]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scrollToIndex = useCallback((index, smooth) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index];
    if (!card) return;
    const offset = isRTL ? -card.offsetLeft : card.offsetLeft;
    el.scrollTo({ left: offset, behavior: smooth ? "smooth" : "instant" });
  }, [isRTL]);

  const getCurrentIndex = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 0;
    const pos = isRTL ? -el.scrollLeft : el.scrollLeft;
    const firstCard = el.children[0];
    if (!firstCard) return 0;
    const cardWidth = firstCard.offsetWidth;
    const gap = 24;
    return Math.round(pos / (cardWidth + gap));
  }, [isRTL]);

  const advance = useCallback(() => {
    if (pausedRef.current) return;
    const total = projects.length;
    if (total === 0) return;
    const current = getCurrentIndex();
    const next = (current + 1) % total;
    if (next === 0) {
      scrollToIndex(0, false);
    } else {
      scrollToIndex(next, true);
    }
  }, [getCurrentIndex, scrollToIndex]);

  const startAutoScroll = useCallback(() => {
    if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    autoTimerRef.current = setInterval(advance, AUTO_INTERVAL);
  }, [advance]);

  const stopAutoScroll = useCallback(() => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, [startAutoScroll, stopAutoScroll]);

  const handleMouseEnter = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleMouseLeave = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY);
  };

  const handleTouchStart = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleTouchEnd = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY);
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(":scope > *")?.offsetWidth || 0;
    const gap = 24;
    const amount = cardWidth + gap;
    if (direction === "next") {
      el.scrollBy({ left: isRTL ? -amount : amount, behavior: "smooth" });
    } else {
      el.scrollBy({ left: isRTL ? amount : -amount, behavior: "smooth" });
    }
    stopAutoScroll();
    startAutoScroll();
  };

  const prevArrow = isRTL ? <ChevronRight /> : <ChevronLeft />;
  const nextArrow = isRTL ? <ChevronLeft /> : <ChevronRight />;

  return (
    <section className="section-spacing-sm bg-[#F8F9FA]" id="projects">
      <div className="page-container">
        {/* Section Header */}
        <SectionHeader
          subtitle={isRTL ? "اعتماد و تخصص" : "Proven Reliability"}
          title={isRTL ? "پروژه‌های شاخص" : "Featured Projects"}
          description={isRTL
            ? "کابل‌های ستاره کرمان، رگ‌های حیاتی بزرگترین پروژه‌های صنعتی و ساختمانی کشور."
            : "Setareh Kerman cables, vital veins of country's largest industrial and construction projects."}
        />

        {/* Carousel */}
        <FadeInUp>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Navigation Arrows */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("prev")}
                className={`absolute -top-14 ${isRTL ? "right-0" : "left-0"} z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[#374151] shadow-md transition-all hover:border-[#D4AF37] hover:text-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 sm:-top-16 sm:h-12 sm:w-12`}
                aria-label={isRTL ? "پروژه قبلی" : "Previous projects"}
              >
                {prevArrow}
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={() => scroll("next")}
                className={`absolute -top-14 ${isRTL ? "left-0" : "right-0"} z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[#374151] shadow-md transition-all hover:border-[#D4AF37] hover:text-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 sm:-top-16 sm:h-12 sm:w-12`}
                aria-label={isRTL ? "پروژه بعدی" : "Next projects"}
              >
                {nextArrow}
              </button>
            )}

            {/* Scrollable Track */}
            <div
              ref={scrollRef}
              dir={isRTL ? "rtl" : "ltr"}
              className="carousel-scroll flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:gap-8"
            >
              {projects.map((project) => {
                const title = project.title[isRTL ? "fa" : "en"];
                const shortDescription = project.shortDescription[isRTL ? "fa" : "en"];
                const altText = project.alt[isRTL ? "fa" : "en"];
                const category = isRTL ? project.categoryFa : project.category;

                return (
                  <Link
                    key={project.id}
                    to={getLocalizedNavPath(`/projects/${project.slug}`, lang)}
                    className="group relative h-[360px] w-[85vw] max-w-[320px] min-w-[260px] snap-start flex-shrink-0 overflow-hidden rounded-3xl bg-[#1F2937] shadow-md transition-transform duration-300 hover:-translate-y-1 sm:h-[440px] sm:w-auto sm:min-w-[320px]"
                  >
                    {/* Logo: centered on dark background */}
                    <div className="absolute inset-0 flex items-center justify-center pb-32">
                      <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10 sm:h-36 sm:w-36">
                        <span className="text-4xl font-black text-[#D4AF37] sm:text-5xl">
                          {project.logoInitial}
                        </span>
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/20 to-transparent opacity-90" />

                    {/* Content */}
                    <div className={`absolute inset-0 p-6 sm:p-10 flex flex-col justify-end ${dirClass}`}>
                      <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest mb-2 block">
                        {category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4 leading-tight">
                        {title}
                      </h3>

                      <p className="text-gray-300 text-xs font-medium leading-relaxed line-clamp-2 sm:line-clamp-none sm:h-0 sm:overflow-hidden sm:group-hover:h-12 sm:transition-all sm:duration-500 sm:ease-in-out">
                        {shortDescription}
                      </p>

                      <div className={`mt-6 flex items-center justify-between ${flexDir}`}>
                        <div className="h-[1px] flex-grow bg-white/20" />
                        <span
                          className={`h-12 w-12 min-w-[48px] rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500 ${isRTL ? "mr-4" : "ml-4"}`}
                        >
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                            className={isRTL ? "rotate-180" : ""}
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
