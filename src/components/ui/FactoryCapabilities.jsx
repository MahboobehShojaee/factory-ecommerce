import { useRef } from 'react';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import Image from './Image';

import { images } from '../../assets/images/registry.js';

import { getLocalizedNavPath } from '../../content/navigation/data.js';



const DEFAULT_CAPABILITIES = [

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

      en: ['Automated Processes', 'Real-time Monitoring'],

      fa: ['فرآیندهای خودکار', 'نظارت بلادرنگ'],

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

      fa: ['استاندارد CE', 'گواهینامه ISO 9001', 'تجهیزات تست پیشرفته'],

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



function CapabilityIcon({ iconName }) {

  const icons = {

    production: (

      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">

        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />

      </svg>

    ),

    quality: (

      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">

        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />

      </svg>

    ),

    warehouse: (

      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">

        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />

      </svg>

    ),

    logistics: (

      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">

        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />

      </svg>

    ),

    engineering: (

      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">

        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />

        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />

      </svg>

    ),

    innovation: (

      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">

        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />

      </svg>

    ),

  };

  return icons[iconName] || icons.production;

}



function IconBadge({ iconName, className = '' }) {

  return (

    <div

      className={`relative inline-flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-br from-[#FFF8E7] via-white to-[#F5E6B8]/40 text-[#B8860B] shadow-[0_8px_24px_-10px_rgba(212,175,55,0.55),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.65)] ${className}`}

    >

      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-70" aria-hidden="true" />

      <div className="relative"><CapabilityIcon iconName={iconName} /></div>

    </div>

  );

}



function SpecList({ specs, isRTL }) {

  return (

    <ul className={`space-y-2.5 ${isRTL ? 'text-right' : 'text-left'}`}>

      {specs.map((spec) => (

        <li

          key={spec}

          className={`flex items-center gap-2.5 text-sm font-medium text-[#374151] ${isRTL ? 'flex-row-reverse' : ''}`}

        >

          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#C9A227]">

            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />

            </svg>

          </span>

          <span>{spec}</span>

        </li>

      ))}

    </ul>

  );

}



const FactoryCapabilities = ({

  capabilities = [],

  title,

  subtitle,

  lang = 'en',

  className = '',

}) => {

  const sectionRef = useRef(null);

  const viewport = { once: true, amount: 0.12 };



  const content = capabilities.length > 0 ? capabilities : DEFAULT_CAPABILITIES;

  const isRTL = lang === 'fa';

  const showImages = lang !== 'fa';

  const visibleCapabilities = showImages ? content : content.slice(0, 3);



  const containerVariants = {

    hidden: { opacity: 0 },

    visible: {

      opacity: 1,

      transition: { staggerChildren: 0.1 },

    },

  };



  const itemVariants = {

    hidden: { opacity: 0, y: 28 },

    visible: {

      opacity: 1,

      y: 0,

      transition: { duration: 0.55, ease: 'easeOut' },

    },

  };



  return (

    <section

      ref={sectionRef}

      className={`factory-capabilities relative overflow-hidden py-12 sm:py-16 md:py-20 ${className}`}

      dir={isRTL ? 'rtl' : 'ltr'}

    >

      {/* Section backdrop — industrial premium wash */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F3F4F6] via-[#F8F9FA] to-white" aria-hidden="true" />

      <div

        className="pointer-events-none absolute inset-0 opacity-[0.35]"

        style={{

          backgroundImage:

            'linear-gradient(135deg, rgba(212,175,55,0.07) 0%, transparent 42%), linear-gradient(225deg, rgba(55,65,81,0.04) 0%, transparent 38%)',

        }}

        aria-hidden="true"

      />

      <div

        className="pointer-events-none absolute inset-0 opacity-[0.18]"

        style={{

          backgroundImage:

            'repeating-linear-gradient(135deg, rgba(212,175,55,0.14) 0, rgba(212,175,55,0.14) 1px, transparent 1px, transparent 28px)',

        }}

        aria-hidden="true"

      />



      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div

          initial={{ opacity: 0, y: 24 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={viewport}

          transition={{ duration: 0.5, ease: 'easeOut' }}

          className={`mb-10 sm:mb-12 md:mb-14 ${isRTL ? 'text-right sm:text-center' : 'text-center'}`}

        >

          <span className="mb-3 inline-flex items-center rounded-full border border-[#D4AF37]/35 bg-white/80 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#96792A] shadow-sm">

            {lang === 'en' ? 'Manufacturing Excellence' : 'برتری تولید صنعتی'}

          </span>

          <h2 className="mt-2 text-3xl sm:text-4xl md:text-[2.65rem] font-black text-[#1F2937] mb-4 text-balance">

            {title || (lang === 'en' ? 'Factory Capabilities' : 'قابلیت‌های کارخانه')}

          </h2>

          <div className={`mx-auto mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F2CE5C] to-[#B8860B] ${isRTL ? 'sm:mx-auto' : ''}`} />

          <p className="text-base sm:text-lg text-[#4B5563] max-w-3xl mx-auto text-balance leading-relaxed">

            {subtitle || (lang === 'en'

              ? 'Our state-of-the-art manufacturing facility enables us to deliver premium quality cables with precision and efficiency.'

              : 'تسهیلات تولید پیشرفته ما امکان تحویل کابل‌های باکیفیت برتر با دقت و کارایی را فراهم می‌کند.'

            )}

          </p>

        </motion.div>



        <motion.div

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={viewport}

          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"

        >

          {visibleCapabilities.map((capability) => (

            <motion.article

              key={capability.id}

              variants={itemVariants}

              whileHover={{ y: -6, scale: 1.012 }}

              transition={{ type: 'spring', stiffness: 320, damping: 22 }}

              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E7EB]/90 bg-white/95 shadow-[0_10px_30px_-14px_rgba(17,24,39,0.28)] backdrop-blur-sm transition-shadow duration-300 hover:border-[#D4AF37]/35 hover:shadow-[0_22px_44px_-18px_rgba(17,24,39,0.35),0_0_0_1px_rgba(212,175,55,0.12)]"

            >

              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" aria-hidden="true" />



              {showImages ? (

                <div className="relative h-48 overflow-hidden">

                  <Image

                    src={capability.image}

                    alt={capability.title[lang]}

                    width={800}

                    height={400}

                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"

                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/55 via-[#1F2937]/10 to-transparent" aria-hidden="true" />

                  <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>

                    <IconBadge iconName={capability.icon} />

                  </div>

                </div>

              ) : (

                <div className={`px-6 pt-6 sm:px-7 sm:pt-7 ${isRTL ? 'flex justify-end' : ''}`}>

                  <IconBadge iconName={capability.icon} />

                </div>

              )}



              <div className="flex flex-1 flex-col px-6 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-6">

                <h3 className={`text-xl font-bold text-[#111827] mb-2.5 ${isRTL ? 'text-right' : 'text-left'}`}>

                  {capability.title[lang]}

                </h3>

                <p className={`text-[0.9375rem] leading-relaxed text-[#6B7280] mb-5 ${isRTL ? 'text-right' : 'text-left'}`}>

                  {capability.description[lang]}

                </p>



                <div className="mt-auto border-t border-[#E5E7EB]/80 pt-4">

                  <p className={`mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#96792A] ${isRTL ? 'text-right' : 'text-left'}`}>

                    {lang === 'en' ? 'Key Highlights' : 'ویژگی‌های کلیدی'}

                  </p>

                  <div className="rounded-xl border border-[#F3F4F6] bg-gradient-to-br from-[#FAFBFC] to-[#F3F4F6]/60 px-4 py-3.5">

                    <SpecList specs={capability.specs[lang]} isRTL={isRTL} />

                  </div>

                </div>

              </div>

            </motion.article>

          ))}

        </motion.div>



        <motion.div

          initial={{ opacity: 0, y: 24 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={viewport}

          transition={{ duration: 0.5, ease: 'easeOut' }}

          className="mt-14 text-center"

        >

          <Link

            to={getLocalizedNavPath('/contact', lang)}

            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#EAC050] to-[#B8860B] px-8 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_-10px_rgba(184,134,11,0.65)] transition-all duration-300 hover:brightness-105 hover:shadow-[0_14px_28px_-8px_rgba(184,134,11,0.75)]"

          >

            {lang === 'en' ? 'Request Factory Tour' : 'درخواست بازدید کارخانه'}

          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default FactoryCapabilities;
