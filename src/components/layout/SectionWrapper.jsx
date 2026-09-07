/**
 * Section layout — consistent spacing & calm headers
 */

import { motion } from "framer-motion";
import { useRTL } from "../../hooks/useRTL.js";
import { MOTION } from "../../animations/cinematicMotion.js";
import ScrollReveal from "../common/ScrollReveal.jsx";

export function SectionHeader({
  title,
  subtitle,
  description,
  className = "",
  align = "center",
}) {
  const { isRTL } = useRTL();

  const alignClass =
    align === "center"
      ? "text-center"
      : align === "left"
        ? "text-left"
        : "text-right";

  const flexAlign =
    align === "center"
      ? "justify-center"
      : align === "left"
        ? "justify-start"
        : "justify-end";

  return (
    <div className={`flex flex-col ${alignClass} mb-8 sm:mb-10 ${className}`}>
      {subtitle && (
        <div
          className={`flex items-center gap-2 mb-3 ${flexAlign} ${isRTL ? "flex-row-reverse" : ""}`}
        >
          <span className="h-px w-5 bg-[#D4AF37]/50" aria-hidden />
          <span className="eyebrow-label">{subtitle}</span>
          <span className="h-px w-5 bg-[#D4AF37]/50" aria-hidden />
        </div>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl font-black text-[#374151] leading-tight tracking-tight text-balance">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-3 prose-calm max-w-2xl mx-auto text-balance">
          {description}
        </p>
      )}
    </div>
  );
}

export function SectionWrapper({
  children,
  className = "",
  id,
  bgColor = "",
  padding = "section-spacing-sm",
  animate = true,
}) {
  return (
    <section id={id} className={`${bgColor} ${padding} ${className}`}>
      <div className="page-container">
        {animate ? <ScrollReveal y={MOTION.distance.md}>{children}</ScrollReveal> : children}
      </div>
    </section>
  );
}

export function Section({
  title,
  subtitle,
  description,
  children,
  className = "",
  id,
  bgColor = "",
  padding = "section-spacing-sm",
  headerAlign = "center",
  animate = true,
}) {
  return (
    <SectionWrapper id={id} bgColor={bgColor} padding={padding} className={className} animate={false}>
      {(title || subtitle || description) && (
        <SectionHeader
          title={title}
          subtitle={subtitle}
          description={description}
          align={headerAlign}
        />
      )}
      {animate ? (
        <ScrollReveal y={MOTION.distance.md} delay={0.05}>
          {children}
        </ScrollReveal>
      ) : (
        children
      )}
    </SectionWrapper>
  );
}

export default SectionWrapper;
