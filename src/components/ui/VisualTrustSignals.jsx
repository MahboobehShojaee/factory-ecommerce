import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Visual Trust Signals Component
 * Premium presentation of industrial credibility through metrics, certifications, and statistics
 * 
 * Features:
 * - Animated counters for metrics
 * - Certification badges
 * - Factory statistics
 * - Quality indicators
 * - Bilingual support (English + Persian)
 * - RTL support for Persian
 * - Scroll-triggered animations
 */

const VisualTrustSignals = ({
  metrics = [],
  statistics = [],
  title,
  subtitle,
  lang = 'en',
  className = '',
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.12 });
  const viewport = { once: true, amount: 0.12 };

  // Default metrics
  const defaultMetrics = metrics.length > 0 ? metrics : [
    {
      id: 1,
      value: 20,
      suffix: '+',
      label: {
        en: 'Years of Experience',
        fa: 'سال تجربه',
      },
      icon: 'calendar',
    },
    {
      id: 2,
      value: 50000,
      suffix: '+',
      label: {
        en: 'Tons Produced Annually',
        fa: 'تن تولید سالانه',
      },
      icon: 'production',
    },
    {
      id: 3,
      value: 10,
      suffix: '+',
      label: {
        en: 'Countries Exported To',
        fa: 'کشور صادرات',
      },
      icon: 'globe',
    },
    {
      id: 4,
      value: 99,
      suffix: '%',
      label: {
        en: 'Customer Satisfaction',
        fa: 'رضایت مشتری',
      },
      icon: 'satisfaction',
    },
  ];

  // Default statistics
  const defaultStatistics = statistics.length > 0 ? statistics : [
    {
      id: 1,
      value: '15000',
      unit: 'm²',
      label: {
        en: 'Factory Area',
        fa: 'مساحت کارخانه',
      },
    },
    {
      id: 2,
      value: '200',
      unit: '+',
      label: {
        en: 'Production Lines',
        fa: 'خطوط تولید',
      },
    },
    {
      id: 3,
      value: '500',
      unit: '+',
      label: {
        en: 'Skilled Workers',
        fa: 'کارگران ماهر',
      },
    },
    {
      id: 4,
      value: '24',
      unit: '/7',
      label: {
        en: 'Production Hours',
        fa: 'ساعات تولید',
      },
    },
  ];

  const AnimatedCounter = ({ value, suffix = '', isVisible }) => {
    const [count, setCount] = useState(0);
    const targetValue = typeof value === 'number' ? value : parseInt(value.replace(/,/g, '')) || 0;
    
    useEffect(() => {
      if (!isVisible) return;
      
      const duration = 2000;
      const steps = 60;
      const increment = targetValue / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }, [isVisible, targetValue]);

    return (
      <span>
        {typeof value === 'number' ? count.toLocaleString() : value}
        {suffix}
      </span>
    );
  };

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

  const isRTL = lang === 'fa';

  return (
    <section
      ref={sectionRef}
      className={`visual-trust-signals py-10 sm:py-14 md:py-20 bg-white ${className}`}
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
            {title || (lang === 'en' ? 'Trusted Excellence' : 'برتری قابل اعتماد')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle || (lang === 'en'
              ? 'Our commitment to quality, innovation, and customer satisfaction is reflected in every metric and certification we hold.'
              : 'تعهد ما به کیفیت، نوآوری و رضایت مشتری در هر متریک و گواهی‌نامه‌ای که داریم منعکس می‌شود.'
            )}
          </p>
        </motion.div>

        {/* Metrics Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-10 sm:mb-14 md:mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {defaultMetrics.map((metric) => (
              <motion.div
                key={metric.id}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 sm:p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#D4AF37] mb-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} isVisible={isInView} />
                </div>
                <div className="text-gray-700 font-medium">
                  {metric.label[lang]}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {lang !== 'fa' && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {lang === 'en' ? 'Factory Capabilities' : 'قابلیت‌های کارخانه'}
          </h3>
          <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {defaultStatistics.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={itemVariants}
                  className="text-center text-white"
                >
                  <div className="text-4xl font-bold mb-2">
                    {stat.value}
                    <span className="text-2xl ml-1">{stat.unit}</span>
                  </div>
                  <div className="text-white/90">
                    {stat.label[lang]}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        )}

        {/* Quality Assurance Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-8 sm:mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg border-2 border-[#D4AF37]">
            <svg
              className="w-8 h-8 text-[#D4AF37]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-lg font-medium text-gray-900">
              {lang === 'en'
                ? 'ISO 9001 • CE Certified • Quality Assured'
                : 'استاندارد ملی ایران • تضمین کیفیت'
              }
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualTrustSignals;
