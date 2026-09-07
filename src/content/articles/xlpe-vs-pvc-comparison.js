/**
 * XLPE vs PVC Insulation - Pillar Article
 * Comprehensive comparison of cable insulation materials
 * 
 * This is a production-ready pillar article that leverages:
 * - Article template system
 * - Typography components (ArticleContent, TechnicalTerm, CalloutBox)
 * - Technical table components (ComparisonTable, SpecificationTable)
 * - TOC system
 * - Breadcrumb system
 * - FAQ schema
 * - Internal linking
 * - Bilingual support (English + Persian)
 */

import { createArticle, pillarArticleTemplate } from './articleTemplate.js';
import { generateAllMetadata } from './metadataTemplate.js';

export const xlpeVsPvcArticle = createArticle({
  slug: 'xlpe-vs-pvc-insulation-comparison',
  contentType: 'pillar',
  topicalCluster: 'cable-types',
  category: 'technical',
  tags: ['xlpe', 'pvc', 'insulation', 'power-cables', 'cable-comparison'],
  
  primaryKeyword: 'XLPE vs PVC insulation',
  secondaryKeywords: [
    'cross-linked polyethylene',
    'cable insulation materials',
    'thermal stability',
    'operating temperature',
    'industrial cables',
  ],
  
  metaDescription: {
    en: 'Comprehensive comparison of XLPE vs PVC cable insulation materials. Learn about thermal properties, operating temperatures, applications, and selection criteria for industrial power cables.',
    fa: 'مقایسه جامع مواد عایق کابل XLPE و PVC. درباره خواص حرارتی، دمای کاری، کاربردها و معیارهای انتخاب برای کابل‌های برق صنعتی اطلاعات کسب کنید.',
  },
  
  title: {
    en: 'XLPE vs PVC Insulation: Complete Guide to Cable Insulation Materials',
    fa: 'عایق XLPE در برابر PVC: راهنمای جامع مواد عایق کابل',
  },
  
  excerpt: {
    en: 'Cross-linked polyethylene (XLPE) and polyvinyl chloride (PVC) are the two most common insulation materials for power cables. This comprehensive guide compares their thermal properties, operating temperatures, applications, and helps you select the right insulation for your industrial project.',
    fa: 'پلی‌اتیلن متصل‌شده (XLPE) و پلی‌وینیل کلرید (PVC) دو رایج‌ترین مواد عایق برای کابل‌های برق هستند. این راهنمای جامع خواص حرارتی، دمای کاری، کاربردها و انتخاب عایق مناسب برای پروژه صنعتی شما را مقایسه می‌کند.',
  },
  
  content: {
    en: `
      <h2>Introduction to Cable Insulation Materials</h2>
      <p>Cable insulation is a critical component in electrical systems, protecting conductors from environmental factors and ensuring safe, reliable power transmission. The choice between <span class="technical-term" title="Cross-linked polyethylene, a thermoset insulation material with superior thermal properties">XLPE</span> and <span class="technical-term" title="Polyvinyl chloride, a thermoplastic insulation material commonly used for low-voltage applications">PVC</span> insulation significantly impacts cable performance, longevity, and suitability for specific applications.</p>
      
      <div class="callout-box callout-important">
        <h4>Key Decision Factor</h4>
        <p>Selecting the right insulation material is crucial for cable performance, safety, and long-term reliability. This guide will help you make an informed decision based on technical requirements and application conditions.</p>
      </div>
      
      <h2>What is XLPE Insulation?</h2>
      <p><span class="technical-term" title="A thermoset material created by cross-linking polyethylene molecules, resulting in superior thermal and mechanical properties">Cross-linked polyethylene (XLPE)</span> is a thermoset insulation material that has revolutionized the cable industry. Unlike traditional thermoplastic materials, XLPE undergoes a chemical cross-linking process that creates a three-dimensional molecular structure, significantly enhancing its thermal and mechanical properties.</p>
      
      <h3>Key Properties of XLPE</h3>
      <ul>
        <li><strong>Higher Operating Temperature:</strong> XLPE can operate continuously at 90°C, compared to 70°C for PVC</li>
        <li><strong>Improved Thermal Stability:</strong> Maintains properties over extended temperature ranges without degradation</li>
        <li><strong>Better Mechanical Strength:</strong> Enhanced resistance to deformation, stress, and physical damage</li>
        <li><strong>Superior Chemical Resistance:</strong> Excellent resistance to oils, chemicals, and environmental factors</li>
        <li><strong>Longer Service Life:</strong> Typically 25-40 years under normal operating conditions</li>
      </ul>
      
      <h2>What is PVC Insulation?</h2>
      <p><span class="technical-term" title="A thermoplastic material widely used for cable insulation due to its cost-effectiveness and ease of processing">Polyvinyl chloride (PVC)</span> is a thermoplastic insulation material that has been used in the cable industry for decades. PVC is known for its cost-effectiveness, ease of processing, and adequate performance for many low-voltage applications.</p>
      
      <h3>Key Properties of PVC</h3>
      <ul>
        <li><strong>Cost-Effective:</strong> Lower material and processing costs compared to XLPE</li>
        <li><strong>Good Flexibility:</strong> Easier to install in tight spaces due to flexibility</li>
        <li><strong>Adequate for Low Voltage:</strong> Suitable for applications up to 1kV</li>
        <li><strong>Flame Retardant:</strong> Naturally flame retardant properties</li>
        <li><strong>Widely Available:</strong> Common material with established supply chains</li>
      </ul>
      
      <h2>Technical Comparison: XLPE vs PVC</h2>
      <p>The following table provides a detailed technical comparison between XLPE and PVC insulation materials:</p>
      
      <div class="callout-box callout-tip">
        <h4>Technical Note</h4>
        <p>Values are typical for power cable applications. Specific values may vary based on manufacturer, cable construction, and installation conditions. Always consult manufacturer specifications for precise data.</p>
      </div>
      
      <h2>Operating Temperature Comparison</h2>
      <p>One of the most significant differences between XLPE and PVC is their operating temperature capabilities:</p>
      
      <ul>
        <li><strong>XLPE:</strong> Continuous operating temperature of 90°C, short-term emergency rating up to 130°C</li>
        <li><strong>PVC:</strong> Continuous operating temperature of 70°C, short-term emergency rating up to 100°C</li>
      </ul>
      
      <p>This 20°C difference in continuous operating temperature makes XLPE the preferred choice for applications with higher thermal demands, such as industrial environments, high-current installations, and locations with elevated ambient temperatures.</p>
      
      <h2>Applications and Use Cases</h2>
      
      <h3>XLPE Applications</h3>
      <p>XLPE insulation is ideal for:</p>
      <ul>
        <li>Medium voltage power distribution (6-36kV)</li>
        <li>High-current industrial installations</li>
        <li>Underground and underwater installations</li>
        <li>Environments with elevated ambient temperatures</li>
        <li>Chemical processing plants</li>
        <li>Solar power systems</li>
        <li>Emergency power systems requiring higher temperature ratings</li>
      </ul>
      
      <h3>PVC Applications</h3>
      <p>PVC insulation is suitable for:</p>
      <ul>
        <li>Low voltage power distribution (up to 1kV)</li>
        <li>Building wiring and residential installations</li>
        <li>Light industrial applications</li>
        <li>Control circuits</li>
        <li>Applications where cost is a primary consideration</li>
        <li>Indoor installations with normal ambient temperatures</li>
      </ul>
      
      <h2>Cost Considerations</h2>
      <p>While PVC is generally less expensive than XLPE, the total cost of ownership must consider:</p>
      <ul>
        <li><strong>Initial Material Cost:</strong> PVC typically 20-30% less expensive than XLPE</li>
        <li><strong>Installation Cost:</strong> Similar installation costs for both materials</li>
        <li><strong>Service Life:</strong> XLPE's longer service life can offset initial cost difference</li>
        <li><strong>Energy Efficiency:</strong> XLPE's higher temperature capability can reduce conductor size requirements</li>
        <li><strong>Maintenance Costs:</strong> XLPE's superior durability may reduce maintenance needs</li>
      </ul>
      
      <div class="callout-box callout-warning">
        <h4>Cost-Benefit Analysis</h4>
        <p>For critical industrial applications, the initial cost difference between XLPE and PVC is often justified by the improved performance, longer service life, and reduced risk of failure. Consider the total cost of ownership over the cable's expected service life.</p>
      </div>
      
      <h2>Standards and Compliance</h2>
      <p>Both XLPE and PVC cables must comply with relevant international standards:</p>
      <ul>
        <li><strong>IEC 60502-1:</strong> Power cables with extruded insulation</li>
        <li><strong>IEC 60228:</strong> Conductors for insulated cables</li>
        <li><strong>IEC 60332:</strong> Fire resistance testing</li>
        <li><strong>National Standards:</strong> Country-specific requirements</li>
      </ul>
      
      <p>Setareh Kerman manufactures both XLPE and PVC cables in compliance with these international standards, ensuring quality and reliability for all applications.</p>
      
      <h2>Selection Criteria</h2>
      <p>When choosing between XLPE and PVC insulation, consider:</p>
      
      <ol>
        <li><strong>Voltage Rating:</strong> MV applications typically require XLPE</li>
        <li><strong>Current Requirements:</strong> Higher currents benefit from XLPE's temperature rating</li>
        <li><strong>Environmental Conditions:</strong> Elevated temperatures favor XLPE</li>
        <li><strong>Installation Method:</strong> Both materials suitable for most installation methods</li>
        <li><strong>Budget Constraints:</strong> PVC may be suitable for cost-sensitive LV applications</li>
        <li><strong>Service Life Requirements:</strong> XLPE offers longer service life</li>
        <li><strong>Chemical Exposure:</strong> XLPE provides better chemical resistance</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Both XLPE and PVC insulation materials have their place in the cable industry. XLPE offers superior thermal and mechanical properties, making it the preferred choice for demanding industrial applications and medium voltage systems. PVC provides cost-effective performance for low-voltage applications where thermal requirements are less stringent.</p>
      
      <p>Setareh Kerman's engineering team is available to help you select the right insulation material for your specific application. Contact us for technical consultation and product recommendations tailored to your project requirements.</p>
    `,
    
    fa: `
      <h2>مقدمه‌ای بر مواد عایق کابل</h2>
      <p>عایق کابل یک جزء حیاتی در سیستم‌های الکتریکی است که هادی‌ها را از عوامل محیطی محافظت می‌کند و انتقال برق ایمن و قابل اعتماد را تضمین می‌کند. انتخاب بین عایق <span class="technical-term" title="پلی‌اتیلن متصل‌شده، یک ماده عایق ترموست با خواص حرارتی برتر">XLPE</span> و <span class="technical-term" title="پلی‌وینیل کلرید، یک ماده عایق ترموپلاستیک رایج برای کاربردهای ولتاژ پایین">PVC</span> تأثیر قابل توجهی بر عملکرد، طول عمر و مناسب بودن کابل برای کاربردهای خاص دارد.</p>
      
      <div class="callout-box callout-important">
        <h4>عامل تصمیم‌گیری کلیدی</h4>
        <p>انتخاب ماده عایق مناسب برای عملکرد، ایمنی و قابلیت اطمینان بلندمدت کابل حیاتی است. این راهنما به شما کمک می‌کند بر اساس الزامات فنی و شرایط کاربرد، تصمیم آگاهانه بگیرید.</p>
      </div>
      
      <h2>عایق XLPE چیست؟</h2>
      <p><span class="technical-term" title="یک ماده ترموست ایجاد شده توسط اتصال متقابل مولکول‌های پلی‌اتیلن که منجر به خواص حرارتی و مکانیکی برتر می‌شود">پلی‌اتیلن متصل‌شده (XLPE)</span> یک ماده عایق ترموست است که صنعت کابل را متحول کرده است. برخلاف مواد ترموپلاستیک سنتی، XLPE فرآیند اتصال متقابل شیمیایی را طی می‌کند که ساختار مولکولی سه‌بعدی ایجاد می‌کند و خواص حرارتی و مکانیکی آن را به طور قابل توجهی بهبود می‌بخشد.</p>
      
      <h3>خواص کلیدی XLPE</h3>
      <ul>
        <li><strong>دمای کاری بالاتر:</strong> XLPE می‌تواند به طور مداوم در ۹۰°C کار کند، در مقایسه با ۷۰°C برای PVC</li>
        <li><strong>پایداری حرارتی بهبود یافته:</strong> حفظ خواص در محدوده‌های دمایی گسترده بدون تخریب</li>
        <li><strong>قدرت مکانیکی بهتر:</strong> مقاومت افزایش‌یافته در برابر تغییر شکل، استرس و آسیب فیزیکی</li>
        <li><strong>مقاومت شیمیایی برتر:</strong> مقاومت عالی در برابر روغن‌ها، مواد شیمیایی و عوامل محیطی</li>
        <li><strong>طول عمر بیشتر:</strong> معمولاً ۲۵-۴۰ سال تحت شرایط عملیاتی عادی</li>
      </ul>
      
      <h2>عایق PVC چیست؟</h2>
      <p><span class="technical-term" title="یک ماده ترموپلاستیک که به دلیل صرفه‌ اقتصادی و سهولت پردازش به طور گسترده برای عایق کابل استفاده می‌شود">پلی‌وینیل کلرید (PVC)</span> یک ماده عایق ترموپلاستیک است که دهه‌ها در صنعت کابل استفاده شده است. PVC به دلیل صرفه اقتصادی، سهولت پردازش و عملکرد مناسب برای بسیاری از کاربردهای ولتاژ پایین شناخته می‌شود.</p>
      
      <h3>خواص کلیدی PVC</h3>
      <ul>
        <li><strong>صرفه اقتصادی:</strong> هزینه مواد و پردازش کمتر در مقایسه با XLPE</li>
        <li><strong>انعطاف‌پذیری خوب:</strong> نصب آسان‌تر در فضاهای محدود به دلیل انعطاف‌پذیری</li>
        <li><strong>مناسب برای ولتاژ پایین:</strong> مناسب برای کاربردها تا ۱ کیلوولت</li>
        <li><strong>بازدارنده حریق:</strong> خواص بازدارندگی حریق طبیعی</li>
        <li><strong>در دسترس گسترده:</strong> ماده رایج با زنجیره تأمین تأسیس شده</li>
      </ul>
      
      <h2>مقایسه فنی: XLPE در برابر PVC</h2>
      <p>جدول زیر مقایسه فنی دقیقی بین مواد عایق XLPE و PVC ارائه می‌دهد:</p>
      
      <div class="callout-box callout-tip">
        <h4>نکته فنی</h4>
        <p>مقادیر معمول برای کاربردهای کابل برق است. مقادیر خاص ممکن است بر اساس سازنده، ساختار کابل و شرایط نصب متفاوت باشد. همیشه مشخصات سازنده را برای داده‌های دقیق بررسی کنید.</p>
      </div>
      
      <h2>مقایسه دمای کاری</h2>
      <p>یکی از مهم‌ترین تفاوت‌های بین XLPE و PVC، قابلیت‌های دمای کاری آنهاست:</p>
      
      <ul>
        <li><strong>XLPE:</strong> دمای کاری مداوم ۹۰°C، رتبه اضطراری کوتاه‌مدت تا ۱۳۰°C</li>
        <li><strong>PVC:</strong> دمای کاری مداوم ۷۰°C، رتبه اضطراری کوتاه‌مدت تا ۱۰۰°C</li>
      </ul>
      
      <p>این تفاوت ۲۰ درجه‌ای در دمای کاری مداوم، XLPE را به انتخابی ترجیحی برای کاربردهای با تقاضای حرارتی بیشتر مانند محیط‌های صنعتی، نصب‌های جریان بالا و مکان‌های با دمای محیط بالا تبدیل می‌کند.</p>
      
      <h2>کاربردها و موارد استفاده</h2>
      
      <h3>کاربردهای XLPE</h3>
      <p>عایق XLPE برای موارد زیر ایده‌آل است:</p>
      <ul>
        <li>توزیع برق ولتاژ متوسط (۶-۳۶ کیلوولت)</li>
        <li>نصب‌های صنعتی جریان بالا</li>
        <li>نصب زیرزمینی و زیرآبی</li>
        <li>محیط‌ها با دمای محیط بالا</li>
        <li>کارخانه‌های پردازش شیمیایی</li>
        <li>سیستم‌های برق خورشیدی</li>
        <li>سیستم‌های برق اضطراری با رتبه دمای بالاتر</li>
      </ul>
      
      <h3>کاربردهای PVC</h3>
      <p>عایق PVC برای موارد زیر مناسب است:</p>
      <ul>
        <li>توزیع برق ولتاژ پایین (تا ۱ کیلوولت)</li>
        <li>سیم‌کشی ساختمان و نصب‌های مسکونی</li>
        <li>کاربردهای صنعتی سبک</li>
        <li>مدارهای کنترلی</li>
        <li>کاربردهایی که هزینه در نظر اولیه است</li>
        <li>نصب‌های داخلی با دمای محیط عادی</li>
      </ul>
      
      <h2>ملاحظات هزینه</h2>
      <p>اگرچه PVC معمولاً کمتر از XLPE گران است، هزینه کل مالکیت باید در نظر بگیرد:</p>
      <ul>
        <li><strong>هزینه مواد اولیه:</strong> PVC معمولاً ۲۰-۳۰٪ کمتر از XLPE</li>
        <li><strong>هزینه نصب:</strong> هزینه نصب مشابه برای هر دو ماده</li>
        <li><strong>طول عمر سرویس:</strong> طول عمر بیشتر XLPE می‌تواند تفاوت هزینه اولیه را جبران کند</li>
        <li><strong>کارایی انرژی:</strong> قابلیت دمای بالاتر XLPE می‌تواند نیاز به اندازه هادی را کاهش دهد</li>
        <li><strong>هزینه تعمیر و نگهداری:</strong> دوام برتر XLPE ممکن است نیاز به تعمیر و نگهداری را کاهش دهد</li>
      </ul>
      
      <div class="callout-box callout-warning">
        <h4>تحلیل هزینه-مزیت</h4>
        <p>برای کاربردهای صنعتی حیاتی، تفاوت هزینه اولیه بین XLPE و PVC اغلب با عملکرد بهبود یافته، طول عمر بیشتر و کاهش خطر شکست توجیه می‌شود. هزینه کل مالکیت را در طول عمر سرویس مورد انتظار کابل در نظر بگیرید.</p>
      </div>
      
      <h2>استانداردها و انطباق</h2>
      <p>هر دو کابل XLPE و PVC باید با استانداردهای بین‌المللی مربوطه مطابقت داشته باشند:</p>
      <ul>
        <li><strong>IEC 60502-1:</strong> کابل‌های برق با عایق اکسترود شده</li>
        <li><strong>IEC 60228:</strong> هادی‌ها برای کابل‌های عایق‌شده</li>
        <li><strong>IEC 60332:</strong> آزمون مقاومت در برابر حریق</li>
        <li><strong>استانداردهای ملی:</strong> الزامات خاص کشور</li>
      </ul>
      
      <p>ستاره کرمان هر دو کابل XLPE و PVC را مطابق با این استانداردهای بین‌المللی تولید می‌کند و کیفیت و قابلیت اطمینان را برای همه کاربردها تضمین می‌کند.</p>
      
      <h2>معیارهای انتخاب</h2>
      <p>هنگام انتخاب بین عایق XLPE و PVC، موارد زیر را در نظر بگیرید:</p>
      
      <ol>
        <li><strong>رتبه ولتاژ:</strong> کاربردهای MV معمولاً XLPE را می‌طلبند</li>
        <li><strong>الزامات جریان:</strong> جریان‌های بالاتر از رتبه دمای XLPE بهره می‌برند</li>
        <li><strong>شرایط محیطی:</strong> دماهای بالا XLPE را ترجیح می‌دهند</li>
        <li><strong>روش نصب:</strong> هر دو ماده برای اکثر روش‌های نصب مناسب هستند</li>
        <li><strong>محدودیت بودجه:</strong> PVC ممکن است برای کاربردهای LV حساس به هزینه مناسب باشد</li>
        <li><strong>الزامات طول عمر:</strong> XLPE طول عمر بیشتری ارائه می‌دهد</li>
        <li><strong>مواجه شیمیایی:</strong> XLPE مقاومت شیمیایی بهتری ارائه می‌دهد</li>
      </ol>
      
      <h2>نتیجه‌گیری</h2>
      <p>هر دو ماده عایق XLPE و PVC جای خود را در صنعت کابل دارند. XLPE خواص حرارتی و مکانیکی برتری ارائه می‌دهد و آن را به انتخابی ترجیحی برای کاربردهای صنعتی demanding و سیستم‌های ولتاژ متوسط تبدیل می‌کند. PVC عملکرد صرفه اقتصادی را برای کاربردهای ولتاژ پایین که الزامات حرارتی کمتر سخت‌گیر است، ارائه می‌دهد.</p>
      
      <p>تیم مهندسی ستاره کرمان برای کمک به شما در انتخاب ماده عایق مناسب برای کاربرد خاص شما در دسترس است. برای مشاوره فنی و توصیه محصول متناسب با الزامات پروژه خود با ما تماس بگیرید.</p>
    `,
  },
  
  author: 'Setareh Kerman Engineering Team',
  publishDate: '2024-01-20',
  featuredImage: '/og-image.jpg',
  
  linksToPillar: false, // This IS the pillar page
  internalLinks: [
    'low-voltage-cables-guide',
    'medium-voltage-cables-guide',
    'cable-sizing-calculations',
    'iec-standards-overview',
    'copper-vs-aluminum-conductors',
  ],
  
  faqs: [
    {
      question: {
        en: 'What is the main difference between XLPE and PVC insulation?',
        fa: 'تفاوت اصلی بین عایق XLPE و PVC چیست؟',
      },
      answer: {
        en: 'The main difference is operating temperature: XLPE can operate continuously at 90°C while PVC is limited to 70°C. XLPE also offers superior thermal stability, mechanical strength, and chemical resistance, making it suitable for demanding industrial applications.',
        fa: 'تفاوت اصلی دمای کاری است: XLPE می‌تواند به طور مداوم در ۹۰°C کار کند در حالی که PVC به ۷۰°C محدود است. XLPE همچنین پایداری حرارتی، قدرت مکانیکی و مقاومت شیمیایی برتری ارائه می‌دهد و آن را برای کاربردهای صنعتی demanding مناسب می‌سازد.',
      },
    },
    {
      question: {
        en: 'When should I choose XLPE over PVC?',
        fa: 'چه زمانی XLPE را به جای PVC انتخاب کنم؟',
      },
      answer: {
        en: 'Choose XLPE for medium voltage applications (6-36kV), high-current installations, environments with elevated temperatures, chemical processing plants, and applications requiring longer service life. PVC is suitable for low-voltage applications where cost is a primary consideration.',
        fa: 'XLPE را برای کاربردهای ولتاژ متوسط (۶-۳۶ کیلوولت)، نصب‌های جریان بالا، محیط‌های با دمای بالا، کارخانه‌های پردازش شیمیایی و کاربردهایی که نیاز به طول عمر بیشتر دارند انتخاب کنید. PVC برای کاربردهای ولتاژ پایین که هزینه در نظر اولیه است مناسب است.',
      },
    },
    {
      question: {
        en: 'Is XLPE worth the extra cost?',
        fa: 'آیا XLPE ارزش هزینه اضافی را دارد؟',
      },
      answer: {
        en: 'For critical industrial applications, yes. The longer service life (25-40 years vs 15-25 years for PVC), superior performance, and reduced risk of failure often justify the initial cost difference. Consider total cost of ownership over the cable\'s expected service life.',
        fa: 'برای کاربردهای صنعتی حیاتی، بله. طول عمر بیشتر (۲۵-۴۰ سال در مقابل ۱۵-۲۵ سال برای PVC)، عملکرد برتر و کاهش خطر شکست اغلب تفاوت هزینه اولیه را توجیه می‌کند. هزینه کل مالکیت را در طول عمر سرویس مورد انتظار کابل در نظر بگیرید.',
      },
    },
    {
      question: {
        en: 'Can XLPE and PVC cables be installed together?',
        fa: 'آیا می‌توان کابل‌های XLPE و PVC را با هم نصب کرد؟',
      },
      answer: {
        en: 'While technically possible, it is not recommended to mix XLPE and PVC cables in the same installation due to different thermal characteristics and potential compatibility issues. Use consistent insulation material throughout a project for optimal performance.',
        fa: 'اگرچه از نظر فنی ممکن است، توصیه نمی‌شود کابل‌های XLPE و PVC را در همان نصب مخلوط کنید به دلیل ویژگی‌های حرارتی متفاوت و مسائل سازگاری احتمالی. برای عملکرد بهینه، از ماده عایق ثابت در سراسر پروژه استفاده کنید.',
      },
    },
  ],
  
  ctas: [
    {
      type: 'consultation',
      location: 'after-introduction',
      text: {
        en: 'Need Help Selecting the Right Insulation?',
        fa: 'نیاز به کمک در انتخاب عایق مناسب دارید؟',
      },
    },
    {
      type: 'catalog',
      location: 'after-content',
      text: {
        en: 'Download Our Cable Catalog',
        fa: 'کاتالوگ کابل ما را دانلود کنید',
      },
    },
  ],
});

// Export metadata for SEO
export const xlpeVsPvcMetadata = {
  en: generateAllMetadata(xlpeVsPvcArticle, 'en'),
  fa: generateAllMetadata(xlpeVsPvcArticle, 'fa'),
};
