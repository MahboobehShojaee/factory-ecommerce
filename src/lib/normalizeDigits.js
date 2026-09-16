const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

/** Normalize Persian/Arabic numerals to ASCII digits for validation and API payloads. */
export function normalizeDigits(value) {
  return String(value ?? "").replace(/[۰-۹٠-٩]/g, (char) => {
    const persianIndex = PERSIAN_DIGITS.indexOf(char);
    if (persianIndex >= 0) return String(persianIndex);
    const arabicIndex = ARABIC_DIGITS.indexOf(char);
    return arabicIndex >= 0 ? String(arabicIndex) : char;
  });
}
