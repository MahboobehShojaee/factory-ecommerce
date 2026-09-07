/**
 * Production-ready Category Configuration System
 * Centralized, scalable, and maintainable category definitions
 */

export const CATEGORY_CONFIG = {
  power: {
    slug: 'power',
    titles: {
      en: 'Power Cables',
      fa: 'کابل‌های برق'
    },
    descriptions: {
      en: 'High-performance power cables designed for reliable electricity transmission and distribution in industrial, commercial, and residential applications. Engineered to meet international standards for safety and efficiency.',
      fa: 'کابل‌های برق با عملکرد بالا طراحی شده برای انتقال و توزیع برق قابل اعتماد در کاربردهای صنعتی، تجاری و مسکونی. مهندسی شده برای مطابقت با استانداردهای بین‌المللی برای ایمنی و کارایی.'
    },
    icons: {
      header: '⚡',
      conductor: '🔌',
      insulation: '🛡️',
      voltage: '⚡',
      temperature: '🌡️',
      standard: '📋'
    },
    brandColor: '#DC2626', // Red for power
    specs: {
      conductor: {
        value: "Copper, Class 2 (Stranded) / Aluminum, Class 2",
        icon: '🔌',
        description: {
          en: "High-quality conductive materials for optimal current carrying capacity",
          fa: "مواد هادی با کیفیت بالا برای ظرفیت جریان بهینه"
        }
      },
      insulation: {
        value: "XLPE (Cross-linked Polyethylene) / PVC (Polyvinyl Chloride)",
        icon: '🛡️',
        description: {
          en: "Advanced insulation materials for superior electrical protection",
          fa: "مواد عایق پیشرفته برای حفاظت الکتریکی برتر"
        }
      },
      voltageRating: {
        value: "0.6/1kV (LV) up to 36kV (MV)",
        icon: '⚡',
        description: {
          en: "Wide voltage range for various power distribution applications",
          fa: "محدوده ولتاژ گسترده برای کاربردهای مختلف توزیع برق"
        }
      },
      temperatureRange: {
        value: "-40°C to +90°C",
        icon: '🌡️',
        description: {
          en: "Wide operating temperature range for harsh environments",
          fa: "محدوده دمای کاری گسترده برای محیط‌های سخت"
        }
      },
      standard: {
        value: "IEC 60502-1, IEC 60502-2, BS 6622, VDE 0250",
        icon: '📋',
        description: {
          en: "Compliance with international electrical standards",
          fa: "انطباق با استانداردهای الکتریکی بین‌المللی"
        }
      },
      crossSection: {
        value: "1.5mm² to 630mm²",
        icon: '📏',
        description: {
          en: "Comprehensive range of conductor sizes",
          fa: "محدوده کامل اندازه‌های هادی"
        }
      },
      coreCount: {
        value: "1, 2, 3, 4, 5 cores",
        icon: '🔢',
        description: {
          en: "Multiple core configurations for different applications",
          fa: "پیکربندی‌های چند هسته‌ای برای کاربردهای مختلف"
        }
      },
      shielding: {
        value: "Copper wire screen (for MV) / None (for LV)",
        icon: '🛡️',
        description: {
          en: "Electromagnetic interference protection where required",
          fa: "محافظت در برابر تداخل الکترومغناطیسی در صورت نیاز"
        }
      },
      armor: {
        value: "Steel Wire Armor (SWA) / Steel Tape Armor (STA) / None",
        icon: '🛡️',
        description: {
          en: "Mechanical protection options for underground installations",
          fa: "گزینه‌های حفاظت مکانیکی برای نصب زیرزمینی"
        }
      }
    },
    applications: [
      "Power distribution networks",
      "Industrial plants and factories", 
      "Underground installations",
      "Renewable energy systems",
      "Infrastructure projects",
      "Commercial buildings",
      "Utility substations"
    ],
    features: [
      "High mechanical strength",
      "Excellent thermal stability", 
      "Moisture and UV resistant",
      "Long service life (>30 years)",
      "Low smoke zero halogen options available",
      "Flame retardant compounds",
      "Corrosion resistant"
    ]
  },

  industrial: {
    slug: 'industrial',
    titles: {
      en: 'Industrial Cables',
      fa: 'کابل‌های صنعتی'
    },
    descriptions: {
      en: 'Specialized industrial cables for control, instrumentation, and automation systems. Built to withstand harsh environments with excellent flexibility and durability for demanding industrial applications.',
      fa: 'کابل‌های صنعتی تخصصی برای سیستم‌های کنترل، ابزار دقیق و اتوماسیون. ساخته شده برای مقاومت در برابر محیط‌های سخت با انعطاف‌پذیری و دوام عالی برای کاربردهای صنعتی demanding.'
    },
    icons: {
      header: '🏭',
      conductor: '⚙️',
      insulation: '🛡️',
      voltage: '⚡',
      temperature: '🌡️',
      standard: '📋'
    },
    brandColor: '#059669', // Green for industrial
    specs: {
      conductor: {
        value: "Copper, Class 5 (Flexible) / Copper, Class 2",
        icon: '⚙️',
        description: {
          en: "Flexible conductors for easy installation in tight spaces",
          fa: "هادی‌های انعطاف‌پذیر برای نصب آسان در فضاهای تنگ"
        }
      },
      insulation: {
        value: "PVC / XLPE / EPR (Ethylene Propylene Rubber)",
        icon: '🛡️',
        description: {
          en: "Versatile insulation materials for different industrial requirements",
          fa: "مواد عایق همه‌کاره برای الزامات صنعتی مختلف"
        }
      },
      voltageRating: {
        value: "300/500V (Control) / 0.6/1kV (Power)",
        icon: '⚡',
        description: {
          en: "Optimized voltage ratings for control and power applications",
          fa: "ولتاژ‌های بهینه‌سازی شده برای کاربردهای کنترل و قدرت"
        }
      },
      temperatureRange: {
        value: "-25°C to +85°C",
        icon: '🌡️',
        description: {
          en: "Enhanced temperature range for industrial environments",
          fa: "محدوده دمای تقویت شده برای محیط‌های صنعتی"
        }
      },
      standard: {
        value: "IEC 60227, IEC 60502-1, VDE 0250, BS 6004",
        icon: '📋',
        description: {
          en: "Compliance with industrial cable standards",
          fa: "انطباق با استانداردهای کابل صنعتی"
        }
      },
      crossSection: {
        value: "0.5mm² to 240mm²",
        icon: '📏',
        description: {
          en: "Wide range for signal and power transmission",
          fa: "محدوده گسترده برای انتقال سیگنال و قدرت"
        }
      },
      coreCount: {
        value: "2 to 61 cores (Control) / 1 to 5 cores (Power)",
        icon: '🔢',
        description: {
          en: "High core count options for complex control systems",
          fa: "گزینه‌های تعداد هسته بالا برای سیستم‌های کنترل پیچیده"
        }
      },
      shielding: {
        value: "Aluminum foil + Copper braid / Individual + Overall shielding",
        icon: '🛡️',
        description: {
          en: "Advanced EMI/RFI shielding for signal integrity",
          fa: "شیلدینگ پیشرفته EMI/RFI برای یکپارچگی سیگنال"
        }
      },
      armor: {
        value: "Galvanized steel braid / SWA / None",
        icon: '🛡️',
        description: {
          en: "Mechanical protection for harsh industrial environments",
          fa: "حفاظت مکانیکی برای محیط‌های صنعتی سخت"
        }
      }
    },
    applications: [
      "Process control systems",
      "Automation and instrumentation",
      "PLC and DCS connections",
      "Sensor and actuator wiring",
      "Industrial machinery",
      "Manufacturing plants",
      "Chemical processing",
      "Oil and gas facilities"
    ],
    features: [
      "High flexibility for easy installation",
      "Excellent electrical properties",
      "Chemical and oil resistance",
      "Flame retardant options",
      "EMI/RFI shielding available",
      "Abrasion resistant",
      "UV stabilized"
    ]
  },

  communication: {
    slug: 'communication',
    titles: {
      en: 'Communication Cables',
      fa: 'کابل‌های ارتباطی'
    },
    descriptions: {
      en: 'Advanced communication cables for high-speed data transmission, networking, and telecommunications. Designed for optimal signal integrity and bandwidth performance in modern communication systems.',
      fa: 'کابل‌های ارتباطی پیشرفته برای انتقال داده با سرعت بالا، شبکه و مخابرات. طراحی شده برای یکپارچگی سیگنال بهینه و عملکرد پهنای باند در سیستم‌های ارتباطی مدرن.'
    },
    icons: {
      header: '📡',
      conductor: '📶',
      insulation: '🛡️',
      voltage: '📊',
      temperature: '🌡️',
      standard: '📋'
    },
    brandColor: '#7C3AED', // Purple for communication
    specs: {
      conductor: {
        value: "Copper-clad aluminum / Solid copper / Optical fibers",
        icon: '📶',
        description: {
          en: "Optimized conductors for signal transmission efficiency",
          fa: "هادی‌های بهینه‌سازی شده برای کارایی انتقال سیگنال"
        }
      },
      insulation: {
        value: "Foam Polyethylene / Solid PE / LSZH",
        icon: '🛡️',
        description: {
          en: "Low-loss insulation materials for high-frequency signals",
          fa: "مواد عایق کم‌تلف برای سیگنال‌های فرکانس بالا"
        }
      },
      voltageRating: {
        value: "Not applicable (Signal transmission)",
        icon: '📊',
        description: {
          en: "Optimized for data/signal rather than power transmission",
          fa: "بهینه‌سازی شده برای داده/سیگنال به جای انتقال قدرت"
        }
      },
      temperatureRange: {
        value: "-40°C to +85°C",
        icon: '🌡️',
        description: {
          en: "Wide operating range for various installation environments",
          fa: "محدوده کاری گسترده برای محیط‌های نصب مختلف"
        }
      },
      standard: {
        value: "IEC 61196, IEC 60793, ITU-T G.652, ANSI/TIA-568",
        icon: '📋',
        description: {
          en: "Compliance with telecommunications and data standards",
          fa: "انطباق با استانداردهای مخابرات و داده"
        }
      },
      crossSection: {
        value: "RG-6, RG-11, RG-58 / 9µm to 62.5µm (Fiber)",
        icon: '📏',
        description: {
          en: "Standard coaxial and fiber optic dimensions",
          fa: "ابعاد استاندارد کواکسیال و فیبر نوری"
        }
      },
      coreCount: {
        value: "Single coaxial / 2 to 144 fibers",
        icon: '🔢',
        description: {
          en: "Multiple fiber configurations for bandwidth scalability",
          fa: "پیکربندی‌های چندگانه فیبر برای مقیاس‌پذیری پهنای باند"
        }
      },
      shielding: {
        value: "Aluminum foil + 60% aluminum braid / 100% copper coverage",
        icon: '🛡️',
        description: {
          en: "Comprehensive shielding for signal protection",
          fa: "شیلدینگ جامع برای حفاظت سیگنال"
        }
      },
      armor: {
        value: "Fiber Reinforced Plastic (FRP) / Steel wire / None",
        icon: '🛡️',
        description: {
          en: "Protection options for indoor and outdoor installations",
          fa: "گزینه‌های حفاظتی برای نصب داخلی و خارجی"
        }
      }
    },
    applications: [
      "CCTV and security systems",
      "Broadband and internet connectivity",
      "Industrial Ethernet networks",
      "Telecommunications",
      "Data centers and server rooms",
      "Broadcast systems",
      "Satellite communications",
      "Building automation"
    ],
    features: [
      "Low signal attenuation",
      "High bandwidth capacity",
      "EMI shielding and protection",
      "Water and moisture resistant",
      "UV stabilized for outdoor use",
      "Fire retardant options",
      "Easy termination"
    ]
  },

  specialty: {
    slug: 'specialty',
    titles: {
      en: 'Specialty Cables',
      fa: 'کابل‌های تخصصی'
    },
    descriptions: {
      en: 'Specialty cables for unique applications including solar power, marine environments, fire safety systems, and transportation. Engineered with specialized materials and constructions for specific demanding requirements.',
      fa: 'کابل‌های تخصصی برای کاربردهای منحصر به فرد شامل انرژی خورشیدی، محیط‌های دریایی، سیستم‌های ایمنی آتش‌سوزی و حمل و نقل. مهندسی شده با مواد و ساختارهای تخصصی برای الزامات خاص demanding.'
    },
    icons: {
      header: '⭐',
      conductor: '🔋',
      insulation: '🛡️',
      voltage: '⚡',
      temperature: '🌡️',
      standard: '📋'
    },
    brandColor: '#EA580C', // Orange for specialty
    specs: {
      conductor: {
        value: "Tinned copper, Class 5 / Copper, Class 2",
        icon: '🔋',
        description: {
          en: "Corrosion-resistant conductors for harsh environments",
          fa: "هادی‌های مقاوم در برابر خوردگی برای محیط‌های سخت"
        }
      },
      insulation: {
        value: "XLPE / LSZH / Fire-resistant compounds",
        icon: '🛡️',
        description: {
          en: "Specialized insulation materials for specific applications",
          fa: "مواد عایق تخصصی برای کاربردهای خاص"
        }
      },
      voltageRating: {
        value: "0.6/1kV to 1.8kV DC (Solar) / 0.6/1kV (Marine)",
        icon: '⚡',
        description: {
          en: "Optimized ratings for solar DC and marine AC systems",
          fa: "ولتاژهای بهینه‌سازی شده برای سیستم‌های DC خورشیدی و AC دریایی"
        }
      },
      temperatureRange: {
        value: "-40°C to +125°C (Solar) / -40°C to +90°C (Marine)",
        icon: '🌡️',
        description: {
          en: "Extended temperature ranges for extreme environments",
          fa: "محدوده دمای گسترده برای محیط‌های شدید"
        }
      },
      standard: {
        value: "IEC 60331, IEC 60332, TUV 2PfG 1169, IEC 60092-350",
        icon: '📋',
        description: {
          en: "Compliance with specialty application standards",
          fa: "انطباق با استانداردهای کاربردهای تخصصی"
        }
      },
      crossSection: {
        value: "1.5mm² to 35mm² (Solar) / 1.5mm² to 240mm² (Marine)",
        icon: '📏',
        description: {
          en: "Optimized sizes for specific application requirements",
          fa: "اندازه‌های بهینه‌سازی شده برای الزامات کاربرد خاص"
        }
      },
      coreCount: {
        value: "Single or twin core / 1 to 4 cores",
        icon: '🔢',
        description: {
          en: "Configurations optimized for specialty applications",
          fa: "پیکربندی‌های بهینه‌سازی شده برای کاربردهای تخصصی"
        }
      },
      shielding: {
        value: "None / Copper wire screen",
        icon: '🛡️',
        description: {
          en: "Shielding options based on application requirements",
          fa: "گزینه‌های شیلدینگ بر اساس الزامات کاربرد"
        }
      },
      armor: {
        value: "None / Galvanized steel wire braid",
        icon: '🛡️',
        description: {
          en: "Mechanical protection for specific environmental conditions",
          fa: "حفاظت مکانیکی برای شرایط محیطی خاص"
        }
      }
    },
    applications: [
      "Solar power systems",
      "Marine and offshore installations",
      "Fire alarm and emergency systems",
      "Mining operations",
      "Railway and transportation",
      "Oil and gas platforms",
      "Chemical processing plants",
      "Nuclear facilities"
    ],
    features: [
      "UV and weather resistant",
      "Fire survival capabilities",
      "Saltwater corrosion resistance",
      "High temperature tolerance",
      "Low smoke zero halogen emissions",
      "Radiation resistant options",
      "Chemical resistant"
    ]
  }
};

/**
 * Get category configuration by slug
 */
export function getCategoryBySlug(slug) {
  return CATEGORY_CONFIG[slug] || null;
}

/**
 * Get category configuration by name (fallback)
 */
export function getCategoryByName(name) {
  const nameLower = name.toLowerCase();
  
  for (const [key, config] of Object.entries(CATEGORY_CONFIG)) {
    if (config.titles.en.toLowerCase().includes(nameLower) || 
        config.titles.fa.includes(name)) {
      return config;
    }
  }
  
  return null;
}

/**
 * Get all available categories
 */
export function getAllCategories() {
  return Object.entries(CATEGORY_CONFIG).map(([key, config]) => ({
    slug: key,
    ...config
  }));
}
