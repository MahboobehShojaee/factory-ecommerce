import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Image from './Image';
import { images } from '../../assets/images/registry.js';
import { getLocalizedNavPath } from '../../content/navigation/data.js';

/**
 * Factory Capabilities Showcase Component
 * Premium presentation of manufacturing capabilities
 * 
 * Features:
 * - Capability cards with icons
 * - Image integration
 * - Bilingual support (English + Persian)
 * - RTL support for Persian
 * - Scroll-triggered animations
 * - Interactive hover effects
 */

const FactoryCapabilities = ({
  capabilities = [],
  title,
  subtitle,
  lang = 'en',
  className = '',
}) => {
  const sectionRef = useRef(null);
  const viewport = { once: true, amount: 0.12 };

  // Default capabilities
  const defaultCapabilities = capabilities.length > 0 ? capabilities : [
    {
      id: 1,
      icon: 'production',
      title: {
        en: 'Advanced Production Lines',
        fa: 'خطوط تولید پیشرفته',
      },
      description: {
        en: 'State-of-the-art extrusion and manufacturing equipment for precision cable production.',
        fa: 'تجهیزات اکسترود و تولید پیشرفته برای تولید دقیق کابل.',
      },
      image: images.process.step1,
      specs: {
        en: ['200+ Production Lines', 'Automated Processes', 'Real-time Monitoring'],
        fa: ['۲۰۰+ خط تولید', 'فرآیندهای خودکار', 'نظارت بلادرنگ'],
      },
    },
    {
      id: 2,
      icon: 'quality',
      title: {
        en: 'Quality Control Laboratory',
        fa: 'آزمایشگاه کنترل کیفیت',
      },
      description: {
        en: 'Comprehensive testing facilities ensuring compliance with international standards.',
        fa: 'تسهیلات تست جامع تضمین انطباق با استانداردهای بین‌المللی.',
      },
      image: images.process.step5,
      specs: {
        en: ['CE Standard', 'ISO 9001 Certified', 'Advanced Testing Equipment'],
        fa: ['استاندارد ملی ایران', 'تجهیزات تست پیشرفته'],
      },
    },
    {
      id: 3,
      icon: 'warehouse',
      title: {
        en: 'Modern Warehouse',
        fa: 'انبار مدرن',
      },
      description: {
        en: 'Climate-controlled storage ensuring optimal cable preservation and quick order fulfillment.',
        fa: 'ذخیره‌سازی کنترل شده اقلیمی تضمین حفظ بهینه کابل و تحویل سریع سفارش.',
      },
      image: images.process.step6,
      specs: {
        en: ['15,000m² Storage', 'Climate Control', 'Automated Inventory'],
        fa: ['۱۵،۰۰۰ متر مربع ذخیره', 'کنترل اقلیمی', 'موجودی خودکار'],
      },
    },
    {
      id: 4,
      icon: 'logistics',
      title: {
        en: 'Export Logistics',
        fa: 'لجستیک صادرات',
      },
      description: {
        en: 'Global shipping network delivering products to 50+ countries worldwide.',
        fa: 'شبکه حمل و نقل جهانی تحویل محصولات به ۵۰+ کشور در سراسر جهان.',
      },
      image: images.factory,
      specs: {
        en: ['50+ Countries', 'Sea & Air Freight', 'Customs Clearance'],
        fa: ['۵۰+ کشور', 'حمل دریایی و هوایی', 'گمرک'],
      },
    },
    {
      id: 5,
      icon: 'engineering',
      title: {
        en: 'Engineering Excellence',
        fa: 'برتری مهندسی',
      },
      description: {
        en: 'Expert engineering team providing technical support and custom solutions.',
        fa: 'تیم مهندسی کارشناس ارائه پشتیبانی فنی و راه‌حل‌های سفارشی.',
      },
      image: images.process.step3,
      specs: {
        en: ['Expert Team', 'Custom Solutions', 'Technical Support'],
        fa: ['تیم کارشناس', 'راه‌حل‌های سفارشی', 'پشتیبانی فنی'],
      },
    },
    {
      id: 6,
      icon: 'innovation',
      title: {
        en: 'R&D Innovation',
        fa: 'نوآوری تحقیق و توسعه',
      },
      description: {
        en: 'Continuous research and development for advanced cable technologies.',
        fa: 'تحقیق و توسعه مداوم برای فناوری‌های پیشرفته کابل.',
      },
      image: images.process.step4,
      specs: {
        en: ['Advanced Materials', 'Process Innovation', 'Future Technologies'],
        fa: ['مواد پیشرفته', 'نوآوری فرآیند', 'فناوری‌های آینده'],
      },
    },
  ];

  const content = defaultCapabilities;

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
      production: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      quality: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      warehouse: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      logistics: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      engineering: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      innovation: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    };
    return icons[iconName] || icons.production;
  };

  const isRTL = lang === 'fa';

  if (lang === 'fa') {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className={`factory-capabilities py-10 sm:py-14 md:py-20 bg-gray-50 ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title || (lang === 'en' ? 'Factory Capabilities' : 'قابلیت‌های کارخانه')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle || (lang === 'en'
              ? 'Our state-of-the-art manufacturing facility enables us to deliver premium quality cables with precision and efficiency.'
              : 'تسهیلات تولید پیشرفته ما امکان تحویل کابل‌های باکیفیت برتر با دقت و کارایی را فراهم می‌کند.'
            )}
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {content.map((capability) => (
            <motion.div
              key={capability.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={capability.image}
                  alt={capability.title[lang]}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
                  <div className="text-[#D4AF37]">
                    {getIcon(capability.icon)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {capability.title[lang]}
                </h3>
                <p className="text-gray-600 mb-4">
                  {capability.description[lang]}
                </p>

                {/* Specs */}
                <ul className="space-y-2">
                  {capability.specs[lang].map((spec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg
                        className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
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
              {lang === 'en' ? 'Request Factory Tour' : 'درخواست بازدید کارخانه'}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FactoryCapabilities;
