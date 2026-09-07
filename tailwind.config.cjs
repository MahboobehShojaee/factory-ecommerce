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
        luxury: {
          50: "#FFFBF0",
          100: "#FFF2CC",
          500: "#D4AF37",
          700: "#B8941F",
          900: "#2B2B2B",
        },
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
        en: ["Inter", "system-ui", "ui-sans-serif", "sans-serif"],
        fa: ["Vazirmatn", "system-ui", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        "copper-glow": "0 0 40px rgba(184, 115, 51, 0.45)",
        "luxury-soft": "0 12px 40px rgba(18, 18, 18, 0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

