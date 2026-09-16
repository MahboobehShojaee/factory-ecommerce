import PropTypes from "prop-types";
import { useEffect } from "react";
import { defaultOgImage, siteHost, siteName, siteUrl } from "../../config/site.js";

function localizedPath(canonical, lang) {
  const sourcePath = canonical?.startsWith("http")
    ? new URL(canonical).pathname
    : canonical || "/";
  const path = sourcePath.startsWith("/") ? sourcePath : `/${sourcePath}`;

  if (lang === "fa") {
    return path === "/" ? "/fa" : path.startsWith("/fa/") || path === "/fa" ? path : `/fa${path}`;
  }

  return path.startsWith("/fa/") ? path.slice(3) : path === "/fa" ? "/" : path;
}

function normalizeCanonical(canonical, lang) {
  if (canonical?.startsWith("http")) return canonical;
  return `${siteUrl}${localizedPath(canonical, lang)}`;
}

function getAlternatePath(canonical, lang) {
  return localizedPath(canonical, lang);
}

function setMeta(attribute, name, content) {
  const selector = `meta[${attribute}="${name}"]`;
  const existing = document.head.querySelector(selector);

  if (!content) {
    existing?.remove();
    return;
  }

  const element = existing || document.createElement("meta");
  element.setAttribute(attribute, name);
  element.setAttribute("content", content);
  if (!existing) document.head.appendChild(element);
}

function setLink(rel, href, hreflang) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  const existing = document.head.querySelector(selector);

  if (!href) {
    existing?.remove();
    return;
  }

  const element = existing || document.createElement("link");
  element.setAttribute("rel", rel);
  element.setAttribute("href", href);
  if (hreflang) element.setAttribute("hreflang", hreflang);
  if (!existing) document.head.appendChild(element);
}

export default function SeoHead({
  title,
  description,
  keywords,
  canonical,
  jsonLd,
  image = defaultOgImage,
  type = "website",
  noindex = false,
  lang = typeof window !== "undefined" && window.location.pathname.startsWith("/fa") ? "fa" : "en",
}) {
  const titleIncludesBrand = /setareh kerman|ستاره کرمان/i.test(title);
  const fullTitle = titleIncludesBrand ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical ? normalizeCanonical(canonical, lang) : null;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const enPath = getAlternatePath(canonical, "en");
  const faPath = getAlternatePath(canonical, "fa");
  const jsonLdContent = jsonLd
    ? JSON.stringify(
        Array.isArray(jsonLd)
          ? { "@context": "https://schema.org", "@graph": jsonLd }
          : jsonLd,
      )
    : "";

  useEffect(() => {
    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setMeta("name", "googlebot", noindex ? "noindex, nofollow" : "index, follow");
    setMeta("name", "author", siteName);

    setMeta("property", "og:type", type);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", fullImage);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:image:alt", title);
    setMeta("property", "og:url", fullCanonical);
    setMeta("property", "og:site_name", siteName);
    setMeta("property", "og:locale", lang === "fa" ? "fa_IR" : "en_US");
    setMeta("property", "og:locale:alternate", lang === "fa" ? "en_US" : "fa_IR");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", fullImage);
    setMeta("name", "twitter:image:alt", title);
    setMeta("name", "twitter:domain", siteHost);

    setLink("canonical", fullCanonical);
    setLink("alternate", canonical ? `${siteUrl}${enPath}` : null, "en");
    setLink("alternate", canonical ? `${siteUrl}${faPath}` : null, "fa");
    setLink("alternate", canonical ? `${siteUrl}${enPath}` : null, "x-default");

    const existingSchema = document.getElementById("page-json-ld");
    if (!jsonLdContent) {
      existingSchema?.remove();
      return;
    }
    const schema = existingSchema || document.createElement("script");
    schema.id = "page-json-ld";
    schema.type = "application/ld+json";
    schema.textContent = jsonLdContent;
    if (!existingSchema) document.head.appendChild(schema);
  }, [
    canonical,
    description,
    enPath,
    faPath,
    fullCanonical,
    fullImage,
    fullTitle,
    jsonLdContent,
    keywords,
    lang,
    noindex,
    title,
    type,
  ]);

  return null;
}

SeoHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  canonical: PropTypes.string,
  jsonLd: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  image: PropTypes.string,
  type: PropTypes.string,
  noindex: PropTypes.bool,
  lang: PropTypes.oneOf(["en", "fa"]),
};
