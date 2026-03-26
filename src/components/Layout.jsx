import React, { useEffect, useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLanguage, LANGS } from "../context/LanguageContext.jsx";
import {
  motion,
  useMotionValue,
  useSpring,
  useInView,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";
import logoFull from "../../public/logo-wb-wt.png";

// --- کامپوننت عدد شمار با staggered delay ---
function Counter({ value, delay = 0 }) {
  const target = parseInt(value.replace(/\D/g, ""));
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 40, damping: 20 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => count.set(target), delay);
      return () => clearTimeout(timeout);
    }
  }, [isInView, target, count, delay]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplay(Math.floor(latest)));
  }, [rounded]);

  return (
    <span ref={ref}>
      {display}
      {value.includes("+") ? "+" : ""}
      {value.includes("k") && "k"}
    </span>
  );
}

// --- کارت آمار با glass + hover glow + radial gradient ---
function StatCard({ stat, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col items-center justify-center p-10 rounded-[40px] bg-[#374151]/90 border border-white/5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/40 hover:scale-105"
    >
      {/* hover radial gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[40px] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <h3 className="relative z-10 text-5xl font-black text-white group-hover:text-[#D4AF37] transition-colors duration-500 tracking-tighter">
        <Counter value={stat.value} delay={index * 300} />
      </h3>
      <p className="relative z-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mt-4 group-hover:text-white transition-colors text-center">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function Layout({ children }) {
  const { lang, setLang, isRTL, dict } = useLanguage();
  const layout = dict.layout;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: layout.navHome, to: "/" },
    { label: layout.navProducts, to: "/products" },
    { label: layout.navAbout, to: "/about" },
    { label: layout.navContact, to: "/contact" },
  ];

  const statsData = [
    { value: "40+", label: isRTL ? "سال تجربه تخصصی" : "Years of Expertise" },
    { value: "500+", label: isRTL ? "پروژه صنعتی" : "Industrial Projects" },
    {
      value: "3",
      label: isRTL ? "گواهینامه بین‌المللی" : "International Certs",
    },
    { value: "10k+", label: isRTL ? "تجهیزات نصب شده" : "Installed Equip" },
  ];

  return (
    <div
      className={`min-h-screen bg-[#F8F9FA] text-[#374151] ${isRTL ? "rtl font-fa" : "ltr font-en"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* هدر هوشمند */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[94%] max-w-7xl">
        <nav className="flex items-center justify-between px-5 py-3 bg-white/80 backdrop-blur-2xl rounded-[32px] border border-gray-100 shadow-2xl shadow-gray-200/50">
          {/* لوگو */}
          <Link
            to="/"
            className="flex items-center gap-3 group relative z-[110]"
          >
            <div className="h-11 w-11 flex items-center justify-center rounded-2xl bg-white border border-gray-100 transition-all group-hover:rotate-[15deg] group-hover:scale-105 shadow-md overflow-hidden">
              <img
                src={logoFull}
                alt="Logo"
                className="h-full w-full object-contain p-1"
                loading="lazy"
              />
            </div>

            <div
              className={`hidden sm:block leading-tight ${isRTL ? "text-right" : "text-left"}`}
            >
              <p className="text-[10px] font-black tracking-widest text-[#D4AF37] uppercase">
                {layout.brandLine1}
              </p>
              <p className="text-[12px] font-black text-[#374151] uppercase tracking-tighter">
                {layout.brandLine2}
              </p>
            </div>
          </Link>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex items-center bg-gray-50/50 p-1.5 rounded-[22px] border border-gray-100">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-6 py-2.5 rounded-[18px] text-[10px] font-black uppercase tracking-widest transition-all ${
                    isActive
                      ? "bg-[#374151] text-white shadow-lg"
                      : "text-gray-400 hover:text-[#374151]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* دکمه زبان و همبرگری */}
          <div className="flex items-center gap-3 relative z-[110]">
            <button
              onClick={() => setLang(lang === LANGS.EN ? LANGS.FA : LANGS.EN)}
              className="h-11 px-5 rounded-2xl bg-gray-50 border border-gray-100 text-[#374151] text-[10px] font-black hover:bg-gradient-to-r hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#B8860B] hover:text-white transition-all"
            >
              {lang === LANGS.EN ? "FA" : "EN"}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden h-11 w-11 flex flex-col items-center justify-center gap-1.5 bg-[#374151] rounded-2xl"
            >
              <motion.span
                animate={
                  isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
                }
                className="w-5 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-3 h-0.5 bg-[#D4AF37] rounded-full"
              />
              <motion.span
                animate={
                  isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                }
                className="w-5 h-0.5 bg-white rounded-full"
              />
            </button>
          </div>
        </nav>

        {/* منوی موبایل */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-20 left-0 w-full bg-[#374151] rounded-[35px] p-8 shadow-3xl md:hidden border border-white/10"
            >
              <div className="flex flex-col gap-6 text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-black text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="h-32" />

      <main className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </main>

      {/* بخش آمار */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} />
          ))}
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div
          className={`mx-auto max-w-7xl px-8 flex flex-col md:flex-row justify-between items-center gap-10 ${isRTL ? "md:flex-row-reverse" : ""}`}
        >
          <div className={isRTL ? "text-right" : "text-left"}>
            <p className="text-[11px] font-black text-[#374151] uppercase tracking-[0.4em]">
              {isRTL ? "کارخانه ستاره کرمان" : "Setareh Kerman Factory"}
            </p>
            <p className="text-[10px] text-gray-400 mt-2 uppercase">
              © {new Date().getFullYear()}{" "}
              {isRTL ? "دقت در هر متر" : "Precision in every meter"}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {["ISO 9001", "TUV AUSTRIA", "CE Standard"].map((std) => (
              <span
                key={std}
                className="text-[10px] font-black text-gray-400 hover:text-[#D4AF37] transition-colors tracking-[0.2em]"
              >
                {std}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
