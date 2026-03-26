/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        copper: "#F29A2E",
        brandGold: "#F5C23B",
        brandDark: "#3F3F3F",
        brandLight: "#E5E5E5",
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
        en: ["Inter", "system-ui", "ui-sans-serif", "sans-serif"],
        fa: ["Vazirmatn", "system-ui", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        "copper-glow": "0 0 40px rgba(184, 115, 51, 0.45)",
      },
    },
  },
  plugins: [],
};

