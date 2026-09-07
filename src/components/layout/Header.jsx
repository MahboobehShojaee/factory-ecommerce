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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-[100] w-[94%] max-w-7xl transition-all duration-500 ${
        scrolled ? "header-scrolled top-3 sm:top-4" : "top-5 sm:top-6"
      }`}
      role="banner"
    >
      <nav
        className={`flex items-center justify-between px-4 sm:px-5 py-3 rounded-2xl lg:rounded-3xl border border-gray-100/80 transition-all duration-300 backdrop-blur-xl backdrop-saturate-150 ${
          scrolled ? "bg-white/65" : "bg-white/50"
        }`}
        style={{ boxShadow: scrolled ? "var(--ds-shadow-hover)" : "var(--ds-shadow)" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          to={lang === LANGS.FA ? "/fa" : "/"}
          className="flex items-center gap-2.5 sm:gap-3 group relative z-[110] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-xl min-w-0"
          aria-label="Setareh Kerman Home"
        >
          <div className="h-11 w-11 flex shrink-0 items-center justify-center rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-md transition-all group-hover:rotate-[15deg] group-hover:scale-105">
            <img
              src={images.logo.nav}
              alt="Setareh Kerman Logo"
              className="h-full w-full object-contain p-1"
              width={44}
              height={44}
              fetchpriority="high"
            />
          </div>
          <div
            className={`hidden sm:block leading-tight min-w-0 ${isRTL ? "text-right" : "text-left"}`}
          >
            <Text
              size="xs"
              weight="black"
              className="text-[#374151] uppercase tracking-tighter truncate"
            >
              {layout.brandLine1}
            </Text>
          </div>
        </Link>

        <div
          className="hidden lg:flex items-center bg-gray-50/60 p-1 rounded-[20px] border border-gray-100"
          role="menubar"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/" || item.to === "/fa" || item.to === "/fa/"}
              className={({ isActive }) =>
                `px-4 xl:px-6 py-2 rounded-[16px] text-[10px] font-black uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37] ${
                  isActive
                    ? "bg-[#374151] text-white shadow-lg"
                    : "text-gray-400 hover:text-[#374151]"
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
              setLang(newLang);
              const path = location.pathname.replace(/^\/fa(\/|$)/, "/$1");
              const newPath =
                newLang === LANGS.FA
                  ? `/fa${path === "/" ? "" : path}`
                  : path || "/";
              navigate(newPath);
            }}
            className="h-10 sm:h-11 px-4 sm:px-5 rounded-2xl bg-gray-50 border border-gray-100 text-[#374151] text-[10px] font-black hover:bg-gradient-to-r hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#B8860B] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
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
      </nav>

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
