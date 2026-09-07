export const navigationConfig = {
  routes: [
    { key: "home", path: "/" },
    { key: "products", path: "/products" },
    { key: "blog", path: "/blog" },
    { key: "about", path: "/about" },
    { key: "contact", path: "/contact" },
  ],
};

export function getNavigationConfig() {
  return navigationConfig;
}

export function getLocalizedNavPath(basePath, lang) {
  if (basePath === "/") {
    return lang === "fa" ? "/fa" : "/";
  }
  if (lang === "fa") {
    return `/fa${basePath}`;
  }
  return basePath;
}
