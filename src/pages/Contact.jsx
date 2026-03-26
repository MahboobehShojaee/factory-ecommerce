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
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`space-y-10 pb-16 relative ${isRTL ? "text-right" : "text-left"}`}
    >
      <Toaster position="top-right" reverseOrder={false} />

      <HeaderSection t={t} isRTL={isRTL} />

      <section className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <ContactForm
          t={t}
          projectOptions={projectOptions}
          cableOptions={cableOptions}
          isRTL={isRTL}
        />
        <SidebarInfo t={t} isRTL={isRTL} />
      </section>
    </motion.div>
  );
}
