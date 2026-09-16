import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLanguage, LANGS } from "../../context/LanguageContext.jsx";
import { useRTL } from "../../hooks/useRTL.js";
import { images } from "../../assets/images/registry.js";
import CartIcon from "../../features/cart/components/CartIcon.jsx";
import { Text } from "../ui/Typography.jsx";
import { useNavLinks } from "./useNavLinks.js";

export default function Header() {
  const { lang, setLang, dict } = useLanguage();
  const { isRTL } = useRTL();
  const navigate = useNavigate();
  const location = useLocation();
  const layout = dict.layout;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = useNavLinks(layout);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-[100] w-[94%] max-w-7xl transition-all duration-500 ${
        scrolled ? "top-3" : "top-6"
      }`}
      role="banner"
    >
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-3.5 rounded-full border border-white/60 transition-all duration-300 backdrop-blur-[20px] ${
          scrolled ? "bg-white/92 shadow-lg" : "bg-white/88 shadow-md"
        }`}
        style={{ boxShadow: scrolled ? "0 8px 32px -12px rgba(31,41,55,0.25)" : "0 4px 24px -8px rgba(31,41,55,0.15)" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          to={lang === LANGS.FA ? "/fa" : "/"}
          className="flex items-center gap-2.5 sm:gap-3 group relative z-[110] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-xl min-w-0"
          aria-label="Setareh Kerman Home"
        >
          <div className="h-10 w-10 lg:h-[2.35rem] lg:w-[2.35rem] flex shrink-0 items-center justify-center rounded-full bg-white border border-gray-100 overflow-hidden shadow-[0_2px_8px_-3px rgba(31,41,55,0.25)] transition-all group-hover:rotate-[15deg] group-hover:scale-105">
            <img
              src={images.logo.nav}
              alt="Setareh Kerman Logo"
              className="h-full w-full object-contain p-1"
              width={56}
              height={56}
              fetchPriority="high"
            />
          </div>
          <div
            className={`hidden sm:block leading-tight min-w-0 ${isRTL ? "text-right" : "text-left"}`}
          >
            <Text
              size="xs"
              weight="black"
              className="text-[#2F3742] text-[12px] tracking-tight truncate"
            >
              {layout.brandLine1}
            </Text>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1" role="menubar">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/" || item.to === "/fa" || item.to === "/fa/"}
              className={({ isActive }) =>
                `px-4 xl:px-5 py-2 rounded-full text-[12px] font-bold tracking-normal transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37] ${
                  isActive
                    ? "bg-[#374151] text-white shadow-[0_4px_12px_-6px_rgba(31,41,55,0.6)]"
                    : "text-[#1F2937] hover:text-[#111827]"
                }`
              }
              role="menuitem"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 relative z-[110]">
          <CartIcon />

          <button
            type="button"
            onClick={() => {
              const newLang = lang === LANGS.EN ? LANGS.FA : LANGS.EN;
              localStorage.setItem("app_lang", newLang);
              setLang(newLang);
              const path = location.pathname.replace(/^\/fa(\/|$)/, "/$1");
              const newPath =
                newLang === LANGS.FA
                  ? `/fa${path === "/" ? "" : path}`
                  : path || "/";
              navigate(newPath);
            }}
            className={`h-9 lg:h-[2.15rem] px-4 rounded-full text-[11px] font-black transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37] ${
              lang === LANGS.FA
                ? "bg-[#D4AF37] text-[#26313A] shadow-[0_2px_8px_-4px_rgba(212,175,55,0.4)]"
                : "bg-[#F0F0F2] border border-gray-200/70 text-[#3B424B] hover:bg-[#D4AF37] hover:text-[#26313A] hover:border-[#D4AF37]"
            }`}
            aria-label={`Switch language to ${lang === LANGS.EN ? "Persian" : "English"}`}
          >
            {lang === LANGS.EN ? "FA" : "EN"}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden h-10 w-10 sm:h-11 sm:w-11 flex flex-col items-center justify-center gap-1.5 bg-[#374151] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            <motion.span
              animate={
                isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
              }
              transition={reduceMotion ? { duration: 0 } : undefined}
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
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[90] lg:hidden"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              id="mobile-navigation-menu"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="absolute top-[calc(100%+10px)] left-0 w-full bg-[#374151] rounded-2xl p-5 sm:p-6 lg:hidden border border-white/10 z-[95] max-h-[70vh] overflow-y-auto"
              style={{ boxShadow: "var(--ds-shadow-hover)" }}
              role="menu"
            >
              <div className="flex flex-col gap-4 text-center">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={reduceMotion ? false : { opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-xl font-black text-white hover:text-[#D4AF37] transition-colors py-2 rounded-xl"
                      role="menuitem"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
