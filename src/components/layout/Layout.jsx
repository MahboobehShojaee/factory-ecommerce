import { motion, useReducedMotion } from "framer-motion";
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

  return (
    <div
      className={`min-h-screen bg-[#F8F9FA] text-[#374151] ${isRTL ? "rtl font-fa" : "ltr font-en"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header />
      <div className="h-[5.25rem] sm:h-[5.5rem]" aria-hidden />

      <main className="page-container 2xl:max-w-[90rem] pb-24 md:pb-8" role="main">
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
