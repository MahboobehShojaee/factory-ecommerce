import React from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useRTL } from "../../hooks/useRTL.js";
import JSONProductGrid from "./JSONProductGrid.jsx";
import { SectionHeader } from "../../components/layout/SectionWrapper.jsx";

export default function ProductListFromJSON() {
  const { lang } = useLanguage();
  const { isRTL } = useRTL();

  return (
    <section className="container mx-auto px-6 py-12" aria-label="Complete product catalog">
      {/* Section Header */}
      <SectionHeader
        subtitle={lang === "fa" ? "کاتالوگ محصولات" : "Product Catalog"}
        title={lang === "fa" ? "محصولات پرتقاضا" : "Most Demanded Products"}
        align="center"
      />

      {/* Product Grid */}
      <JSONProductGrid />
    </section>
  );
}
