import { useMemo } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";
import {
  getNavigationConfig,
  getLocalizedNavPath,
} from "../../content/navigation/data.js";

export function useNavLinks(layout) {
  const { lang } = useLanguage();

  return useMemo(() => {
    const navigationConfig = getNavigationConfig();
    return navigationConfig.routes.map((route) => ({
      label:
        layout[`nav${route.key.charAt(0).toUpperCase() + route.key.slice(1)}`],
      to: getLocalizedNavPath(route.path, lang),
    }));
  }, [layout, lang]);
}
