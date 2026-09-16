export const DEFAULT_SITE_URL = "https://setarehkerman.com";
export const DEFAULT_API_BASE_URL = "http://localhost:5000";

function stripTrailingSlash(value) {
  return String(value || "").trim().replace(/\/$/, "");
}

export const siteUrl = stripTrailingSlash(
  import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL,
);

export const siteHost = (() => {
  try {
    return new URL(siteUrl).host;
  } catch {
    return "setarehkerman.com";
  }
})();

export const siteName =
  import.meta.env.VITE_SITE_NAME || "Setareh Kerman Wire & Cable";

export const apiBaseUrl = stripTrailingSlash(
  import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL,
);

export const defaultOgImage = `${siteUrl}/og-image.jpg`;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

export function localizedAbsoluteUrl(path = "/", lang = "en") {
  const sourcePath = path?.startsWith("http")
    ? new URL(path).pathname
    : path || "/";
  const normalized = sourcePath.startsWith("/") ? sourcePath : `/${sourcePath}`;

  if (lang === "fa") {
    if (normalized === "/") return absoluteUrl("/fa");
    if (normalized === "/fa" || normalized.startsWith("/fa/")) {
      return absoluteUrl(normalized);
    }
    return absoluteUrl(`/fa${normalized}`);
  }

  if (normalized.startsWith("/fa/")) {
    return absoluteUrl(normalized.slice(3) || "/");
  }
  if (normalized === "/fa") return absoluteUrl("/");
  return absoluteUrl(normalized);
}

export function localizedBlogUrl(slug, lang = "en") {
  return localizedAbsoluteUrl(`/blog/${slug}`, lang);
}
