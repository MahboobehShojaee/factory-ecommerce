import React from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

import HeaderSection from "../components/contact/HeaderSection.jsx";
import ContactForm from "../components/contact/ContactForm.jsx";
import SidebarInfo from "../components/contact/SidebarInfo.jsx";

export default function Contact() {
  const { dict, isRTL } = useLanguage();
  const t = dict?.contact || {};
  const projectOptions = t.projectOptions || [];
  const cableOptions = t.cableOptions || [];

  return (
    <main
      className={`space-y-10 pb-16 relative ${isRTL ? "text-right" : "text-left"}`}
    >
      <Toaster position="top-right" reverseOrder={false} />

      {/* Hero Header */}
      <section aria-label="Contact page introduction">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeaderSection t={t} isRTL={isRTL} />
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <section className="container mx-auto px-6" aria-label="Contact form and information">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-[1.5fr_1fr]"
        >
          <ContactForm
            t={t}
            projectOptions={projectOptions}
            cableOptions={cableOptions}
            isRTL={isRTL}
          />
          <SidebarInfo t={t} isRTL={isRTL} />
        </motion.div>
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
