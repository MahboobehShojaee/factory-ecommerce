import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { useRTL } from '../../hooks/useRTL.js';
import { FadeInUp } from '../../animations/motionPresets.jsx';
import { Factory, Users, Award, TrendingUp, Globe, Shield } from 'lucide-react';
import { Heading, Text } from '../../components/ui/Typography.jsx';

export default function FactoryCredibilitySection() {
  const { lang } = useLanguage();
  const { isRTL, dirClass } = useRTL();

  if (lang === 'fa') {
    return null;
  }

  const credibilityMetrics = [
    {
      icon: Factory,
      value: '25+',
      label: lang === 'fa' ? 'سال تجربه' : 'Years Experience',
      description: lang === 'fa' ? 'تولید کابل از ۱۹۹۸' : 'Cable production since 1998',
    },
    {
      icon: Users,
      value: '500+',
      label: lang === 'fa' ? 'کارکنان متخصص' : 'Skilled Workers',
      description: lang === 'fa' ? 'تیم مهندسی و تولیدی حرفه‌ای' : 'Professional engineering and production team',
    },
    {
      icon: Globe,
      value: '30+',
      label: lang === 'fa' ? 'کشور صادرکننده' : 'Export Countries',
      description: lang === 'fa' ? 'صادرات به خاورمیانه، آسیا و اروپا' : 'Exports to Middle East, Asia, and Europe',
    },
    {
      icon: Award,
      value: '100+',
      label: lang === 'fa' ? 'پروژه موفق' : 'Successful Projects',
      description: lang === 'fa' ? 'پروژه‌های صنعتی و زیرساختی' : 'Industrial and infrastructure projects',
    },
    {
      icon: TrendingUp,
      value: '50K+',
      label: lang === 'fa' ? 'تن تولید سالانه (تن)' : 'Annual Production (Tons)',
      description: lang === 'fa' ? 'ظرفیت تولید بالای ۵۰ هزار تن' : 'Production capacity over 50K tons',
    },
    {
      icon: Shield,
      value: '99.9%',
      label: lang === 'fa' ? 'نرخ کیفیت' : 'Quality Rate',
      description: lang === 'fa' ? 'تضمین کیفیت در تمام محصولات' : 'Quality assurance across all products',
    },
  ];

  return (
    <section className={`py-10 sm:py-14 md:py-24 bg-[#F8F9FA] ${dirClass}`} aria-label="Factory credibility and achievements">
      <div className="container mx-auto px-6">
        <FadeInUp delay={0}>
          <div className="text-center mb-12">
            <Heading level={2} className={`text-3xl md:text-4xl mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {lang === 'fa' ? 'اعتبار و دستاوردهای کارخانه' : 'Factory Credibility & Achievements'}
            </Heading>
            <Text className={`text-gray-600 max-w-2xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
              {lang === 'fa' 
                ? 'با بیش از دو دهه تجربه در تولید کابل‌های صنعتی، ستاره کرمان به عنوان یکی از پیشروترین تولیدکنندگان در منطقه شناخته می‌شود' 
                : 'With over two decades of experience in industrial cable production, Setareh Kerman is recognized as one of the leading manufacturers in the region'}
            </Text>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credibilityMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <FadeInUp key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white border border-gray-100 p-6 rounded-[30px] shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#D4AF3715' }}
                    >
                      <Icon className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <div className={`text-3xl font-black text-[#374151] mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {metric.value}
                      </div>
                      <Heading level={3} className={`text-sm text-base mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {metric.label}
                      </Heading>
                      <Text size="xs" className={`text-gray-600 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                        {metric.description}
                      </Text>
                    </div>
                  </div>
                </motion.div>
              </FadeInUp>
            );
          })}
        </div>

        {/* Trust Badge */}
        <FadeInUp delay={0.7}>
          <div className="mt-12 bg-[#374151] border border-white/10 p-8 rounded-[40px] shadow-2xl relative overflow-hidden">
            <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-40 h-40 bg-[#D4AF37]/10 rounded-full translate-x-10 -translate-y-10 blur-3xl`} />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                <Heading level={3} className={`text-xl text-white mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {lang === 'fa' ? 'تولیدکننده معتمد' : 'Trusted Manufacturer'}
                </Heading>
                <Text size="sm" className={`text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {lang === 'fa' 
                    ? 'محصولات ما در پروژه‌های بزرگ صنعتی و زیرساختی در سراسر ایران و کشورهای همسایه استفاده می‌شود' 
                    : 'Our products are used in major industrial and infrastructure projects across Iran and neighboring countries'}
                </Text>
              </div>
              <div className="flex flex-wrap gap-3">
                {lang !== 'fa' && (
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-bold text-white">
                    ISO 9001
                  </span>
                </div>
                )}
                {lang !== 'fa' ? (
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-bold text-white">
                    CE
                  </span>
                </div>
                ) : (
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-bold text-white">
                    استاندارد ملی ایران
                  </span>
                </div>
                )}
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Globe className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-bold text-white">
                    {lang === 'fa' ? 'صادرات' : 'Export'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
