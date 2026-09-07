/**
 * Footer configuration — company, links, contact, certifications
 */

import { navigationConfig } from "../navigation/data.js";

export const footerConfig = {
  certifications: {
    en: ["ISO 9001", "CE Standard"],
    fa: ["استاندارد ملی ایران"],
  },
  company: {
    en: {
      name: "Setareh Kerman Factory",
      tagline: "Precision in every meter",
    },
    fa: {
      name: "کارخانه ستاره کرمان",
      tagline: "دقت در هر متر",
    },
  },
  contact: {
    phone: {
      en: "+98 34 325 22626",
      fa: "۰۳۴-۳۲۵۲۲۶۲۶",
    },
    mobile: {
      en: "+98 913 244 5950",
      fa: "۰۹۱۳۲۴۴۵۹۵۰",
    },
    email: "info.setarehkerman@gmail.com",
    address: {
      en: "Phase 2, Kerman Industrial City, Kerman, Iran",
      fa: "شهرک صنعتی کرمان، فاز ۲، کرمان، ایران",
    },
  },
  social: {
    en: [
      {
        id: "instagram",
        url: "https://instagram.com/setarehkerman",
        label: "Instagram",
      },
      {
        id: "whatsapp",
        url: "https://wa.me/989132445950",
        label: "WhatsApp",
      },
      {
        id: "linkedin",
        url: "https://linkedin.com/company/setareh-kerman",
        label: "LinkedIn",
      },
      {
        id: "email",
        url: "mailto:info.setarehkerman@gmail.com",
        label: "Email",
      },
    ],
    fa: [
      {
        id: "instagram",
        url: "https://instagram.com/setarehkerman",
        label: "Instagram",
      },
      {
        id: "whatsapp",
        url: "https://wa.me/989132445950",
        label: "WhatsApp",
      },
      {
        id: "email",
        url: "mailto:info.setarehkerman@gmail.com",
        label: "Email",
      },
      {
        id: "bale",
        url: "https://ble.ir/+989132445950",
        label: "بله",
      },
      {
        id: "rubika",
        url: "https://rubika.ir/+989132445950",
        label: "روبیکا",
      },
    ],
  },
};

export function getFooterConfig(lang) {
  return {
    certifications: footerConfig.certifications[lang] || footerConfig.certifications.fa,
    company: footerConfig.company[lang] || footerConfig.company.fa,
    contact: {
      phone: footerConfig.contact.phone[lang] || footerConfig.contact.phone.fa,
      mobile:
        footerConfig.contact.mobile[lang] || footerConfig.contact.mobile.fa,
      email: footerConfig.contact.email,
      address:
        footerConfig.contact.address[lang] || footerConfig.contact.address.fa,
    },
    social: footerConfig.social[lang] || footerConfig.social.fa,
    navRoutes: navigationConfig.routes,
  };
}
