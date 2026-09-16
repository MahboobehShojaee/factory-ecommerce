import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getLocalizedNavPath } from '../../content/navigation/data.js';
import { getCatalogConfig } from '../../content/homepage/catalog.js';

/**
 * Export Capability Presentation Component
 * Premium presentation of global export operations and logistics
 * 
 * Features:
 * - Country/region showcase
 * - Export statistics
 * - Logistics network visualization
 * - Bilingual support (English + Persian)
 * - RTL support for Persian
 * - Scroll-triggered animations
 */

const ExportCapability = ({
  countries = [],
  statistics = [],
  logistics = [],
  title,
  subtitle,
  lang = 'en',
  className = '',
}) => {
  const sectionRef = useRef(null);
  const viewport = { once: true, amount: 0.12 };

  // Default export countries
  const defaultCountries = countries.length > 0 ? countries : [
    {
      id: 1,
      name: 'United Arab Emirates',
      code: 'ae',
      region: 'Middle East',
      volume: '15%',
    },
    {
      id: 2,
      name: 'Iraq',
      code: 'iq',
      region: 'Middle East',
      volume: '12%',
    },
    {
      id: 3,
      name: 'Turkey',
      code: 'tr',
      region: 'Asia',
      volume: '10%',
    },
    {
      id: 4,
      name: 'Afghanistan',
      code: 'af',
      region: 'Asia',
      volume: '8%',
    },
    {
      id: 5,
      name: 'Oman',
      code: 'om',
      region: 'Middle East',
      volume: '7%',
    },
    {
      id: 6,
      name: 'Pakistan',
      code: 'pk',
      region: 'Asia',
      volume: '6%',
    },
  ];

  // Default export statistics
  const defaultStatistics = statistics.length > 0 ? statistics : [
    {
      id: 1,
      value: 10,
      suffix: '+',
      label: {
        en: 'Countries Exported To',
        fa: 'کشور صادرات',
      },
    },
    {
      id: 2,
      value: 30000,
      suffix: '+',
      label: {
        en: 'km Exported Annually',
        fa: 'کیلومتر صادرات سالانه',
      },
    },
    {
      id: 3,
      value: 25,
      suffix: '%',
      label: {
        en: 'Of Total Production Exported',
        fa: 'از کل تولید صادر شده',
      },
    },
    {
      id: 4,
      value: 24,
      suffix: '/7',
      label: {
        en: 'Export Operations',
        fa: 'عملیات صادرات',
      },
    },
  ];

  // Default logistics network
  const defaultLogistics = logistics.length > 0 ? logistics : [
    {
      id: 1,
      title: {
        en: 'Sea Freight',
        fa: 'حمل دریایی',
      },
      description: {
        en: 'Direct shipping from Bandar Abbas port to major international destinations.',
        fa: 'حمل و نقل مستقیم از بندر عباس به مقاصد بین‌المللی اصلی.',
      },
      icon: 'ship',
    },
    {
      id: 2,
      title: {
        en: 'Air Freight',
        fa: 'حمل هوایی',
      },
      description: {
        en: 'Express air cargo for urgent shipments and high-value products.',
        fa: 'بار هوایی اکسپرس برای محموله‌های فوری و محصولات با ارزش بالا.',
      },
      icon: 'plane',
    },
    {
      id: 3,
      title: {
        en: 'Land Transport',
        fa: 'حمل زمینی',
      },
      description: {
        en: 'Overland trucking to neighboring countries and regional markets.',
        fa: 'کامیون زمینی به کشورهای همسایه و بازارهای منطقه.',
      },
      icon: 'truck',
    },
    {
      id: 4,
      title: {
        en: 'Customs Clearance',
        fa: 'گمرک',
      },
      description: {
        en: 'Expert customs documentation and clearance services for smooth export.',
        fa: 'خدمات مستندات گمرکی و گمرک کارشناس برای صادرات روان.',
      },
      icon: 'document',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const getIcon = (iconName) => {
    const icons = {
      ship: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      plane: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      truck: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      document: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    };
    return icons[iconName] || icons.ship;
  };

  const isRTL = lang === 'fa';

  return (
    <section
      ref={sectionRef}
      className={`export-capability py-10 sm:py-14 md:py-16 bg-white ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {title || (lang === 'en' ? 'Global Export Capability' : 'قابلیت صادرات جهانی')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle || (lang === 'en'
              ? 'Our products reach markets across the Middle East, Asia, and beyond through our comprehensive export network.'
              : 'محصولات ما از طریق شبکه صادرات جامع خود به بازارهای خاورمیانه، آسیا و فراتر از آن می‌رسند.'
            )}
          </p>
        </motion.div>

        {/* Export Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-14"
        >
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-2xl p-6 md:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {defaultStatistics.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={itemVariants}
                  className="text-center text-white"
                >
                  <div className="text-4xl font-bold mb-1">
                    {stat.value}
                    <span className="text-2xl ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-white/90">
                    {stat.label[lang]}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Export Countries */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            {lang === 'en' ? 'Export Markets' : 'بازارهای صادرات'}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {defaultCountries.map((country) => (
              <motion.div
                key={country.id}
                variants={itemVariants}
                className="bg-[#374151] border border-white/10 rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <img
                    src={`https://flagcdn.com/w28/${country.code}.png`}
                    alt={`${country.name} flag`}
                    className="w-7 h-7 rounded-full object-cover shrink-0"
                    loading="lazy"
                  />
                  <h4 className="font-bold text-xs sm:text-sm text-white truncate">{country.name}</h4>
                </div>
                <div className="flex justify-between items-center text-[10px] sm:text-xs">
                  <span className="text-gray-400 truncate">{country.region}</span>
                  <span className="bg-[#D4AF37] text-[#111827] px-2 py-0.5 rounded-full font-medium shrink-0">
                    {country.volume}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Logistics Network */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {lang === 'en' ? 'Logistics Network' : 'شبکه لجستیک'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {defaultLogistics.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                  <div className="text-white">
                    {getIcon(item.icon)}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title[lang]}</h4>
                <p className="text-sm text-gray-600">{item.description[lang]}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              to={getLocalizedNavPath('/contact', lang)}
              className="px-8 py-4 bg-[#D4AF37] text-white font-medium rounded-lg hover:bg-[#B8860B] transition-colors duration-300 text-center"
            >
              {lang === 'en' ? 'Request Export Information' : 'درخواست اطلاعات صادرات'}
            </Link>
            <a
              href={getCatalogConfig(lang).path}
              download
              className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border-2 border-[#D4AF37] hover:bg-gray-50 transition-colors duration-300 text-center"
            >
              {lang === 'en' ? 'Download Export Catalog' : 'دانلود کاتالوگ صادرات'}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExportCapability;
