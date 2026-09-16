import { motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useRTL } from "../../hooks/useRTL.js";
import { MOTION } from "../../animations/cinematicMotion.js";
import CartDrawer from "../../features/cart/components/CartDrawer.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  const { lang } = useLanguage();
  const { isRTL } = useRTL();
  const reduceMotion = useReducedMotion();
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/fa" || location.pathname === "/fa/";

  return (
    <div
      className={`min-h-screen bg-[#F8F9FA] text-[#374151] ${isRTL ? "rtl font-fa" : "ltr font-en"}`}
      dir={isRTL ? "rtl" : "ltr"}
      >
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[1000] -translate-y-24 rounded-lg bg-[#374151] px-4 py-3 font-bold text-white shadow-lg transition-transform focus:translate-y-0"
      >
        {isRTL ? "پرش به محتوای اصلی" : "Skip to main content"}
      </a>
      <Header />
      {!isHome && <div className="h-[5.25rem] sm:h-[5.5rem]" aria-hidden />}

      <main
        id="main-content"
        tabIndex={-1}
        className={`${isHome ? "w-full max-w-none px-0" : "page-container 2xl:max-w-[90rem]"} pb-24 md:pb-8`}
        role="main"
      >
        <motion.div
          key={lang}
          initial={reduceMotion ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION.duration.base, ease: MOTION.ease.out }}
        >
          {children}
        </motion.div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
