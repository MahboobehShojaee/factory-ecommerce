import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import Image from './Image';

/**
 * Engineering Expertise Presentation Component
 * Premium presentation of engineering team and technical capabilities
 * 
 * Features:
 * - Team member profiles
 * - Expertise areas
 * - Image integration
 * - Bilingual support (English + Persian)
 * - RTL support for Persian
 * - Scroll-triggered animations
 */

const EngineeringExpertise = ({
  team = [],
  expertiseAreas = [],
  title,
  subtitle,
  lang = 'en',
  className = '',
}) => {
  const sectionRef = useRef(null);
  const viewport = { once: true, amount: 0.12 };

  // Default team members
  const defaultTeam = team.length > 0 ? team : [
    {
      id: 1,
      name: '',
      role: {
        en: 'Chief Technical Officer',
        fa: 'مدیر ارشد فنی',
      },
      expertise: {
        en: 'Cable Design, Materials Science, IEC Standards',
        fa: 'طراحی کابل، علم مواد، استانداردهای IEC',
      },
      image: null,
      experience: {
        en: '25+ years in cable manufacturing',
        fa: '۲۵+ سال در تولید کابل',
      },
    },
    {
      id: 2,
      name: '',
      role: {
        en: 'Quality Assurance Director',
        fa: 'مدیر تضمین کیفیت',
      },
      expertise: {
        en: 'Quality Control, Testing Protocols, ISO Compliance',
        fa: 'کنترل کیفیت، پروتکل‌های تست، انطباق ISO',
      },
      image: null,
      experience: {
        en: '20+ years in quality management',
        fa: '۲۰+ سال در مدیریت کیفیت',
      },
    },
    {
      id: 3,
      name: '',
      role: {
        en: 'Production Manager',
        fa: 'مدیر تولید',
      },
      expertise: {
        en: 'Process Optimization, Manufacturing Technology, Lean Production',
        fa: 'بهینه‌سازی فرآیند، فناوری تولید، تولید ناب',
      },
      image: null,
      experience: {
        en: '18+ years in industrial manufacturing',
        fa: '۱۸+ سال در تولید صنعتی',
      },
    },
    {
      id: 4,
      name: '',
      role: {
        en: 'R&D Director',
        fa: 'مدیر تحقیق و توسعه',
      },
      expertise: {
        en: 'Material Innovation, Cable Technology, Future Trends',
        fa: 'نوآوری مواد، فناوری کابل، روندهای آینده',
      },
      image: null,
      experience: {
        en: '15+ years in research and development',
        fa: '۱۵+ سال در تحقیق و توسعه',
      },
    },
  ];

  // Default expertise areas
  const defaultExpertise = expertiseAreas.length > 0 ? expertiseAreas : [
    {
      id: 1,
      title: {
        en: 'Cable Design Engineering',
        fa: 'مهندسی طراحی کابل',
      },
      description: {
        en: 'Custom cable design for specific applications and environments.',
        fa: 'طراحی کابل سفارشی برای کاربردها و محیط‌های خاص.',
      },
      icon: 'design',
    },
    {
      id: 2,
      title: {
        en: 'Materials Science',
        fa: 'علم مواد',
      },
      description: {
        en: 'Advanced insulation materials and conductor optimization.',
        fa: 'مواد عایق پیشرفته و بهینه‌سازی هادی.',
      },
      icon: 'materials',
    },
    {
      id: 3,
      title: {
        en: 'Quality Control',
        fa: 'کنترل کیفیت',
      },
      description: {
        en: 'Comprehensive testing and quality assurance protocols.',
        fa: 'تست جامع و پروتکل‌های تضمین کیفیت.',
      },
      icon: 'quality',
    },
    {
      id: 4,
      title: {
        en: 'Process Engineering',
        fa: 'مهندسی فرآیند',
      },
      description: {
        en: 'Optimized manufacturing processes for efficiency and quality.',
        fa: 'فرآیندهای تولید بهینه‌سازی شده برای کارایی و کیفیت.',
      },
      icon: 'process',
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
      design: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      materials: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      quality: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      process: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    };
    return icons[iconName] || icons.design;
  };

  const isRTL = lang === 'fa';

  return (
    <section
      ref={sectionRef}
      className={`engineering-expertise py-10 sm:py-14 md:py-20 bg-white ${className}`}
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
            {title || (lang === 'en' ? 'Engineering Excellence' : 'برتری مهندسی')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle || (lang === 'en'
              ? 'Our expert engineering team brings decades of experience and technical expertise to every project.'
              : 'تیم مهندسی کارشناس ما دهه‌ها تجربه و تخصص فنی را به هر پروژه می‌آورد.'
            )}
          </p>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {lang === 'en' ? 'Core Expertise Areas' : 'مناطق تخصص اصلی'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {defaultExpertise.map((area) => (
              <motion.div
                key={area.id}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                  <div className="text-white">
                    {getIcon(area.icon)}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{area.title[lang]}</h4>
                <p className="text-sm text-gray-600">{area.description[lang]}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {lang === 'en' ? 'Meet Our Engineering Team' : 'تیم مهندسی ما را ملاقات کنید'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {defaultTeam.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="w-full h-64 bg-gray-100 flex items-center justify-center border border-gray-200"
                      aria-hidden="true"
                    >
                      <User className="w-16 h-16 text-gray-300" strokeWidth={1.25} />
                    </div>
                  )}
                  {member.image ? (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  ) : null}
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 text-lg">{member.name}</h4>
                  <p className="text-[#D4AF37] font-medium mb-2">{member.role[lang]}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.experience[lang]}</p>
                  <p className="text-xs text-gray-500">{member.expertise[lang]}</p>
                </div>
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
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              {lang === 'en' ? 'Work with Our Experts' : 'با کارشناسان ما کار کنید'}
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              {lang === 'en'
                ? 'Our engineering team is ready to provide technical consultation and support for your specific requirements.'
                : 'تیم مهندسی ما آماده است تا مشاوره فنی و پشتیبانی برای الزامات خاص شما ارائه دهد.'
              }
            </p>
            <button className="px-8 py-4 bg-white text-[#D4AF37] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              {lang === 'en' ? 'Request Consultation' : 'درخواست مشاوره'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringExpertise;
