/**
 * Cable Sizing Basics - Technical Guide
 * Step-by-step guide to cable sizing calculations
 * 
 * This technical guide leverages:
 * - Article template system
 * - Technical guide template
 * - Technical table components (SpecificationTable)
 * - Typography components (CalloutBox, CodeBlock)
 * - Internal linking to related articles
 * - Bilingual support (English + Persian)
 */

import { createArticle, technicalGuideTemplate } from './articleTemplate.js';
import { generateAllMetadata } from './metadataTemplate.js';

export const cableSizingBasicsArticle = createArticle({
  slug: 'cable-sizing-basics',
  contentType: 'guide',
  topicalCluster: 'cable-types',
  category: 'technical',
  tags: ['cable-sizing', 'ampacity', 'voltage-drop', 'calculations', 'technical-guide'],
  
  primaryKeyword: 'cable sizing',
  secondaryKeywords: [
    'ampacity calculation',
    'voltage drop calculation',
    'cable selection',
    'current carrying capacity',
    'IEC cable sizing',
  ],
  
  metaDescription: {
    en: 'Step-by-step guide to cable sizing calculations. Learn how to calculate ampacity, voltage drop, and select the right cable size for your electrical installation.',
    fa: 'راهنمای گام به گام محاسبات اندازه‌گیری کابل. یاد بگیرید چگونه ظرفیت جریان، افت ولتاژ را محاسبه کنید و اندازه کابل مناسب برای نصب الکتریکی خود را انتخاب کنید.',
  },
  
  title: {
    en: 'Cable Sizing Basics: Step-by-Step Guide to Cable Calculations',
    fa: 'اصول اندازه‌گیری کابل: راهنمای گام به گام محاسبات کابل',
  },
  
  excerpt: {
    en: 'Proper cable sizing is essential for safe and efficient electrical installations. This guide covers ampacity calculations, voltage drop considerations, and step-by-step procedures for selecting the right cable size.',
    fa: 'اندازه‌گیری صحیح کابل برای نصب‌های الکتریکی ایمن و کارآمد ضروری است. این راهنما محاسبات ظرفیت جریان، ملاحظات افت ولتاژ و رویه‌های گام به گام برای انتخاب اندازه کابل مناسب را پوشش می‌دهد.',
  },
  
  content: {
    en: `
      <h2>Introduction to Cable Sizing</h2>
      <p>Proper cable sizing is critical for electrical safety, efficiency, and reliability. Undersized cables can overheat, cause voltage drops, and create fire hazards. Oversized cables increase costs unnecessarily. This guide provides a systematic approach to cable sizing based on IEC standards and industry best practices.</p>
      
      <div class="callout-box callout-important">
        <h4>Safety First</h4>
        <p>Cable sizing calculations should be performed by qualified electrical engineers. Always consult local electrical codes and standards before finalizing cable selections.</p>
      </div>
      
      <h2>Key Factors in Cable Sizing</h2>
      
      <h3>Current Carrying Capacity (Ampacity)</h3>
      <p>The maximum current a cable can carry continuously without exceeding its temperature rating. Ampacity depends on:</p>
      <ul>
        <li>Conductor material (copper or aluminum)</li>
        <li>Conductor size (cross-sectional area)</li>
        <li>Insulation type and temperature rating</li>
        <li>Installation method (air, duct, buried)</li>
        <li>Ambient temperature</li>
        <li>Cable grouping (derating factors)</li>
      </ul>
      
      <h3>Voltage Drop</h3>
      <p>The reduction in voltage as current flows through a cable due to conductor resistance. Voltage drop should typically be limited to 3-5% for power circuits to ensure equipment operates efficiently.</p>
      
      <h3>Short-Circuit Rating</h3>
      <p>The cable's ability to withstand fault currents without damage. This depends on conductor size, insulation type, and protection device characteristics.</p>
      
      <h2>Step 1: Determine Load Current</h2>
      <p>Calculate the maximum current your cable will carry:</p>
      
      <pre class="code-block"><code>// For single-phase AC
I = P / (V × PF × η)

// For three-phase AC
I = P / (√3 × V × PF × η)

Where:
I = Current (Amps)
P = Power (Watts)
V = Voltage (Volts)
PF = Power Factor (typically 0.8-0.95)
η = Efficiency (typically 0.85-0.95)</code></pre>
      
      <div class="callout-box callout-tip">
        <h4>Example Calculation</h4>
        <p>For a 10kW three-phase motor at 400V with PF=0.85 and η=0.9:<br/>
        I = 10,000 / (1.732 × 400 × 0.85 × 0.9) = 18.9A</p>
      </div>
      
      <h2>Step 2: Select Initial Cable Size</h2>
      <p>Consult ampacity charts for your cable type and installation method. Select a cable size with ampacity rating at least 125% of your calculated load current for motors, or 100% for general loads.</p>
      
      <h3>Ampacity Reference (Copper, PVC, Air Installation)</h3>
      
      <ul>
        <li>1.5mm²: 16A</li>
        <li>2.5mm²: 21A</li>
        <li>4mm²: 28A</li>
        <li>6mm²: 36A</li>
        <li>10mm²: 48A</li>
        <li>16mm²: 63A</li>
        <li>25mm²: 80A</li>
        <li>35mm²: 99A</li>
        <li>50mm²: 125A</li>
      </ul>
      
      <div class="callout-box callout-warning">
        <h4>Derating Required</h4>
        <p>These values are for reference only. Actual ampacity depends on installation conditions, ambient temperature, and cable grouping. Always apply appropriate derating factors.</p>
      </div>
      
      <h2>Step 3: Apply Derating Factors</h2>
      
      <h3>Ambient Temperature Derating</h3>
      <p>Higher ambient temperatures reduce current capacity. Apply temperature correction factors from IEC standards:</p>
      
      <ul>
        <li>25°C: 1.00 (reference)</li>
        <li>30°C: 0.94</li>
        <li>35°C: 0.87</li>
        <li>40°C: 0.79</li>
        <li>45°C: 0.71</li>
        <li>50°C: 0.61</li>
      </ul>
      
      <h3>Grouping Derating</h3>
      <p>Cables grouped together reduce heat dissipation. Apply grouping factors:</p>
      
      <ul>
        <li>1 cable: 1.00</li>
        <li>2 cables: 0.80</li>
        <li>3 cables: 0.70</li>
        <li>4-6 cables: 0.65</li>
        <li>7-9 cables: 0.60</li>
        <li>10+ cables: 0.50</li>
      </ul>
      
      <h2>Step 4: Calculate Voltage Drop</h2>
      <p>Verify voltage drop is within acceptable limits (typically 3-5%):</p>
      
      <pre class="code-block"><code>// Single-phase voltage drop
VD = (2 × I × R × L) / 1000

// Three-phase voltage drop
VD = (√3 × I × R × L) / 1000

Where:
VD = Voltage Drop (Volts)
I = Current (Amps)
R = Resistance per km (Ω/km)
L = Cable length (meters)

// Percentage voltage drop
VD% = (VD / V) × 100</code></pre>
      
      <div class="callout-box callout-tip">
        <h4>Resistance Values</h4>
        <p>Copper resistance (Ω/km): 1.5mm²=12.1, 2.5mm²=7.41, 4mm²=4.61, 6mm²=3.08, 10mm²=1.83</p>
      </div>
      
      <h2>Step 5: Verify Short-Circuit Rating</h2>
      <p>Ensure the cable can withstand the prospective short-circuit current. The short-circuit rating depends on:</p>
      
      <ul>
        <li>Conductor size</li>
        <li>Insulation type</li>
        <li>Duration of fault (typically 1-3 seconds)</li>
        <li>Protection device characteristics</li>
      </ul>
      
      <h2>Step 6: Final Selection</h2>
      <p>Select the smallest cable size that meets all requirements:</p>
      
      <ol>
        <li>Ampacity ≥ load current (with derating applied)</li>
        <li>Voltage drop ≤ 3-5%</li>
        <li>Short-circuit rating ≥ fault current</li>
        <li>Economic considerations (cost vs. performance)</li>
      </ol>
      
      <h2>Common Mistakes to Avoid</h2>
      
      <ul>
        <li><strong>Ignoring derating factors:</strong> Always account for ambient temperature and cable grouping</li>
        <li><strong>Using wrong resistance values:</strong> Use values for the correct conductor material and temperature</li>
        <li><strong>Underestimating load current:</strong> Consider future load growth and starting currents</li>
        <li><strong>Neglecting voltage drop:</strong> Long cable runs require larger conductors</li>
        <li><strong>Wrong installation method:</strong> Different methods have different ampacity ratings</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Proper cable sizing requires careful consideration of multiple factors. Following this systematic approach ensures safe, efficient, and code-compliant electrical installations. For complex projects or special applications, consult with Setareh Kerman's engineering team for expert guidance.</p>
      
      <p>See our <a href="/blog/ampacity-chart-reference">ampacity chart reference</a> for detailed current carrying capacity data.</p>
    `,
    
    fa: `
      <h2>مقدمه‌ای بر اندازه‌گیری کابل</h2>
      <p>اندازه‌گیری صحیح کابل برای ایمنی، کارایی و قابلیت اطمینان الکتریکی حیاتی است. کابل‌های کوچک می‌توانند گرم شوند، افت ولتاژ ایجاد کنند و خطر آتش‌سوزی ایجاد کنند. کابل‌های بزرگ هزینه‌ها را به طور غیرضروری افزایش می‌دهند. این راهنما رویکردی سیستماتیک برای اندازه‌گیری کابل بر اساس استانداردهای IEC و بهترین شیوه‌های صنعتی ارائه می‌دهد.</p>
      
      <div class="callout-box callout-important">
        <h4>ایمنی اول</h4>
        <p>محاسبات اندازه‌گیری کابل باید توسط مهندسان الکتریکی واجد شرایط انجام شود. همیشه قبل از نهایی کردن انتخاب‌های کابل، کدها و استانداردهای الکتریکی محلی را مشورت کنید.</p>
      </div>
      
      <h2>عوامل کلیدی در اندازه‌گیری کابل</h2>
      
      <h3>ظرفیت حمل جریان (ظرفیت جریان)</h3>
      <p>حداکثر جریانی که یک کابل می‌تواند به طور مداوم بدون exceeding رتبه دمای خود حمل کند. ظرفیت جریان به موارد زیر بستگی دارد:</p>
      <ul>
        <li>ماده هادی (مس یا آلومینیوم)</li>
        <li>اندازه هادی (سطح مقطع)</li>
        <li>نوع عایق و رتبه دما</li>
        <li>روش نصب (هوا، لوله، دفن شده)</li>
        <li>دمای محیط</li>
        <li>گروه‌بندی کابل (عوامل کاهش)</li>
      </ul>
      
      <h3>افت ولتاژ</h3>
      <p>کاهش ولتاژ به عنوان جریان از طریق یک کابل به دلیل مقاومت هادی جریان می‌یابد. افت ولتاژ باید معمولاً برای مدارهای برق به ۳-۵٪ محدود شود تا اطمینان حاصل شود که تجهیزات به طور کارآمد کار می‌کنند.</p>
      
      <h3>رتبه اتصال کوتاه</h3>
      <p>توانایی کابل برای تحمل جریان‌های خطا بدون آسیب. این به اندازه هادی، نوع عایق و ویژگی‌های دستگاه حفاظتی بستگی دارد.</p>
      
      <h2>مرحله 1: جریان بار را تعیین کنید</h2>
      <p>حداکثر جریانی که کابل شما حمل خواهد کرد را محاسبه کنید:</p>
      
      <pre class="code-block"><code>// برای AC تک‌فاز
I = P / (V × PF × η)

// برای AC سه‌فاز
I = P / (√3 × V × PF × η)

که در آن:
I = جریان (آمپر)
P = توان (وات)
V = ولتاژ (ولت)
PF = ضریب توان (معمولاً ۰.۸-۰.۹۵)
η = کارایی (معمولاً ۰.۸۵-۰.۹۵)</code></pre>
      
      <div class="callout-box callout-tip">
        <h4>محاسبه نمونه</h4>
        <p>برای یک موتور سه‌فاز ۱۰ کیلووات در ۴۰۰ ولت با PF=۰.۸۵ و η=۰.۹:<br/>
        I = ۱۰،۰۰۰ / (۱.۷۳۲ × ۴۰۰ × ۰.۸۵ × ۰.۹) = ۱۸.۹A</p>
      </div>
      
      <h2>مرحله 2: اندازه کابل اولیه را انتخاب کنید</h2>
      <p>نمودارهای ظرفیت جریان را برای نوع کابل و روش نصب خود مشورت کنید. اندازه کابلی با رتبه ظرفیت جریان حداقل ۱۲۵٪ جریان بار محاسبه شده خود برای موتورها، یا ۱۰۰٪ برای بارهای عمومی انتخاب کنید.</p>
      
      <h3>مرجع ظرفیت جریان (مس، PVC، نصب هوا)</h3>
      
      <ul>
        <li>۱.۵ میلی‌متر مربع: ۱۶A</li>
        <li>۲.۵ میلی‌متر مربع: ۲۱A</li>
        <li>۴ میلی‌متر مربع: ۲۸A</li>
        <li>۶ میلی‌متر مربع: ۳۶A</li>
        <li>۱۰ میلی‌متر مربع: ۴۸A</li>
        <li>۱۶ میلی‌متر مربع: ۶۳A</li>
        <li>۲۵ میلی‌متر مربع: ۸۰A</li>
        <li>۳۵ میلی‌متر مربع: ۹۹A</li>
        <li>۵۰ میلی‌متر مربع: ۱۲۵A</li>
      </ul>
      
      <div class="callout-box callout-warning">
        <h4>کاهش مورد نیاز</h4>
        <p>این مقادیر فقط برای مرجع هستند. ظرفیت جریان واقعی به شرایط نصب، دمای محیط و گروه‌بندی کابل بستگی دارد. همیشه عوامل کاهش مناسب را اعمال کنید.</p>
      </div>
      
      <h2>مرحله 3: عوامل کاهش را اعمال کنید</h2>
      
      <h3>کاهش دمای محیط</h3>
      <p>دماهای محیط بالاتر ظرفیت جریان را کاهش می‌دهند. عوامل اصلاح دما را از استانداردهای IEC اعمال کنید:</p>
      
      <ul>
        <li>۲۵°C: ۱.۰۰ (مرجع)</li>
        <li>۳۰°C: ۰.۹۴</li>
        <li>۳۵°C: ۰.۸۷</li>
        <li>۴۰°C: ۰.۷۹</li>
        <li>۴۵°C: ۰.۷۱</li>
        <li>۵۰°C: ۰.۶۱</li>
      </ul>
      
      <h3>کاهش گروه‌بندی</h3>
      <p>کابل‌های گروه‌بندی شده دفع حرارت را کاهش می‌دهند. عوامل گروه‌بندی را اعمال کنید:</p>
      
      <ul>
        <li>۱ کابل: ۱.۰۰</li>
        <li>۲ کابل: ۰.۸۰</li>
        <li>۳ کابل: ۰.۷۰</li>
        <li>۴-۶ کابل: ۰.۶۵</li>
        <li>۷-۹ کابل: ۰.۶۰</li>
        <li>۱۰+ کابل: ۰.۵۰</li>
      </ul>
      
      <h2>مرحله 4: افت ولتاژ را محاسبه کنید</h2>
      <p>تأیید کنید که افت ولتاژ در محدوده قابل قبول است (معمولاً ۳-۵٪):</p>
      
      <pre class="code-block"><code>// افت ولتاژ تک‌فاز
VD = (2 × I × R × L) / 1000

// افت ولتاژ سه‌فاز
VD = (√3 × I × R × L) / 1000

که در آن:
VD = افت ولتاژ (ولت)
I = جریان (آمپر)
R = مقاومت در کیلومتر (Ω/km)
L = طول کابل (متر)

// درصد افت ولتاژ
VD% = (VD / V) × 100</code></pre>
      
      <div class="callout-box callout-tip">
        <h4>مقادیر مقاومت</h4>
        <p>مقاومت مس (Ω/km): ۱.۵ میلی‌متر مربع=۱۲.۱، ۲.۵ میلی‌متر مربع=۷.۴۱، ۴ میلی‌متر مربع=۴.۶۱، ۶ میلی‌متر مربع=۳.۰۸، ۱۰ میلی‌متر مربع=۱.۸۳</p>
      </div>
      
      <h2>مرحله 5: رتبه اتصال کوتاه را تأیید کنید</h2>
      <p>تأیید کنید که کابل می‌تواند جریان اتصال کوتاه احتمالی را تحمل کند. رتبه اتصال کوتاه به موارد زیر بستگی دارد:</p>
      
      <ul>
        <li>اندازه هادی</li>
        <li>نوع عایق</li>
        <li>مدت خطا (معمولاً ۱-۳ ثانیه)</li>
        <li>ویژگی‌های دستگاه حفاظتی</li>
      </ul>
      
      <h2>مرحله 6: انتخاب نهایی</h2>
      <p>کوچکترین اندازه کابل را که تمام الزامات را برآورده می‌کند انتخاب کنید:</p>
      
      <ol>
        <li>ظرفیت جریان ≥ جریان بار (با کاهش اعمال شده)</li>
        <li>افت ولتاژ ≤ ۳-۵٪</li>
        <li>رتبه اتصال کوتاه ≥ جریان خطا</li>
        <li>ملاحظات اقتصادی (هزینه در برابر عملکرد)</li>
      </ol>
      
      <h2>اشتباهات رایج برای جلوگیری</h2>
      
      <ul>
        <li><strong>نادیده گرفتن عوامل کاهش:</strong> همیشه دمای محیط و گروه‌بندی کابل را در نظر بگیرید</li>
        <li><strong>استفاده از مقادیر مقاومت اشتباه:</strong> مقادیر را برای ماده هادی و دمای صحیح استفاده کنید</li>
        <li><strong>کم‌تخمین جریان بار:</strong> رشد بار آینده و جریان‌های شروع را در نظر بگیرید</li>
        <li><strong>نادیده گرفتن افت ولتاژ:</strong> اجراهای کابل طولانی به هادی‌های بزرگتر نیاز دارند</li>
        <li><strong>روش نصب اشتباه:</strong> روش‌های مختلف رتبه‌های ظرفیت جریان متفاوتی دارند</li>
      </ul>
      
      <h2>نتیجه‌گیری</h2>
      <p>اندازه‌گیری صحیح کابل نیاز به در نظرگیری دقیق چندین عامل دارد. دنبال کردن این رویکرد سیستماتیک نصب‌های الکتریکی ایمن، کارآمد و مطابق با کد را تضمین می‌کند. برای پروژه‌های پیچیده یا کاربردهای خاص، با تیم مهندسی ستاره کرمان برای راهنمایی کارشناسانه مشورت کنید.</p>
      
      <p><a href="/blog/ampacity-chart-reference">مرجع نمودار ظرفیت جریان</a> ما را برای داده‌های دقیق ظرفیت حمل جریان ببینید.</p>
    `,
  },
  
  author: 'Setareh Kerman Engineering Team',
  publishDate: '2024-01-23',
  featuredImage: '/og-image.jpg',
  
  linksToPillar: false,
  internalLinks: [
    'ampacity-chart-reference',
    'voltage-drop-calculation-guide',
    'low-voltage-cables-guide',
  ],
  
  faqs: [
    {
      question: {
        en: 'What is the most important factor in cable sizing?',
        fa: 'مهم‌ترین عامل در اندازه‌گیری کابل چیست؟',
      },
      answer: {
        en: 'Current carrying capacity (ampacity) is the primary factor, but voltage drop, short-circuit rating, and derating factors must also be considered for safe and efficient operation.',
        fa: 'ظرفیت حمل جریان (ظرفیت جریان) عامل اصلی است، اما افت ولتاژ، رتبه اتصال کوتاه و عوامل کاهش نیز باید برای عملکرد ایمن و کارآمد در نظر گرفته شوند.',
      },
    },
    {
      question: {
        en: 'What is the maximum allowable voltage drop?',
        fa: 'حداکثر افت ولتاژ مجاز چیست؟',
      },
      answer: {
        en: 'Industry standards typically limit voltage drop to 3-5% for power circuits. Lower voltage drop (3%) is preferred for sensitive equipment, while 5% may be acceptable for general applications.',
        fa: 'استانداردهای صنعتی معمولاً افت ولتاژ را برای مدارهای برق به ۳-۵٪ محدود می‌کنند. افت ولتاژ کمتر (۳٪) برای تجهیزات حساس ترجیح داده می‌شود، در حالی که ۵٪ ممکن است برای کاربردهای عمومی قابل قبول باشد.',
      },
    },
  ],
  
  ctas: [
    {
      type: 'consultation',
      location: 'after-introduction',
      text: {
        en: 'Need Help with Cable Sizing?',
        fa: 'نیاز به کمک در اندازه‌گیری کابل دارید؟',
      },
    },
    {
      type: 'catalog',
      location: 'after-content',
      text: {
        en: 'Download Cable Catalog',
        fa: 'کاتالوگ کابل را دانلود کنید',
      },
    },
  ],
});

// Export metadata for SEO
export const cableSizingBasicsMetadata = {
  en: generateAllMetadata(cableSizingBasicsArticle, 'en'),
  fa: generateAllMetadata(cableSizingBasicsArticle, 'fa'),
};
