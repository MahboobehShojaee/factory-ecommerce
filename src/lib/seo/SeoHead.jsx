import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const defaultImage = "https://setarehkerman.com/og-image.jpg";
const siteName = "Setareh Kerman Wire & Cable";
const siteUrl = "https://setarehkerman.com";

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

export default function SeoHead({
  title,
  description,
  keywords,
  canonical,
  jsonLd,
  image = defaultImage,
  type = "website",
  noindex = false,
  lang = typeof window !== "undefined" && window.location.pathname.startsWith("/fa") ? "fa" : "en",
}) {
  const fullTitle = `${title} | ${siteName}`;
  const fullCanonical = normalizeCanonical(canonical, lang);
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const enPath = getAlternatePath(canonical, "en");
  const faPath = getAlternatePath(canonical, "fa");

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      <link rel="alternate" hreflang="en" href={`${siteUrl}${enPath}`} />
      <link rel="alternate" hreflang="fa" href={`${siteUrl}${faPath}`} />
      <link rel="alternate" hreflang="x-default" href={`${siteUrl}${enPath}`} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={lang === "fa" ? "fa_IR" : "en_US"} />
      <meta
        property="og:locale:alternate"
        content={lang === "fa" ? "en_US" : "fa_IR"}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:domain" content="setarehkerman.com" />

      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <meta
        name="googlebot"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <meta name="author" content={siteName} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(
            Array.isArray(jsonLd)
              ? { "@context": "https://schema.org", "@graph": jsonLd }
              : jsonLd,
          )}
        </script>
      )}
    </Helmet>
  );
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
