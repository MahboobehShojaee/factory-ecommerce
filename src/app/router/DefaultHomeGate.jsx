import { Navigate } from "react-router-dom";
import { LANGS } from "../../context/LanguageContext.jsx";
import { lazyPages } from "../../routes/routeConfig.jsx";

const HomePage = lazyPages.Home;

/**
 * First-time visitors and Persian-preference users land on /fa.
 * English home at / is shown only when the user has explicitly chosen EN before.
 */
export default function DefaultHomeGate() {
  const savedLang =
    typeof window !== "undefined" ? localStorage.getItem("app_lang") : null;

  if (savedLang !== LANGS.EN) {
    return <Navigate to="/fa" replace />;
  }

  return <HomePage />;
}
