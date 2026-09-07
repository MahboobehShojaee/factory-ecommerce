import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Microscope } from 'lucide-react';
import Image from './Image';

/**
 * Quality Assurance Process Visualization Component
 * Premium presentation of quality control and testing procedures
 * 
 * Features:
 * - Process step visualization
 * - Testing equipment showcase
 * - Certification display
 * - Bilingual support (English + Persian)
 * - RTL support for Persian
 * - Scroll-triggered animations
 */

const QualityAssurance = ({
  processSteps = [],
  testingEquipment = [],
  certifications = [],
  title,
  subtitle,
  lang = 'en',
  className = '',
}) => {
  const sectionRef = useRef(null);
  const viewport = { once: true, amount: 0.12 };

  // Default process steps
  const defaultProcess = processSteps.length > 0 ? processSteps : [
    {
      id: 1,
      step: '01',
      title: {
        en: 'Raw Material Inspection',
        fa: 'بازرسی مواد اولیه',
      },
      description: {
        en: 'Comprehensive testing of copper, aluminum, and insulation materials before production.',
        fa: 'تست جامع مس، آلومینیوم و مواد عایق قبل از تولید.',
      },
      icon: 'inspection',
    },
    {
      id: 2,
      step: '02',
      title: {
        en: 'In-Process Quality Control',
        fa: 'کنترل کیفیت در فرآیند',
      },
      description: {
        en: 'Real-time monitoring during extrusion, stranding, and armoring processes.',
        fa: 'نظارت بلادرنگ در طول فرآیندهای اکسترود، رشته‌سازی و زره‌سازی.',
      },
      icon: 'monitoring',
    },
    {
      id: 3,
      step: '03',
      title: {
        en: 'Electrical Testing',
        fa: 'تست الکتریکی',
      },
      description: {
        en: 'High-voltage testing, insulation resistance, and conductor resistance measurements.',
        fa: 'تست ولتاژ بالا، مقاومت عایق و اندازه‌گیری مقاومت هادی.',
      },
      icon: 'electrical',
    },
    {
      id: 4,
      step: '04',
      title: {
        en: 'Mechanical Testing',
        fa: 'تست مکانیکی',
      },
      description: {
        en: 'Tensile strength, elongation, and flexibility testing for durability verification.',
        fa: 'تست کشش، کشیدگی و انعطاف‌پذیری برای تأیید دوام.',
      },
      icon: 'mechanical',
    },
    {
      id: 5,
      step: '05',
      title: {
        en: 'Fire Resistance Testing',
        fa: 'تست مقاومت در برابر حریق',
      },
      description: {
        en: 'Flame propagation and fire resistance testing per IEC 60332 standards.',
        fa: 'تست گسترش شعله و مقاومت در برابر حریق طبق استانداردهای IEC 60332.',
      },
      icon: 'fire',
    },
    {
      id: 6,
      step: '06',
      title: {
        en: 'Final Inspection & Certification',
        fa: 'بازرسی نهایی و گواهی‌نامه',
      },
      description: {
        en: 'Comprehensive final inspection and certification before shipment.',
        fa: 'بازرسی جامع نهایی و گواهی‌نامه قبل از حمل.',
      },
      icon: 'certification',
    },
  ];

  // Default testing equipment
  const defaultEquipment = testingEquipment.length > 0 ? testingEquipment : [
    {
      id: 1,
      name: {
        en: 'High Voltage Test Set',
        fa: 'کیت تست ولتاژ بالا',
      },
      description: {
        en: 'Up to 30kV testing capability for insulation verification.',
        fa: 'قابلیت تست تا ۳۰ کیلوولت برای تأیید عایق.',
      },
      image: null,
    },
    {
      id: 2,
      name: {
        en: 'Conductor Resistance Bridge',
        fa: 'پل مقاومت هادی',
      },
      description: {
        en: 'Precision measurement of conductor resistance per IEC 60228.',
        fa: 'اندازه‌گیری دقیق مقاومت هادی طبق IEC 60228.',
      },
      image: null,
    },
    {
      id: 3,
      name: {
        en: 'Tensile Testing Machine',
        fa: 'ماشین تست کشش',
      },
      description: {
        en: 'Mechanical property testing for conductor and insulation materials.',
        fa: 'تست خواص مکانیکی برای مواد هادی و عایق.',
      },
      image: null,
    },
    {
      id: 4,
      name: {
        en: 'Fire Test Chamber',
        fa: 'اتاقک تست حریق',
      },
      description: {
        en: 'IEC 60332 compliant flame propagation testing.',
        fa: 'تست گسترش شعله مطابق IEC 60332.',
      },
      image: null,
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
      inspection: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      monitoring: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      electrical: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      mechanical: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      fire: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      certification: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    };
    return icons[iconName] || icons.inspection;
  };

  const isRTL = lang === 'fa';

  return (
    <section
      ref={sectionRef}
      className={`quality-assurance py-10 sm:py-14 md:py-20 bg-gray-50 ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title || (lang === 'en' ? 'Quality Assurance Process' : 'فرآیند تضمین کیفیت')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle || (lang === 'en'
              ? 'Every cable undergoes rigorous quality control testing to ensure compliance with international standards and customer specifications.'
              : 'هر کابل تست کنترل کیفیت دقیق را برای تضمین انطباق با استانداردهای بین‌المللی و مشخصات مشتری تحمل می‌کند.'
            )}
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defaultProcess.map((step) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-white font-bold">{step.step}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">{step.title[lang]}</h4>
                    <p className="text-sm text-gray-600">{step.description[lang]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testing Equipment */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {lang === 'en' ? 'Testing Equipment' : 'تجهیزات تست'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {defaultEquipment.map((equipment) => (
              <motion.div
                key={equipment.id}
                variants={itemVariants}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl shadow-md mb-4">
                  {equipment.image ? (
                    <Image
                      src={equipment.image}
                      alt={equipment.name[lang]}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="w-full h-48 bg-gray-100 flex items-center justify-center border border-gray-200 rounded-xl"
                      aria-hidden="true"
                    >
                      <Microscope className="w-14 h-14 text-gray-300" strokeWidth={1.25} />
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 mb-2">{equipment.name[lang]}</h4>
                  <p className="text-sm text-gray-600">{equipment.description[lang]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Standards Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {lang === 'en' ? 'Standards Compliance' : 'انطباق استانداردها'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lang === 'fa' ? (
                <div className="text-center p-6 bg-gray-50 rounded-lg col-span-full">
                  <div className="text-xl font-bold text-[#D4AF37] mb-2">استاندارد ملی ایران</div>
                  <div className="text-sm text-gray-600">مؤسسه استاندارد و تحقیقات صنعتی ایران</div>
                </div>
              ) : (
                <>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-[#D4AF37] mb-2">ISO</div>
                    <div className="text-sm text-gray-600">9001:2015</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-[#D4AF37] mb-2">CE</div>
                    <div className="text-sm text-gray-600">European Conformity</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityAssurance;
