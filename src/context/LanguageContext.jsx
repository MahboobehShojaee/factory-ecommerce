import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";
import { translations } from "../content/translations/index.js";

const LanguageContext = createContext(null);

export const LANGS = {
  EN: "en",
  FA: "fa",
};

function detectLangFromPath(pathname) {
  if (pathname.startsWith("/fa") || pathname.startsWith("/fa/")) {
    return LANGS.FA;
  }
  return LANGS.EN;
}

export function LanguageProvider({ children }) {
  const { pathname } = useLocation();

  const [lang, setLang] = useState(() =>
    detectLangFromPath(window.location.pathname),
  );

  useEffect(() => {
    const pathLang = detectLangFromPath(pathname);
    setLang(pathLang);
    localStorage.setItem("app_lang", pathLang);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === LANGS.FA ? "rtl" : "ltr";
  }, [lang]);

  const value = useMemo(() => {
    const isRTL = lang === LANGS.FA;
    const dict = translations[lang] || translations.fa;
    return { lang, setLang, isRTL, dict };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
