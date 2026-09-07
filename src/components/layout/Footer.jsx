import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useRTL } from "../../hooks/useRTL.js";
import { getFooterConfig } from "../../content/footer/data.js";
import { getLocalizedNavPath } from "../../content/navigation/data.js";
import { Text } from "../ui/Typography.jsx";

export default function Footer() {
  const { lang, dict } = useLanguage();
  const { isRTL } = useRTL();
  const layout = dict.layout || {};
  const footer = getFooterConfig(lang);

  const navLabel = (key) => {
    const cap = key.charAt(0).toUpperCase() + key.slice(1);
    return layout[`nav${cap}`] || key;
  };

  return (
    <footer className="cinematic-footer mt-14 sm:mt-16" role="contentinfo">
      <div className="page-container py-12 sm:py-14">
        <div
          className={`grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-10 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {/* Brand */}
          <div className="lg:col-span-6 space-y-4">
            <Link
              to={getLocalizedNavPath("/", lang)}
              className={`inline-flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <div>
                <p className="text-white font-black text-base tracking-tight">
                  {footer.company.name}
                </p>
                <p className="text-[#D4AF37]/90 text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5">
                  {footer.company.tagline}
                </p>
              </div>
            </Link>
            <Text size="sm" className="text-gray-400 leading-relaxed max-w-sm">
              {layout.footerAbout}
            </Text>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex flex-wrap gap-2">
                {footer.certifications.map((std) => (
                  <span
                    key={std}
                    className="text-[10px] font-bold uppercase tracking-wider text-gray-400 border border-white/10 rounded-lg px-3 py-1.5"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <p className="eyebrow-label mb-4 text-gray-500">
              {layout.footerQuickLinks}
            </p>
            <ul className="space-y-2.5 list-none p-0">
              {footer.navRoutes.map((route) => (
                <li key={route.key}>
                  <Link
                    to={getLocalizedNavPath(route.path, lang)}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {navLabel(route.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="eyebrow-label mb-4 text-gray-500">
              {layout.footerContact}
            </p>
            <ul className="space-y-4 text-sm text-gray-300 list-none p-0">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" aria-hidden />
                <span className="leading-relaxed">{footer.contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden />
                <div className="space-y-1">
                  <a href={`tel:${footer.contact.phone.replace(/\s/g, "")}`} className="block hover:text-white transition-colors">
                    {footer.contact.phone}
                  </a>
                  <a href={`tel:${footer.contact.mobile.replace(/\s/g, "")}`} className="block text-gray-400 hover:text-white transition-colors">
                    {footer.contact.mobile}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden />
                <a href={`mailto:${footer.contact.email}`} className="hover:text-white transition-colors break-all">
                  {footer.contact.email}
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
              {footer.social.map((item) => {
                const icon = item.id === "instagram" ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                ) : item.id === "whatsapp" ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ) : item.id === "linkedin" ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ) : item.id === "bale" ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l2.5 3.2c.4.5 1.1.5 1.5 0L14 19h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 9H6c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1 .4 1 1s-.4 1-1 1zm-3-4H6c-.6 0-1-.4-1-1s.4-1 1-1h9c.6 0 1 .4 1 1s-.4 1-1 1z" />
                  </svg>
                ) : item.id === "rubika" ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.64 6.96l-5.5 8.5c-.3.46-.86.46-1.16 0l-2.5-3.86c-.3-.46-.1-.84.44-.84h1.5c.4 0 .78.2 1.01.54L12 15.5l4.7-7.28c.23-.34.61-.54 1.01-.54h1.5c.54 0 .74.38.43.84z" />
                  </svg>
                ) : (
                  <Mail className="w-5 h-5" />
                );
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-all duration-300">
                      {icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={`mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:gap-3 items-center justify-between text-center ${
            isRTL ? "sm:text-right sm:flex-row-reverse" : "sm:text-left"
          }`}
        >
          <Text size="xs" className="text-gray-500">
            © {new Date().getFullYear()} {footer.company.name}. {layout.footerRights}
          </Text>
          <Text size="xs" className="text-gray-500 max-w-md text-balance">
            {layout.footerRight}
          </Text>
        </div>
      </div>
    </footer>
  );
}
