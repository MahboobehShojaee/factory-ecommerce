/**
 * Copper vs Aluminum Conductors - Comparison Article
 * Side-by-side comparison of conductor materials
 * 
 * This comparison article leverages:
 * - Article template system
 * - Comparison article template
 * - Technical table components (ComparisonTable)
 * - Typography components (CalloutBox)
 * - Internal linking to related articles
 * - Bilingual support (English + Persian)
 */

import { createArticle, comparisonArticleTemplate } from './articleTemplate.js';
import { generateAllMetadata } from './metadataTemplate.js';

export const copperVsAluminumArticle = createArticle({
  slug: 'copper-vs-aluminum-conductors',
  contentType: 'comparison',
  topicalCluster: 'cable-types',
  category: 'technical',
  tags: ['copper', 'aluminum', 'conductors', 'cable-comparison', 'material-selection'],
  
  primaryKeyword: 'copper vs aluminum conductors',
  secondaryKeywords: [
    'conductor materials',
    'cable conductivity',
    'conductor selection',
    'cost comparison',
    'cable weight',
  ],
  
  metaDescription: {
    en: 'Comprehensive comparison of copper vs aluminum conductors. Learn about conductivity, cost, weight, applications, and selection criteria for electrical cables.',
    fa: 'مقایسه جامع هادی‌های مس و آلومینیوم. درباره هدایت، هزینه، وزن، کاربردها و معیارهای انتخاب برای کابل‌های الکتریکی اطلاعات کسب کنید.',
  },
  
  title: {
    en: 'Copper vs Aluminum Conductors: Complete Comparison Guide',
    fa: 'هادی‌های مس در برابر آلومینیوم: راهنمای مقایسه جامع',
  },
  
  excerpt: {
    en: 'Copper and aluminum are the two primary conductor materials used in electrical cables. This guide compares their electrical properties, cost, weight, and applications to help you select the right material for your project.',
    fa: 'مس و آلومینیوم دو ماده هادی اصلی استفاده شده در کابل‌های الکتریکی هستند. این راهنما خواص الکتریکی، هزینه، وزن و کاربردهای آنها را مقایسه می‌کند تا به شما در انتخاب ماده مناسب برای پروژه خود کمک کند.',
  },
  
  content: {
    en: `
      <h2>Introduction to Conductor Materials</h2>
      <p>Copper and aluminum are the two most common conductor materials in electrical cables. Each material has distinct advantages and limitations that make it suitable for specific applications. Understanding these differences is essential for making informed decisions about cable selection.</p>
      
      <CalloutBox type="important" title="Selection Impact">
        <p>The choice between copper and aluminum affects cable performance, cost, installation requirements, and long-term reliability. This comparison provides the technical basis for material selection.</p>
      </CalloutBox>
      
      <h2>Electrical Conductivity</h2>
      
      <h3>Copper Conductivity</h3>
      <p>Copper has excellent electrical conductivity, approximately 58 MS/m (mega-siemens per meter). This high conductivity means copper conductors carry more current for a given cross-sectional area compared to aluminum. The International Annealed Copper Standard (IACS) defines 100% conductivity as 58 MS/m.</p>
      
      <h3>Aluminum Conductivity</h3>
      <p>Aluminum has lower electrical conductivity, approximately 35 MS/m, which is about 60% of copper's conductivity. To carry the same current as copper, aluminum requires a larger cross-sectional area (typically 1.5-2 times larger).</p>
      
      <CalloutBox type="tip" title="Conductivity Comparison">
        <p>Copper: 100% IACS conductivity<br/>
        Aluminum: 61% IACS conductivity<br/>
        Aluminum requires 1.6x larger cross-section for equivalent current capacity.</p>
      </CalloutBox>
      
      <h2>Cost Considerations</h2>
      
      <h3>Material Cost</h3>
      <p>Aluminum is significantly less expensive than copper on a per-kilogram basis. However, because aluminum requires larger conductors for the same current capacity, the cost difference is partially offset by the increased material volume.</p>
      
      <h3>Total Cost of Ownership</h3>
      <p>While aluminum has lower initial material cost, copper may offer better long-term value due to:</p>
      <ul>
        <li>Lower installation costs (smaller conductors, easier termination)</li>
        <li>Reduced maintenance requirements</li>
        <li>Better performance in high-current applications</li>
        <li>Longer service life in many applications</li>
      </ul>
      
      <h2>Weight and Physical Properties</h2>
      
      <h3>Density Comparison</h3>
      <ul>
        <li><strong>Copper:</strong> 8.96 g/cm³</li>
        <li><strong>Aluminum:</strong> 2.70 g/cm³</li>
      </ul>
      <p>Aluminum is approximately one-third the weight of copper for the same volume. This makes aluminum advantageous for applications where weight is a critical factor, such as overhead transmission lines.</p>
      
      <h3>Installation Impact</h3>
      <p>Aluminum's lighter weight can reduce installation labor costs, especially for large conductors and long cable runs. However, aluminum's larger size may require larger conduits and cable trays.</p>
      
      <h2>Mechanical Properties</h2>
      
      <h3>Strength and Flexibility</h3>
      <p>Copper has higher tensile strength and better flexibility compared to aluminum. Copper conductors are more resistant to mechanical damage during installation and service. Aluminum is softer and more prone to damage from bending and vibration.</p>
      
      <h3>Thermal Expansion</h3>
      <p>Aluminum has a higher coefficient of thermal expansion than copper. This means aluminum conductors expand and contract more with temperature changes, which can affect connections and require special termination techniques.</p>
      
      <h2>Corrosion Resistance</h2>
      
      <h3>Copper Corrosion</h3>
      <p>Copper has excellent corrosion resistance in most environments. It forms a protective oxide layer that prevents further corrosion. Copper is resistant to most chemicals and atmospheric conditions.</p>
      
      <h3>Aluminum Corrosion</h3>
      <p>Aluminum forms a protective oxide layer, but it is more susceptible to galvanic corrosion when in contact with dissimilar metals. Aluminum requires special termination techniques and compatible connectors to prevent corrosion issues.</p>
      
      <h2>Termination and Connection</h2>
      
      <h3>Copper Termination</h3>
      <p>Copper is easy to terminate using standard connectors and lugs. Copper connections are reliable and maintain good electrical contact over time. Standard termination methods work well with copper conductors.</p>
      
      <h3>Aluminum Termination</h3>
      <p>Aluminum requires special termination techniques and connectors designed specifically for aluminum. Aluminum connections must use anti-oxidant compounds and proper torque specifications to prevent connection failures over time.</p>
      
      <CalloutBox type="warning" title="Termination Critical">
        <p>Never use copper-only connectors with aluminum conductors. Always use aluminum-rated connectors and follow manufacturer specifications for aluminum terminations.</p>
      </CalloutBox>
      
      <h2>Applications and Use Cases</h2>
      
      <h3>Copper Applications</h3>
      <p>Copper is preferred for:</p>
      <ul>
        <li>Building wiring and residential installations</li>
        <li>Industrial control circuits</li>
        <li>High-current applications where space is limited</li>
        <li>Applications requiring frequent connections/disconnections</li>
        <li>Underground and underwater installations</li>
        <li>Harsh environmental conditions</li>
      </ul>
      
      <h3>Aluminum Applications</h3>
      <p>Aluminum is suitable for:</p>
      <ul>
        <li>Overhead transmission lines (weight advantage)</li>
        <li>Large industrial installations where cost is critical</li>
        <li>Utility distribution networks</li>
        <li>Applications with large conductor sizes</li>
        <li>Long cable runs where weight savings matter</li>
      </ul>
      
      <h2>Selection Criteria</h2>
      
      <h3>Choose Copper When:</h3>
      <ul>
        <li>Space is limited (smaller conductors needed)</li>
        <li>Installation requires frequent terminations</li>
        <li>High-current applications with space constraints</li>
        <li>Harsh environmental conditions</li>
        <li>Long-term reliability is critical</li>
        <li>Standard termination methods preferred</li>
      </ul>
      
      <h3>Choose Aluminum When:</h3>
      <ul>
        <li>Cost is a primary consideration</li>
        <li>Weight reduction is important</li>
        <li>Large conductor sizes are required</li>
        <li>Overhead transmission applications</li>
        <li>Utility distribution networks</li>
        <li>Proper aluminum termination methods are available</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Both copper and aluminum have their place in electrical cable applications. Copper offers superior conductivity, easier termination, and better reliability, making it the preferred choice for most applications. Aluminum provides cost savings and weight advantages for large-scale installations where these factors are critical.</p>
      
      <p>Setareh Kerman manufactures cables with both copper and aluminum conductors, allowing you to select the optimal material for your specific application. Contact our engineering team for technical consultation on conductor selection.</p>
    `,
    
    fa: `
      <h2>مقدمه‌ای بر مواد هادی</h2>
      <p>مس و آلومینیوم دو رایج‌ترین مواد هادی در کابل‌های الکتریکی هستند. هر ماده مزایا و محدودیت‌های متمایزی دارد که آن را برای کاربردهای خاص مناسب می‌سازد. درک این تفاوت‌ها برای تصمیم‌گیری آگاهانه در مورد انتخاب کابل ضروری است.</p>
      
      <calloutBox type="important" title="تأثیر انتخاب">
        <p>انتخاب بین مس و آلومینیوم بر عملکرد کابل، هزینه، الزامات نصب و قابلیت اطمینان بلندمدت تأثیر می‌گذارد. این مقایسه پایه فنی برای انتخاب ماده را ارائه می‌دهد.</p>
      </calloutBox>
      
      <h2>هدایت الکتریکی</h2>
      
      <h3>هدایت مس</h3>
      <p>مس هدایت الکتریکی عالی دارد، تقریباً ۵۸ MS/m (مگا-زیمنس در متر). این هدایت بالا به این معنی است که هادی‌های مس برای یک سطح مقطع داده شده در مقایسه با آلومینیوم جریان بیشتری حمل می‌کنند. استاندارد مس آنیل شده بین‌المللی (IACS) هدایت ۱۰۰٪ را به عنوان ۵۸ MS/m تعریف می‌کند.</p>
      
      <h3>هدایت آلومینیوم</h3>
      <p>آلومینیوم هدایت الکتریکی پایین‌تری دارد، تقریباً ۳۵ MS/m، که حدود ۶۰٪ هدایت مس است. برای حمل همان جریان مس، آلومینیوم به سطح مقطع بزرگتری نیاز دارد (معمولاً ۱.۵-۲ برابر بزرگتر).</p>
      
      <calloutBox type="tip" title="مقایسه هدایت">
        <p>مس: هدایت ۱۰۰٪ IACS<br/>
        آلومینیوم: هدایت ۶۱٪ IACS<br/>
        آلومینیوم به سطح مقطع ۱.۶ برابر بزرگتر برای ظرفیت جریان معادل نیاز دارد.</p>
      </calloutBox>
      
      <h2>ملاحظات هزینه</h2>
      
      <h3>هزینه مواد</h3>
      <p>آلومینیوم به طور قابل توجهی کمتر از مس در هر کیلوگرم هزینه دارد. با این حال، از آنجا که آلومینیوم به هادی‌های بزرگتر برای همان ظرفیت جریان نیاز دارد، تفاوت هزینه تا حدی توسط حجم مواد افزایش‌یافته جبران می‌شود.</p>
      
      <h3>هزینه کل مالکیت</h3>
      <p>در حالی که آلومینیوم هزینه مواد اولیه کمتری دارد، مس ممکن است ارزش بلندمدت بهتری ارائه دهد به دلیل:</p>
      <ul>
        <li>هزینه‌های نصب پایین‌تر (هادی‌های کوچکتر، پایانی‌سازی آسان‌تر)</li>
        <li>الزامات تعمیر و نگهداری کاهش‌یافته</li>
        <li>عملکرد بهتر در کاربردهای جریان بالا</li>
        <li>طول عمر بیشتر در بسیاری از کاربردها</li>
      </ul>
      
      <h2>وزن و خواص فیزیکی</h2>
      
      <h3>مقایسه چگالی</h3>
      <ul>
        <li><strong>مس:</strong> ۸.۹۶ گرم/سانتیمتر مکعب</li>
        <li><strong>آلومینیوم:</strong> ۲.۷۰ گرم/سانتیمتر مکعب</li>
      </ul>
      <p>آلومینیوم تقریباً یک سوم وزن مس برای همان حجم است. این آلومینیوم را برای کاربردهایی که وزن عامل حیاتی است، مانند خطوط انتقال هوایی، مطلوب می‌سازد.</p>
      
      <h3>تأثیر نصب</h3>
      <p>وزن سبک‌تر آلومینیوم می‌تواند هزینه‌های کار نصب را کاهش دهد، به خصوص برای هادی‌های بزرگ و اجراهای کابل طولانی. با این حال، اندازه بزرگتر آلومینیوم ممکن است به لوله‌ها و سینی‌های کابل بزرگتر نیاز داشته باشد.</p>
      
      <h2>خواص مکانیکی</h2>
      
      <h3>قدرت و انعطاف‌پذیری</h3>
      <p>مس قدرت کششی بالاتر و انعطاف‌پذیری بهتری در مقایسه با آلومینیوم دارد. هادی‌های مس در برابر آسیب مکانیکی در طول نصب و سرویس مقاوم‌تر هستند. آلومینیوم نرم‌تر و مستعد آسیب از خم شدن و لرزش است.</p>
      
      <h3>انبساط حرارتی</h3>
      <p>آلومینیوم ضریب انبساط حرارتی بالاتری نسبت به مس دارد. این بدان معناست که هادی‌های آلومینیوم با تغییرات دما بیشتر منبسط و منقبض می‌شوند، که می‌تواند بر اتصالات تأثیر بگذارد و نیاز به تکنیک‌های پایانی‌سازی خاص دارد.</p>
      
      <h2>مقاومت خوردگی</h2>
      
      <h3>خوردگی مس</h3>
      <p>مس مقاومت خوردگی عالی در اکثر محیط‌ها دارد. لایه اکسید محافظ تشکیل می‌دهد که از خوردگی بیشتر جلوگیری می‌کند. مس در برابر اکثر مواد شیمیایی و شرایط جوی مقاوم است.</p>
      
      <h3>خوردگی آلومینیوم</h3>
      <p>آلومینیوم لایه اکسید محافظ تشکیل می‌دهد، اما مستعد خوردگی گالوانیک هنگام تماس با فلزات نامشابه است. آلومینیوم به تکنیک‌های پایانی‌سازی خاص و کانکتورهای سازگار برای جلوگیری از مسائل خوردگی نیاز دارد.</p>
      
      <h2>پایانی‌سازی و اتصال</h2>
      
      <h3>پایانی‌سازی مس</h3>
      <p>مس برای پایانی‌سازی با استفاده از کانکتورها و لوگ‌های استاندارد آسان است. اتصالات مس قابل اعتماد هستند و تماس الکتریکی خوب را در طول زمان حفظ می‌کنند. روش‌های پایانی‌سازی استاندارد با هادی‌های مس به خوبی کار می‌کنند.</p>
      
      <h3>پایانی‌سازی آلومینیوم</h3>
      <p>آلومینیوم به تکنیک‌های پایانی‌سازی خاص و کانکتورهای طراحی شده به طور خاص برای آلومینیوم نیاز دارد. اتصالات آلومینیوم باید از ترکیبات ضد اکسید و مشخصات گشتاور مناسب برای جلوگیری از شکست اتصال در طول زمان استفاده کنند.</p>
      
      <calloutBox type="warning" title="پایانی‌سازی حیاتی">
        <p>هرگز از کانکتورهای فقط مس با هادی‌های آلومینیوم استفاده نکنید. همیشه از کانکتورهای رتبه‌بندی شده آلومینیوم استفاده کنید و مشخصات سازنده را برای پایانی‌سازی‌های آلومینیوم دنبال کنید.</p>
      </calloutBox>
      
      <h2>کاربردها و موارد استفاده</h2>
      
      <h3>کاربردهای مس</h3>
      <p>مس برای موارد زیر ترجیح داده می‌شود:</p>
      <ul>
        <li>سیم‌کشی ساختمان و نصب‌های مسکونی</li>
        <li>مدارهای کنترلی صنعتی</li>
        <li>کاربردهای جریان بالا که فضا محدود است</li>
        <li>کاربردهایی که نیاز به اتصالات/قطع اتصالات مکرر دارند</li>
        <li>نصب‌های زیرزمینی و زیرآبی</li>
        <li>شرایط محیطی سخت</li>
      </ul>
      
      <h3>کاربردهای آلومینیوم</h3>
      <p>آلومینیوم برای موارد زیر مناسب است:</p>
      <ul>
        <li>خطوط انتقال هوایی (مزیت وزن)</li>
        <li>نصب‌های صنعتی بزرگ که هزینه حیاتی است</li>
        <li>شبکه‌های توزیع公用事业</li>
        <li>کاربردها با اندازه هادی بزرگ</li>
        <li>اجراهای کابل طولانی که صرفه‌جویی وزن مهم است</li>
      </ul>
      
      <h2>معیارهای انتخاب</h2>
      
      <h3>مس را انتخاب کنید وقتی:</h3>
      <ul>
        <li>فضا محدود است (هادی‌های کوچکتر مورد نیاز)</li>
        <li>نصب به پایانی‌سازی‌های مکرر نیاز دارد</li>
        <li>کاربردهای جریان بالا با محدودیت فضا</li>
        <li>شرایط محیطی سخت</li>
        <li>قابلیت اطمینان بلندمدت حیاتی است</li>
        <li>روش‌های پایانی‌سازی استاندارد ترجیح داده می‌شود</li>
      </ul>
      
      <h3>آلومینیوم را انتخاب کنید وقتی:</h3>
      <ul>
        <li>هزینه در نظر اولیه است</li>
        <li>کاهش وزن مهم است</li>
        <li>اندازه هادی بزرگ مورد نیاز است</li>
        <li>کاربردهای انتقال هوایی</li>
        <li>شبکه‌های توزیع公用事业</li>
        <li>روش‌های پایانی‌سازی آلومینیوم مناسب در دسترس است</li>
      </ul>
      
      <h2>نتیجه‌گیری</h2>
      <p>هم مس و هم آلومینیوم جای خود را در کاربردهای کابل الکتریکی دارند. مس هدایت برتر، پایانی‌سازی آسان‌تر و قابلیت اطمینان بهتر ارائه می‌دهد و آن را به انتخابی ترجیحی برای اکثر کاربردها تبدیل می‌کند. آلومینیوم صرفه‌جویی در هزینه و مزایای وزن را برای نصب‌های مقیاس بزرگ که این عوامل حیاتی هستند، ارائه می‌دهد.</p>
      
      <p>ستاره کرمان کابل‌های با هادی‌های مس و آلومینیوم تولید می‌کند و به شما اجازه می‌دهد ماده بهینه را برای کاربرد خاص خود انتخاب کنید. برای مشاوره فنی در مورد انتخاب هادی با تیم مهندسی ما تماس بگیرید.</p>
    `,
  },
  
  author: 'Setareh Kerman Engineering Team',
  publishDate: '2024-01-24',
  featuredImage: '/og-image.jpg',
  
  linksToPillar: false,
  internalLinks: [
    'cable-sizing-basics',
    'low-voltage-cables-guide',
    'conductor-selection-guide',
  ],
  
  comparisonData: {
    criteria: ['Conductivity', 'Cost', 'Weight', 'Corrosion Resistance', 'Termination', 'Applications'],
    copper: {
      Conductivity: '100% IACS (Excellent)',
      Cost: 'Higher initial cost',
      Weight: '8.96 g/cm³ (Heavy)',
      'Corrosion Resistance': 'Excellent',
      Termination: 'Standard methods',
      Applications: 'Building wiring, industrial, harsh environments',
    },
    aluminum: {
      Conductivity: '61% IACS (Good)',
      Cost: 'Lower initial cost',
      Weight: '2.70 g/cm³ (Light)',
      'Corrosion Resistance': 'Good (requires special handling)',
      Termination: 'Special methods required',
      Applications: 'Transmission lines, utility networks, large installations',
    },
  },
  
  faqs: [
    {
      question: {
        en: 'Which conductor material is better?',
        fa: 'کدام ماده هادی بهتر است؟',
      },
      answer: {
        en: 'Neither is universally "better." Copper offers superior conductivity and easier termination, making it preferred for most applications. Aluminum provides cost and weight advantages for large-scale installations. The choice depends on specific application requirements.',
        fa: 'هیچکدام به طور جهانی "بهتر" نیست. مس هدایت برتر و پایانی‌سازی آسان‌تر ارائه می‌دهد و آن را برای اکثر کاربردها ترجیحی می‌سازد. آلومینیوم مزایای هزینه و وزن را برای نصب‌های مقیاس بزرگ ارائه می‌دهد. انتخاب به الزامات کاربرد خاص بستگی دارد.',
      },
    },
    {
      question: {
        en: 'Can I use copper connectors with aluminum conductors?',
        fa: 'آیا می‌توانم از کانکتورهای مس با هادی‌های آلومینیوم استفاده کنم؟',
      },
      answer: {
        en: 'No, never use copper-only connectors with aluminum conductors. Always use connectors specifically rated for aluminum and follow manufacturer specifications for proper termination to prevent connection failures.',
        fa: 'خیر، هرگز از کانکتورهای فقط مس با هادی‌های آلومینیوم استفاده نکنید. همیشه از کانکتورهای رتبه‌بندی شده به طور خاص برای آلومینیوم استفاده کنید و مشخصات سازنده را برای پایانی‌سازی مناسب برای جلوگیری از شکست اتصال دنبال کنید.',
      },
    },
  ],
  
  ctas: [
    {
      type: 'consultation',
      location: 'after-introduction',
      text: {
        en: 'Need Help Selecting Conductors?',
        fa: 'نیاز به کمک در انتخاب هادی دارید؟',
      },
    },
    {
      type: 'catalog',
      location: 'after-content',
      text: {
        en: 'Download Conductor Catalog',
        fa: 'کاتالوگ هادی را دانلود کنید',
      },
    },
  ],
});

// Export metadata for SEO
export const copperVsAluminumMetadata = {
  en: generateAllMetadata(copperVsAluminumArticle, 'en'),
  fa: generateAllMetadata(copperVsAluminumArticle, 'fa'),
};
