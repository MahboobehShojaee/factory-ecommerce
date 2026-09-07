/** Minimal section separator */
export default function SectionDivider({ className = "" }) {
  return (
    <div
      className={`section-divider my-5 sm:my-10 md:my-14 ${className}`}
      aria-hidden
    />
  );
}
