/**
 * Typography system — consistent scale, line-height, RTL/LTR rhythm
 */

import React from "react";

const headingSizes = {
  1: "text-[1.75rem] sm:text-4xl lg:text-[2.5rem]",
  2: "text-2xl sm:text-3xl lg:text-4xl",
  3: "text-xl sm:text-2xl",
  4: "text-lg sm:text-xl",
  5: "text-base sm:text-lg",
  6: "text-sm sm:text-base",
};

export const Heading = React.memo(function Heading({
  children,
  level = 2,
  className = "",
  ...props
}) {
  const Tag = `h${level}`;
  return (
    <Tag
      className={`font-black text-[#374151] tracking-tight text-balance ${headingSizes[level]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
});

export const Subheading = React.memo(function Subheading({
  children,
  className = "",
  ...props
}) {
  return (
    <h3
      className={`text-lg font-bold text-[#374151] leading-snug ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
});

const textSizes = {
  xs: "text-xs leading-relaxed",
  sm: "text-sm leading-relaxed",
  base: "text-[0.9375rem] sm:text-base leading-relaxed",
  lg: "text-lg leading-relaxed",
  xl: "text-xl leading-snug",
};

const textWeights = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  black: "font-black",
};

export const Text = React.memo(function Text({
  children,
  size = "base",
  weight = "normal",
  className = "",
  ...props
}) {
  return (
    <p
      className={`text-gray-500 ${textSizes[size]} ${textWeights[weight]} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
});

export const Label = React.memo(function Label({
  children,
  className = "",
  ...props
}) {
  return (
    <label
      className={`eyebrow-label !text-gray-400 !tracking-[0.18em] ${className}`}
      {...props}
    >
      {children}
    </label>
  );
});

export const Badge = React.memo(function Badge({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const variantClasses = {
    default: "bg-gray-100 text-gray-600",
    primary: "bg-[#D4AF37]/10 text-[#B8860B]",
    success: "bg-green-50 text-green-700",
    warning: "bg-amber-50 text-amber-800",
    error: "bg-red-50 text-red-700",
  };

  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-[10px] font-bold rounded-lg uppercase tracking-wide ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
});

export const SectionTitle = React.memo(function SectionTitle({
  title,
  subtitle,
  description,
  className = "",
  align = "center",
}) {
  const alignClass =
    align === "center"
      ? "text-center"
      : align === "left"
        ? "text-left"
        : "text-right";

  return (
    <div className={`flex flex-col ${alignClass} mb-10 sm:mb-12 ${className}`}>
      {subtitle && (
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="h-px w-5 bg-[#D4AF37]/50" aria-hidden />
          <span className="eyebrow-label">{subtitle}</span>
          <span className="h-px w-5 bg-[#D4AF37]/50" aria-hidden />
        </div>
      )}
      {title && (
        <Heading level={2} className="mb-3">
          {title}
        </Heading>
      )}
      {description && (
        <Text size="sm" className="max-w-2xl mx-auto text-balance">
          {description}
        </Text>
      )}
    </div>
  );
});

export const ArticleContent = React.memo(function ArticleContent({
  children,
  className = "",
  ...props
}) {
  return (
    <div
      className={`prose prose-lg max-w-none prose-headings:font-black prose-headings:text-[#374151] prose-headings:tracking-tight prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#B8860B] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#374151] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

export const TechnicalTerm = React.memo(function TechnicalTerm({
  term,
  definition,
  className = "",
  ...props
}) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <span
      className={`relative inline-block border-b border-dashed border-[#D4AF37]/60 cursor-help text-[#374151] font-medium ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      {...props}
    >
      {term}
      {showTooltip && definition && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#374151] text-white text-xs rounded-lg shadow-md whitespace-nowrap z-10 max-w-xs">
          {definition}
        </span>
      )}
    </span>
  );
});

export const CalloutBox = React.memo(function CalloutBox({
  type = "info",
  title,
  children,
  className = "",
  ...props
}) {
  const typeStyles = {
    info: { bg: "bg-blue-50", border: "border-blue-100", titleColor: "text-blue-900" },
    warning: { bg: "bg-amber-50", border: "border-amber-100", titleColor: "text-amber-900" },
    tip: { bg: "bg-green-50", border: "border-green-100", titleColor: "text-green-900" },
    important: { bg: "bg-[#D4AF37]/5", border: "border-[#D4AF37]/30", titleColor: "text-[#374151]" },
  };

  const style = typeStyles[type] || typeStyles.info;

  return (
    <div className={`my-6 p-4 rounded-2xl border ${style.bg} ${style.border} ${className}`} {...props}>
      {title && <h4 className={`font-bold text-sm mb-2 ${style.titleColor}`}>{title}</h4>}
      <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
});

export const CodeBlock = React.memo(function CodeBlock({ code, language = "text", className = "", ...props }) {
  return (
    <pre className={`my-6 p-4 bg-[#374151] text-gray-100 rounded-2xl overflow-x-auto text-sm ${className}`} {...props}>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
});

export const InlineCode = React.memo(function InlineCode({ children, className = "", ...props }) {
  return (
    <code className={`px-1.5 py-0.5 bg-gray-100 text-[#B8860B] rounded text-sm font-mono ${className}`} {...props}>
      {children}
    </code>
  );
});

export const ReferenceLink = React.memo(function ReferenceLink({ to, children, className = "", ...props }) {
  return (
    <a href={to} className={`text-[#B8860B] font-medium hover:underline ${className}`} {...props}>
      {children}
    </a>
  );
});

export const Footnote = React.memo(function Footnote({ id, children, className = "", ...props }) {
  return (
    <sup id={`footnote-${id}`} className={`text-[#D4AF37] font-bold ${className}`} {...props}>
      {children}
    </sup>
  );
});

export const FootnoteRef = React.memo(function FootnoteRef({ id, children, className = "", ...props }) {
  return (
    <div id={`ref-${id}`} className={`text-sm text-gray-500 mt-6 pt-4 border-t border-gray-100 leading-relaxed ${className}`} {...props}>
      <span className="text-[#D4AF37] font-bold me-2">[{id}]</span>
      {children}
    </div>
  );
});

export default Heading;
