import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

const LanguageContext = createContext(null);

export const LANGS = {
  EN: "en",
  FA: "fa",
};

const translations = {
  en: {
    metadata: {
      title: "Setareh Kerman Wire & Cable",
    },
    layout: {
      brandLine1: "Setareh Kerman",
      brandLine2: "Wire & Cable",
      navHome: "Home",
      navProducts: "Products",
      navAbout: "About",
      navContact: "Contact",
      footerLeft: "© {year} Setareh Kerman Wire & Cable Factory.",
      footerRight: "Engineered for industrial power, control & communication.",
    },
    home: {
      badge: "Setareh Kerman Wire & Cable Factory",
      title: "Powering the {highlight} of Energy & Connectivity",
      titleHighlight: "Future",
      subtitle:
        "From industrial grids to mission-critical automation, we engineer copper and aluminum cables with laboratory-proven performance, precise conductivity and long-term reliability.",
      ctaPrimary: "Explore Products",
      ctaSecondary: "Our Quality Lab",
      stats: [
        {
          label: "Certified Lab",
          value: "IEC / ISO 17025",
          sub: "Type & routine testing",
        },
        {
          label: "Annual Capacity",
          value: "120,000 km",
          sub: "LV & MV power cables",
        },
        {
          label: "On-time Delivery",
          value: "98.7%",
          sub: "Backed by smart planning",
        },
        {
          label: "Global Reach",
          value: "30+ countries",
          sub: "Across energy & industry",
        },
      ],
      macroTitle: "Macro Copper Conductors",
      macroTextLine1: "Precision-drawn copper strands,",
      macroTextLine2: "optimized for low loss & thermal stability.",
      macroPurityLabel: "Conductor Purity",
      macroPurityValue: "99.98% Electrolytic Copper",
      macroTestingLabel: "Testing",
      macroTestingText: "HV withstand, partial discharge & fire resistance.",
    },
    projects: {
      eyebrow: "FEATURED PROJECTS",
      title: "Critical Infrastructure",
      description:
        "Setareh Kerman cables, the vital arteries of the country's largest industrial projects.",
      category: "INDUSTRIAL SOLUTION",
      project1: "Persian Gulf Water Transfer Project",
      project2: "National Gas Pipeline Expansion",
      project3: "Kerman Solar Farm Phase 2",
    },
    products: {
      eyebrow: "Product Portfolio",
      title: "Industrial-grade wire & cable systems",
      subtitle:
        "Each family is engineered for reliability in demanding applications, tested in our in-house laboratory and manufactured under strict quality systems.",
      categories: [
        {
          name: "Power Cables",
          subtitle: "Low & Medium Voltage (LV / MV)",
          description:
            "Copper and aluminum power cables engineered for industrial distribution networks, substations and infrastructure.",
          highlights: [
            "LV up to 1 kV, MV up to 36 kV",
            "XLPE / PVC insulation with armored options",
            "IEC 60502, BS, VDE and local grid standards",
            "Suitable for buried, duct and tray installations",
          ],
        },
        {
          name: "Control & Instrument Cables",
          subtitle: "Automation, control and signal",
          description:
            "Multi-core and pair cables for process control, PLC, DCS and analog/digital signals in harsh industrial environments.",
          highlights: [
            "Individual & overall shielding options",
            "Low capacitance for precise signal integrity",
            "Flame-retardant and low-smoke options",
            "Number-coded or color-coded identification",
          ],
        },
        {
          name: "Coaxial & Communication",
          subtitle: "High-speed data & RF",
          description:
            "Coaxial, LAN and data cables for CCTV, broadband, RF and industrial Ethernet communication.",
          highlights: [
            "75Ω CCTV, RF and broadband coaxial",
            "CAT5e / CAT6 industrial Ethernet",
            "Optimized screening for low interference",
            "Indoor, outdoor and PE-sheathed designs",
          ],
        },
        {
          name: "Specialized Cables",
          subtitle: "Fire-resistant & Marine",
          description:
            "Cables for critical power and signal circuits under fire conditions, and marine installations exposed to oil and vibration.",
          highlights: [
            "Halogen-free, low-smoke compounds",
            "Fire survival up to 3 hours (IEC 60331)",
            "Marine approved sheathing and screening",
            "Oil, UV and abrasion-resistant designs",
          ],
        },
      ],
    },
    about: {
      eyebrow: "About the Factory",
      title: "Laboratory-driven cable manufacturing",
      intro:
        "Setareh Kerman Factory integrates continuous casting, drawing, stranding and extrusion with an independent testing laboratory. Every batch is validated for electrical, mechanical and fire performance.",
      cardTitle: "Advanced testing & quality standards",
      cardText:
        "Our in-house laboratory follows IEC, EN, BS and local grid standards. Type tests and routine tests are scheduled through a digital quality system, giving full traceability down to each production reel.",
      blocks: {
        electricalTitle: "Electrical",
        electricalText:
          "DC resistance, HV withstand, partial discharge, capacitance and insulation resistance.",
        mechanicalTitle: "Mechanical",
        mechanicalText:
          "Tensile and elongation tests, aging, bending radius and impact performance.",
        fireTitle: "Fire & Safety",
        fireText:
          "Flame propagation, smoke density, halogen content and fire-survival of critical circuits.",
      },
      qualitySystemTitle: "Quality System",
      qualitySystemText:
        "Integrated management of quality, environment and safety.",
      traceabilityTitle: "Traceability",
      traceabilityText:
        "QR-coded coils linked to test reports and material lots.",
      engineeringTitle: "Engineering Support",
      engineeringText:
        "Support for cable selection, sizing and installation methods.",
      sidebarTitle: "Lab Snapshot",
      sidebarText:
        "High-voltage test bays, fire test chambers and precision measurement equipment are located within a controlled environment.",
      metrics: {
        routine: "Routine tests per day",
        type: "Type test families",
        records: "Digital records stored",
        recordsValue: "10+ years",
      },
    },
    contact: {
      eyebrow: "Contact & Inquiries",
      title: "Share your project requirements",
      subtitle:
        "Send us your single-line diagrams, cable schedules or tender documents.",
      company: "Company / Organization",
      companyPlaceholder: "Industrial client, EPC, consultant...",
      person: "Contact Person",
      personPlaceholder: "Full name",
      email: "Email",
      phone: "Phone / WhatsApp",
      projectType: "Project Type",
      projectOptions: [
        "Industrial plant",
        "Grid / substation",
        "Building / commercial",
        "Marine / offshore",
        "Other",
      ],
      cableFamilies: "Required Cable Families",
      cableOptions: [
        "Power LV / MV",
        "Control & Instrument",
        "Coaxial / Communication",
        "Fire-resistant",
      ],
      detailsLabel: "Project Details / Cable Schedule",
      detailsPlaceholder:
        "Voltage level, installation method, quantities, standards required...",
      submit: "Submit Inquiry",
      locationTitle: "Location & logistics",
      locationText: "Kerman Industrial Zone, Setareh Kerman Production Plant.",
      factoryAddress: "Factory Address",
      factoryAddressText: "Industrial Zone, Kerman, Iran.",
      workingHours: "Working Hours",
      workingHoursText:
        "Saturday – Wednesday, 08:00 – 17:00 (Production 24/7).",
    },
  },
  fa: {
    metadata: {
      title: "سیم و کابل ستاره کرمان",
    },
    layout: {
      brandLine1: "کارخانه سیم و کابل",
      brandLine2: "ستاره کرمان",
      navHome: "خانه",
      navProducts: "محصولات",
      navAbout: "درباره ما",
      navContact: "تماس",
      footerLeft: "© {year} کارخانه سیم و کابل ستاره کرمان.",
      footerRight: "طراحی‌شده برای توان، کنترل و ارتباطات صنعتی.",
    },
    home: {
      badge: "کارخانه سیم و کابل ستاره کرمان",
      titleHighlight: "آینده",
      title: "قدرت‌بخشی به {highlight} انرژی و ارتباطات",
      subtitle:
        "از شبکه‌های صنعتی تا اتوماسیون‌های حیاتی، ما کابل‌های مسی و آلومینیومی را با عملکرد تأییدشده آزمایشگاهی، رسانایی دقیق و دوام طولانی‌مدت طراحی و تولید می‌کنیم.",
      ctaPrimary: "مشاهده محصولات",
      ctaSecondary: "آزمایشگاه کیفیت ما",
      stats: [
        {
          label: "آزمایشگاه معتبر",
          value: "IEC / ISO 17025",
          sub: "آزمون‌های نوعی و روتین",
        },
        {
          label: "ظرفیت سالانه",
          value: "۱۲۰٬۰۰۰ کیلومتر",
          sub: "کابل‌های قدرت فشار ضعیف و متوسط",
        },
        {
          label: "تحویل به‌موقع",
          value: "۹۸٫۷٪",
          sub: "بر پایه برنامه‌ریزی هوشمند",
        },
        {
          label: "حضور بین‌المللی",
          value: "۳۰+ کشور",
          sub: "در پروژه‌های انرژی و صنعت",
        },
      ],
      macroTitle: "نمای ماکرو از هادی‌های مسی",
      macroTextLine1: "مفتول‌های مسی با کشش دقیق،",
      macroTextLine2: "بهینه‌شده برای تلفات کم و پایداری حرارتی.",
      macroPurityLabel: "خلوص هادی",
      macroPurityValue: "۹۹٫۹۸٪ مس الکترولیتی",
      macroTestingLabel: "آزمون‌ها",
      macroTestingText: "آزمون ولتاژ بالا، تخلیه جزئی و مقاومت در برابر حریق.",
    },
    projects: {
      eyebrow: "پروژه‌های برتر",
      title: "زیرساخت‌های حیاتی",
      description:
        "کابل‌های ستاره کرمان، رگ‌های حیاتی بزرگترین پروژه‌های صنعتی کشور.",
      category: "راهکار صنعتی",
      project1: "پروژه آبرسانی خلیج فارس",
      project2: "توسعه خط لوله گاز سراسری",
      project3: "فاز ۲ نیروگاه خورشیدی کرمان",
    },
    products: {
      eyebrow: "سبد محصولات",
      title: "راهکارهای حرفه‌ای سیم و کابل صنعتی",
      subtitle:
        "هر گروه محصول برای اطمینان از عملکرد پایدار در شرایط سخت صنعتی طراحی شده، در آزمایشگاه داخلی ما آزمون می‌شود و تحت سیستم‌های سختگیرانه کنترل کیفیت تولید می‌گردد.",
      categories: [
        {
          name: "کابل‌های قدرت",
          subtitle: "ولتاژ ضعیف و متوسط (LV / MV)",
          description:
            "کابل‌های قدرت مسی و آلومینیومی طراحی‌شده برای شبکه‌های توزیع صنعتی، پست‌ها و زیرساخت‌های انرژی.",
          highlights: [
            "ولتاژ ضعیف تا ۱ کیلوولت، ولتاژ متوسط تا ۳۶ کیلوولت",
            "عایق XLPE / PVC با گزینه‌های زره‌دار",
            "مطابق IEC 60502، BS، VDE و استانداردهای شبکه محلی",
            "مناسب نصب زمینی، داخل کانال و روی سینی کابل",
          ],
        },
        {
          name: "کابل‌های کنترل و ابزار دقیق",
          subtitle: "اتوماسیون، کنترل و سیگنال",
          description:
            "کابل‌های چندرگه و زوجی برای کنترل فرآیند، PLC، DCS و سیگنال‌های آنالوگ/دیجیتال در محیط‌های صنعتی سخت.",
          highlights: [
            "گزینه‌های شیلد تکی و کلی",
            "ظرفیت خازنی پایین برای حفظ کیفیت سیگنال",
            "نسوز و کم‌دود طبق استانداردهای حریق",
            "کُدگذاری عددی یا رنگی برای سهولت شناسایی",
          ],
        },
        {
          name: "کابل‌های کواکسیال و مخابراتی",
          subtitle: "داده‌ی پرسرعت و RF",
          description:
            "کابل‌های کواکسیال، شبکه و داده برای CCTV، پهن‌باند، RF و ارتباطات اترنت صنعتی.",
          highlights: [
            "کابل‌های کواکسیال ۷۵ اهم برای CCTV، RF و پهن‌باند",
            "کابل‌های شبکه صنعتی CAT5e / CAT6",
            "طراحی با شیلد بهینه برای تداخل کم",
            "طراحی مناسب فضای داخلی، خارجی و روکش PE",
          ],
        },
        {
          name: "کابل‌های تخصصی",
          subtitle: "مقاوم در برابر حریق و دریایی",
          description:
            "کابل‌های ویژه برای مدارهای قدرت و سیگنال حیاتی در شرایط حریق و نصب‌های دریایی در معرض روغن و لرزش.",
          highlights: [
            "بدون هالوژن و کم‌دود",
            "دوام در حریق تا ۳ ساعت (IEC 60331)",
            "روکش و شیلد مورد تأیید دریایی",
            "مقاوم در برابر روغن، UV و سایش",
          ],
        },
      ],
    },
    about: {
      eyebrow: "درباره کارخانه",
      title: "تولید کابل بر پایه آزمایشگاه",
      intro:
        "کارخانه سیم و کابل ستاره کرمان با تلفیق ریخته‌گری پیوسته، کشش، رشته‌سازی و اکستروژن، در کنار آزمایشگاه مستقل، هر سری تولید را از نظر عملکرد الکتریکی، مکانیکی و رفتاری در برابر حریق تأیید می‌کند.",
      cardTitle: "آزمون‌های پیشرفته و استانداردهای کیفی",
      cardText:
        "آزمایشگاه داخلی ما مطابق استانداردهای IEC ،EN ،BS و الزامات شبکه‌های محلی عمل می‌کند. آزمون‌های نوعی و روتین از طریق سیستم دیجیتال کیفیت برنامه‌ریزی شده و ردیابی کامل تا هر قرقره تولیدی را فراهم می‌سازد.",
      blocks: {
        electricalTitle: "آزمون‌های الکتریکی",
        electricalText:
          "مقاومت اهمی DC، تحمل ولتاژ بالا، تخلیه جزئی، ظرفیت خازنی و مقاومت عایقی.",
        mechanicalTitle: "آزمون‌های مکانیکی",
        mechanicalText:
          "آزمون کشش و ازدیاد طول، پیرسازی حرارتی، شعاع خمش و مقاومت در برابر ضربه.",
        fireTitle: "حریق و ایمنی",
        fireText:
          "انتشار شعله، چگالی دود، میزان هالوژن و دوام مدارهای حیاتی در شرایط حریق.",
      },
      qualitySystemTitle: "سیستم مدیریت کیفیت",
      qualitySystemText:
        "مدیریت یکپارچه کیفیت، محیط‌زیست و ایمنی در تمام سطوح تولید.",
      traceabilityTitle: "ردیابی کامل",
      traceabilityText:
        "قرقره‌های دارای کد QR متصل به گزارش‌های آزمون و بچ مواد اولیه.",
      engineeringTitle: "پشتیبانی مهندسی",
      engineeringText:
        "همراهی در انتخاب نوع کابل، سایزینگ و روش‌های نصب برای پروژه‌های مختلف.",
      sidebarTitle: "نمایی از آزمایشگاه",
      sidebarText:
        "سالن‌های آزمون ولتاژ بالا، اتاق‌های تست حریق و تجهیزات اندازه‌گیری دقیق در محیطی کنترل‌شده قرار دارند.",
      metrics: {
        routine: "تعداد آزمون‌های روتین روزانه",
        type: "گروه‌های آزمون نوعی",
        records: "حفظ سوابق دیجیتال",
        recordsValue: "بیش از ۱۰ سال",
      },
    },
    contact: {
      eyebrow: "تماس و ارسال استعلام",
      title: "مشخصات پروژه خود را با ما به اشتراک بگذارید",
      subtitle:
        "نقشه‌های تک‌خطی، لیست کابل‌ها یا اسناد مناقصه خود را ارسال کنید.",
      company: "نام شرکت / سازمان",
      companyPlaceholder: "کارفرما، پیمانکار EPC، مشاور...",
      person: "نام و نام خانوادگی",
      personPlaceholder: "نام شخص پاسخگو",
      email: "ایمیل",
      phone: "تلفن / واتس‌اپ",
      projectType: "نوع پروژه",
      projectOptions: [
        "کارخانه و صنایع",
        "شبکه و پست برق",
        "ساختمان و تجاری",
        "دریایی / آف‌شور",
        "سایر",
      ],
      cableFamilies: "خانواده‌های کابل موردنیاز",
      cableOptions: [
        "کابل قدرت LV / MV",
        "کابل کنترل و ابزار دقیق",
        "کابل کواکسیال / مخابراتی",
        "کابل مقاوم در برابر حریق",
      ],
      detailsLabel: "توضیحات پروژه / لیست کابل‌ها",
      detailsPlaceholder:
        "سطح ولتاژ، روش نصب، متراژ تقریبی، استانداردهای موردنیاز و سایر جزئیات...",
      submit: "ارسال استعلام",
      locationTitle: "موقعیت و لجستیک",
      locationText: "کرمان، منطقه صنعتی، مجتمع تولیدی کابل ستاره کرمان.",
      factoryAddress: "آدرس کارخانه",
      factoryAddressText: "کرمان، شهرک صنعتی، خیابان ستاره.",
      workingHours: "ساعات کاری",
      workingHoursText:
        "شنبه تا چهارشنبه، ۸:۰۰ تا ۱۷:۰۰ (خطوط تولید ۲۴ ساعته فعال هستند).",
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem("app_lang");
    return savedLang === LANGS.EN || savedLang === LANGS.FA
      ? savedLang
      : LANGS.FA;
  });

  useEffect(() => {
    localStorage.setItem("app_lang", lang);
    const isRTL = lang === LANGS.FA;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    const currentTitle = translations[lang].metadata.title;
    document.title = currentTitle;
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
