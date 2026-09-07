/**
 * IEC Standards Overview - Technical Reference Article
 * Comprehensive guide to IEC standards for cables
 * 
 * This reference article leverages:
 * - Article template system
 * - Typography components (CalloutBox)
 * - Internal linking to related articles
 * - Bilingual support (English + Persian)
 */

import { createArticle, clusterArticleTemplate } from './articleTemplate.js';
import { generateAllMetadata } from './metadataTemplate.js';

export const iecStandardsArticle = createArticle({
  slug: 'iec-standards-overview',
  contentType: 'cluster',
  topicalCluster: 'cable-types',
  category: 'technical',
  tags: ['iec-standards', 'cable-standards', 'compliance', 'quality-assurance', 'technical-reference'],
  
  primaryKeyword: 'IEC cable standards',
  secondaryKeywords: [
    'IEC 60502-1',
    'IEC 60228',
    'IEC 60332',
    'cable compliance',
    'international standards',
  ],
  
  metaDescription: {
    en: 'Comprehensive overview of IEC standards for power cables. Learn about IEC 60502-1, IEC 60228, IEC 60332, and other key standards for cable manufacturing and compliance.',
    fa: 'بررسی جامع استانداردهای IEC برای کابل‌های برق. درباره IEC 60502-1، IEC 60228، IEC 60332 و سایر استانداردهای کلیدی برای تولید و انطباق کابل اطلاعات کسب کنید.',
  },
  
  title: {
    en: 'IEC Standards Overview: Complete Guide to Cable Standards',
    fa: 'بررسی استانداردهای IEC: راهنمای جامع استانداردهای کابل',
  },
  
  excerpt: {
    en: 'International Electrotechnical Commission (IEC) standards ensure quality, safety, and compatibility of electrical cables worldwide. This guide covers key IEC standards for power cables, conductors, and fire resistance.',
    fa: 'استانداردهای کمیسیون الکتروتکنیک بین‌المللی (IEC) کیفیت، ایمنی و سازگاری کابل‌های الکتریکی در سراسر جهان را تضمین می‌کنند. این راهنما استانداردهای کلیدی IEC برای کابل‌های برق، هادی‌ها و مقاومت در برابر حریق را پوشش می‌دهد.',
  },
  
  content: {
    en: `
      <h2>Introduction to IEC Standards</h2>
      <p>The International Electrotechnical Commission (IEC) develops and publishes international standards for electrical technologies. IEC standards for cables ensure quality, safety, and interoperability across different countries and manufacturers. Compliance with IEC standards is essential for cable manufacturers and users.</p>
      
      <CalloutBox type="important" title="Why IEC Standards Matter">
        <p>IEC standards provide a common language for technical specifications, ensuring that cables from different manufacturers meet consistent quality and performance requirements. This facilitates international trade and ensures safety.</p>
      </CalloutBox>
      
      <h2>Key IEC Cable Standards</h2>
      
      <h3>IEC 60502-1: Power Cables with Extruded Insulation</h3>
      <p>IEC 60502-1 is the primary standard for power cables with extruded insulation. It covers:</p>
      <ul>
        <li>Cable construction requirements</li>
        <li>Insulation materials (PVC, XLPE, EPR)</li>
        <li>Voltage ratings (up to 30kV)</li>
        <li>Conductor specifications</li>
        <li>Testing requirements</li>
        <li>Marking and identification</li>
      </ul>
      
      <p>This standard applies to both copper and aluminum conductors and is widely used for low and medium voltage power cables.</p>
      
      <h3>IEC 60228: Conductors for Insulated Cables</h3>
      <p>IEC 60228 specifies conductor classes and sizes for insulated cables:</p>
      
      <ul>
        <li><strong>Class 1:</strong> Solid conductors (rigid)</li>
        <li><strong>Class 2:</strong> Stranded conductors (flexible)</li>
        <li><strong>Class 5:</strong> Flexible stranded conductors</li>
        <li><strong>Class 6:</strong> Extra flexible stranded conductors</li>
      </ul>
      
      <p>The standard defines nominal cross-sectional areas from 0.5mm² to 2500mm² and specifies resistance requirements for each class and size.</p>
      
      <h3>IEC 60332: Fire Resistance Testing</h3>
      <p>IEC 60332 series covers fire testing of cables:</p>
      
      <ul>
        <li><strong>IEC 60332-1:</strong> Vertical flame test for single cables</li>
        <li><strong>IEC 60332-3:</strong> Vertical flame test for bunched cables</li>
        <li><strong>IEC 60332-3-21:</strong> Category A (large bunched cables)</li>
        <li><strong>IEC 60332-3-22:</strong> Category B (small bunched cables)</li>
        <li><strong>IEC 60332-3-23:</strong> Category C (medium bunched cables)</li>
      </ul>
      
      <p>These tests evaluate flame spread and ensure cables meet fire safety requirements.</p>
      
      <h3>IEC 60702: Fire-Resistant Cables</h3>
      <p>IEC 60702 specifies requirements for fire-resistant cables that maintain circuit integrity during fire. These cables are critical for emergency systems, fire alarms, and safety equipment.</p>
      
      <h3>IEC 60287: Current Rating Calculations</h3>
      <p>IEC 60287 provides methods for calculating current ratings of cables, considering:</p>
      <ul>
        <li>Conductor material and size</li>
        <li>Insulation type</li>
        <li>Installation method</li>
        <li>Ambient temperature</li>
        <li>Grouping effects</li>
        <li>Thermal resistance</li>
      </ul>
      
      <h3>IEC 60502-2: Test Methods</h3>
      <p>IEC 60502-2 specifies test methods for power cables, including:</p>
      <ul>
        <li>Electrical tests (resistance, voltage withstand)</li>
        <li>Mechanical tests (tensile strength, elongation)</li>
        <li>Thermal tests (heat aging, shrinkage)</li>
        <li>Fire tests (flame propagation)</li>
      </ul>
      
      <h2>Other Relevant IEC Standards</h2>
      
      <h3>IEC 60092: Electrical Installations in Ships</h3>
      <p>IEC 60092 series covers cables for marine applications, including shipboard power and control cables with special requirements for fire resistance and mechanical protection.</p>
      
      <h3>IEC 60384: Coaxial Cables</h3>
      <p>IEC 60384 series specifies requirements for coaxial cables used in radio frequency and television applications.</p>
      
      <h3>IEC 61156: LAN Cables</h3>
      <p>IEC 61156 covers cables for local area networks, including twisted pair and fiber optic cables for data transmission.</p>
      
      <h2>Compliance and Certification</h2>
      
      <h3>CE Marking</h3>
      <p>Products complying with relevant IEC standards may carry the CE mark, indicating conformity with European Union directives for safety, health, and environmental protection.</p>
      
      <h3>National Variations</h3>
      <p>While IEC standards are international, many countries have national variations or additional requirements. Always verify compliance with local electrical codes and regulations.</p>
      
      <h2>Setareh Kerman IEC Compliance</h2>
      
      <p>Setareh Kerman manufactures cables in compliance with IEC standards, ensuring:</p>
      
      <ul>
        <li>Consistent quality across all products</li>
        <li>International compatibility</li>
        <li>Safety and reliability</li>
        <li>Technical documentation compliance</li>
        <li>Testing and verification procedures</li>
      </ul>
      
      <CalloutBox type="tip" title="Quality Assurance">
        <p>Our quality management system is certified to ISO 9001, ensuring consistent compliance with IEC standards and customer requirements.</p>
      </CalloutBox>
      
      <h2>Benefits of IEC Compliance</h2>
      
      <ul>
        <li><strong>Quality Assurance:</strong> Consistent product quality and performance</li>
        <li><strong>Safety:</strong> Enhanced safety through standardized testing</li>
        <li><strong>Interoperability:</strong> Compatibility with equipment from different manufacturers</li>
        <li><strong>International Trade:</strong> Facilitates export and import of cables</li>
        <li><strong>Technical Documentation:</strong> Clear specifications and requirements</li>
        <li><strong>Regulatory Compliance:</strong> Meets many national electrical code requirements</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>IEC standards provide the foundation for quality, safety, and interoperability in the cable industry. Understanding these standards is essential for cable selection, installation, and compliance. Setareh Kerman's commitment to IEC standards ensures our customers receive products that meet international quality and safety requirements.</p>
      
      <p>For specific technical questions about IEC standards or our compliance documentation, contact our engineering team.</p>
    `,
    
    fa: `
      <h2>مقدمه‌ای بر استانداردهای IEC</h2>
      <p>کمیسیون الکتروتکنیک بین‌المللی (IEC) استانداردهای بین‌المللی را برای فناوری‌های الکتریکی توسعه و منتشر می‌کند. استانداردهای IEC برای کابل‌ها کیفیت، ایمنی و قابلیت همکاری در کشورها و سازندگان مختلف را تضمین می‌کنند. انطباق با استانداردهای IEC برای سازندگان و کاربران کابل ضروری است.</p>
      
      <calloutBox type="important" title="چرا استانداردهای IEC مهم هستند">
        <p>استانداردهای IEC زبان مشترکی برای مشخصات فنی ارائه می‌دهند و تضمین می‌کنند که کابل‌های از سازندگان مختلف الزامات کیفیت و عملکرد ثابت را برآورده می‌کنند. این تجارت بین‌المللی را تسهیل می‌کند و ایمنی را تضمین می‌کند.</p>
      </calloutBox>
      
      <h2>استانداردهای کلیدی کابل IEC</h2>
      
      <h3>IEC 60502-1: کابل‌های برق با عایق اکسترود شده</h3>
      <p>IEC 60502-1 استاندارد اصلی برای کابل‌های برق با عایق اکسترود شده است. این شامل موارد زیر است:</p>
      <ul>
        <li>الزامات ساختار کابل</li>
        <li>مواد عایق (PVC، XLPE، EPR)</li>
        <li>رتبه‌های ولتاژ (تا ۳۰ کیلوولت)</li>
        <li>مشخصات هادی</li>
        <li>الزامات تست</li>
        <li>علامت‌گذاری و شناسایی</li>
      </ul>
      
      <p>این استاندارد برای هادی‌های مس و آلومینیوم اعمال می‌شود و به طور گسترده برای کابل‌های برق ولتاژ پایین و متوسط استفاده می‌شود.</p>
      
      <h3>IEC 60228: هادی‌ها برای کابل‌های عایق‌شده</h3>
      <p>IEC 60228 کلاس‌ها و اندازه‌های هادی را برای کابل‌های عایق‌شده مشخص می‌کند:</p>
      
      <ul>
        <li><strong>کلاس ۱:</strong> هادی‌های جامد (سخت)</li>
        <li><strong>کلاس ۲:</strong> هادی‌های رشته‌ای (منعطف)</li>
        <li><strong>کلاس ۵:</strong> هادی‌های رشته‌ای منعطف</li>
        <li><strong>کلاس ۶:</strong> هادی‌های رشته‌ای بسیار منعطف</li>
      </ul>
      
      <p>این استاندارد سطوح مقطع نامی از ۰.۵ میلی‌متر مربع تا ۲۵۰۰ میلی‌متر مربع را تعریف می‌کند و الزامات مقاومت را برای هر کلاس و اندازه مشخص می‌کند.</p>
      
      <h3>IEC 60332: تست مقاومت در برابر حریق</h3>
      <p>سری IEC 60332 تست حریق کابل‌ها را پوشش می‌دهد:</p>
      
      <ul>
        <li><strong>IEC 60332-1:</strong> تست شعله عمودی برای کابل‌های تکی</li>
        <li><strong>IEC 60332-3:</strong> تست شعله عمودی برای کابل‌های گروه‌بندی شده</li>
        <li><strong>IEC 60332-3-21:</strong> دسته A (کابل‌های گروه‌بندی شده بزرگ)</li>
        <li><strong>IEC 60332-3-22:</strong> دسته B (کابل‌های گروه‌بندی شده کوچک)</li>
        <li><strong>IEC 60332-3-23:</strong> دسته C (کابل‌های گروه‌بندی شده متوسط)</li>
      </ul>
      
      <p>این تست‌ها گسترش شعله را ارزیابی می‌کنند و تضمین می‌کنند که کابل‌ها الزامات ایمنی حریق را برآورده می‌کنند.</p>
      
      <h3>IEC 60702: کابل‌های مقاوم در برابر حریق</h3>
      <p>IEC 60702 الزامات کابل‌های مقاوم در برابر حریق را مشخص می‌کند که یکپارچگی مدار را در طول حریق حفظ می‌کنند. این کابل‌ها برای سیستم‌های اضطراری، آتش‌نشانی و تجهیزات ایمنی حیاتی هستند.</p>
      
      <h3>IEC 60287: محاسبات رتبه جریان</h3>
      <p>IEC 60287 روش‌هایی برای محاسبه رتبه‌های جریان کابل‌ها ارائه می‌دهد، موارد زیر را در نظر می‌گیرد:</p>
      <ul>
        <li>ماده و اندازه هادی</li>
        <li>نوع عایق</li>
        <li>روش نصب</li>
        <li>دمای محیط</li>
        <li>اثرات گروه‌بندی</li>
        <li>مقاومت حرارتی</li>
      </ul>
      
      <h3>IEC 60502-2: روش‌های تست</h3>
      <p>IEC 60502-2 روش‌های تست برای کابل‌های برق را مشخص می‌کند، شامل:</p>
      <ul>
        <li>تست‌های الکتریکی (مقاومت، تحمل ولتاژ)</li>
        <li>تست‌های مکانیکی (قدرت کششی، کشیدگی)</li>
        <li>تست‌های حرارتی (پیری حرارتی، انقباض)</li>
        <li>تست‌های حریق (گسترش شعله)</li>
      </ul>
      
      <h2>سایر استانداردهای مرتبط IEC</h2>
      
      <h3>IEC 60092: نصب‌های الکتریکی در کشتی‌ها</h3>
      <p>سری IEC 60092 کابل‌ها را برای کاربردهای دریایی پوشش می‌دهد، شامل کابل‌های برق و کنترلی کشتی با الزامات خاص برای مقاومت در برابر حریق و محافظت مکانیکی.</p>
      
      <h3>IEC 60384: کابل‌های کواکسیال</h3>
      <p>سری IEC 60384 الزامات کابل‌های کواکسیال استفاده شده در کاربردهای فرکانس رادیویی و تلویزیونی را مشخص می‌کند.</p>
      
      <h3>IEC 61156: کابل‌های LAN</h3>
      <p>IEC 61156 کابل‌ها را برای شبکه‌های محلی پوشش می‌دهد، شامل کابل‌های جفت به‌هم پیچیده و فیبر نوری برای انتقال داده.</p>
      
      <h2>انطباق و گواهی‌نامه</h2>
      
      <h3>علامت CE</h3>
      <p>محصولات مطابق با استانداردهای مرتبط IEC ممکن است علامت CE را داشته باشند که نشان‌دهنده انطباق با دستورالعمل‌های اتحادیه اروپا برای ایمنی، بهداشت و محافظت محیطی است.</p>
      
      <h3>تغییرات ملی</h3>
      <p>در حالی که استانداردهای IEC بین‌المللی هستند، بسیاری از کشورها تغییرات ملی یا الزامات اضافی دارند. همیشه انطباق با کدها و مقررات الکتریکی محلی را تأیید کنید.</p>
      
      <h2>انطباق IEC ستاره کرمان</h2>
      
      <p>ستاره کرمان کابل‌ها را مطابق با استانداردهای IEC تولید می‌کند و تضمین می‌کند:</p>
      
      <ul>
        <li>کیفیت ثابت در تمام محصولات</li>
        <li>سازگاری بین‌المللی</li>
        <li>ایمنی و قابلیت اطمینان</li>
        <li>انطباق مستندات فنی</li>
        <li>رویه‌های تست و تأیید</li>
      </ul>
      
      <calloutBox type="tip" title="تضمین کیفیت">
        <p>سیستم مدیریت کیفیت ما به ISO 9001 گواهی‌نامه شده است و تضمین می‌کند که انطباق ثابت با استانداردهای IEC و الزامات مشتری.</p>
      </calloutBox>
      
      <h2>مزایای انطباق IEC</h2>
      
      <ul>
        <li><strong>تضمین کیفیت:</strong> کیفیت و عملکرد محصول ثابت</li>
        <li><strong>ایمنی:</strong> ایمنی افزایش‌یافته از طریق تست استاندارد</li>
        <li><strong>قابلیت همکاری:</strong> سازگاری با تجهیزات از سازندگان مختلف</li>
        <li><strong>تجارت بین‌المللی:</strong> صادرات و واردات کابل را تسهیل می‌کند</li>
        <li><strong>مستندات فنی:</strong> مشخصات و الزامات روشن</li>
        <li><strong>انطباق قانونی:</strong> برآورده بسیاری از الزامات کد الکتریکی ملی</li>
      </ul>
      
      <h2>نتیجه‌گیری</h2>
      <p>استانداردهای IEC پایه‌ای برای کیفیت، ایمنی و قابلیت همکاری در صنعت کابل فراهم می‌کنند. درک این استانداردها برای انتخاب کابل، نصب و انطباق ضروری است. تعهد ستاره کرمان به استانداردهای IEC تضمین می‌کند که مشتریان ما محصولاتی را دریافت می‌کنند که الزامات کیفیت و ایمنی بین‌المللی را برآورده می‌کنند.</p>
      
      <p>برای سوالات فنی خاص در مورد استانداردهای IEC یا مستندات انطباق ما، با تیم مهندسی ما تماس بگیرید.</p>
    `,
  },
  
  author: 'Setareh Kerman Engineering Team',
  publishDate: '2024-01-27',
  featuredImage: '/og-image.jpg',
  
  linksToPillar: false,
  internalLinks: [
    'low-voltage-cables-guide',
    'cable-sizing-basics',
    'ampacity-chart-reference',
  ],
  
  faqs: [
    {
      question: {
        en: 'What is IEC 60502-1?',
        fa: 'IEC 60502-1 چیست؟',
      },
      answer: {
        en: 'IEC 60502-1 is the international standard for power cables with extruded insulation. It covers cable construction, insulation materials, voltage ratings up to 30kV, and testing requirements for PVC, XLPE, and EPR insulated cables.',
        fa: 'IEC 60502-1 استاندارد بین‌المللی برای کابل‌های برق با عایق اکسترود شده است. این ساختار کابل، مواد عایق، رتبه‌های ولتاژ تا ۳۰ کیلوولت و الزامات تست برای کابل‌های عایق PVC، XLPE و EPR را پوشش می‌دهد.',
      },
    },
    {
      question: {
        en: 'Why are IEC standards important?',
        fa: 'چرا استانداردهای IEC مهم هستند؟',
      },
      answer: {
        en: 'IEC standards ensure quality, safety, and interoperability of cables across different manufacturers and countries. They provide a common technical language, facilitate international trade, and ensure products meet consistent performance requirements.',
        fa: 'استانداردهای IEC کیفیت، ایمنی و قابلیت همکاری کابل‌ها را در سراسر سازندگان و کشورهای مختلف تضمین می‌کنند. آنها زبان فنی مشترک ارائه می‌دهند، تجارت بین‌المللی را تسهیل می‌کنند و تضمین می‌کنند که محصولات الزامات عملکرد ثابت را برآورده می‌کنند.',
      },
    },
  ],
  
  ctas: [
    {
      type: 'consultation',
      location: 'after-introduction',
      text: {
        en: 'Need Help with IEC Standards?',
        fa: 'نیاز به کمک در استانداردهای IEC دارید؟',
      },
    },
    {
      type: 'catalog',
      location: 'after-content',
      text: {
        en: 'Download Compliance Documentation',
        fa: 'مستندات انطباق را دانلود کنید',
      },
    },
  ],
});

// Export metadata for SEO
export const iecStandardsMetadata = {
  en: generateAllMetadata(iecStandardsArticle, 'en'),
  fa: generateAllMetadata(iecStandardsArticle, 'fa'),
};
