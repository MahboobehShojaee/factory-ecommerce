import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { useRTL } from '../../hooks/useRTL.js';
import { FadeInUp } from '../../animations/motionPresets.jsx';
import { Award, ShieldCheck, CheckCircle, BadgeCheck } from 'lucide-react';
import { Heading, Text } from "../../components/ui/Typography.jsx";

export default function CertificationsSection() {
  const { lang } = useLanguage();
  const { isRTL, dirClass } = useRTL();

  if (lang === 'fa') {
    return null;
  }

  const certifications = lang === 'fa'
    ? [
        {
          icon: BadgeCheck,
          title: 'استاندارد ملی ایران',
          description: 'مؤسسه استاندارد و تحقیقات صنعتی ایران',
          color: '#374151',
        },
      ]
    : [
        {
          icon: Award,
          title: 'ISO 9001 Standard',
          description: 'International Quality Management System',
          color: '#D4AF37',
        },
        {
          icon: ShieldCheck,
          title: 'CE Certification',
          description: 'Compliance with European Standards',
          color: '#374151',
        },
      ];

  return (
    <section className={`py-10 sm:py-14 md:py-24 ${dirClass}`} aria-label="Certifications and standards">
      <div className="container mx-auto px-6">
        <FadeInUp delay={0}>
          <div className="text-center mb-12">
            <Heading level={2} className={`text-3xl md:text-4xl mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {lang === 'fa' ? 'گواهینامه‌ها و استانداردها' : 'Certifications & Standards'}
            </Heading>
            <Text className={`text-gray-600 max-w-2xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
              {lang === 'fa' 
                ? 'محصولات ما مطابق با بالاترین استانداردهای بین‌المللی و ملی تولید می‌شوند' 
                : 'Our products are manufactured according to the highest international and national standards'}
            </Text>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <FadeInUp key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white border border-gray-100 p-6 rounded-[30px] shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${cert.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: cert.color }} />
                  </div>
                  <Heading level={3} className={`text-lg mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {cert.title}
                  </Heading>
                  <Text size="sm" className={`text-gray-600 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                    {cert.description}
                  </Text>
                </motion.div>
              </FadeInUp>
            );
          })}
        </div>

        {/* Trust Badge */}
        <FadeInUp delay={0.5}>
          <div className="mt-12 bg-[#374151] border border-white/10 p-8 rounded-[40px] shadow-2xl relative overflow-hidden">
            <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-40 h-40 bg-[#D4AF37]/10 rounded-full translate-x-10 -translate-y-10 blur-3xl`} />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                <Heading level={3} className={`text-xl text-white mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {lang === 'fa' ? 'تضمین کیفیت' : 'Quality Assurance'}
                </Heading>
                <Text size="sm" className={`text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {lang === 'fa' 
                    ? 'تمامی محصولات قبل از ارسال تحت تست‌های کنترل کیفیت دقیق قرار می‌گیرند' 
                    : 'All products undergo rigorous quality control testing before shipment'}
                </Text>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-bold">
                    {lang === 'fa' ? 'تست شده' : 'Tested'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-bold">
                    {lang === 'fa' ? 'تأیید شده' : 'Verified'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-bold">
                    {lang === 'fa' ? 'ضمانت شده' : 'Guaranteed'}
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
