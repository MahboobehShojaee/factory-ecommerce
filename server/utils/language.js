export function detectLang(text) {
  if (!text || typeof text !== "string") return "fa";
  return /[\u0600-\u06FF]/.test(text) ? "fa" : "en";
}
