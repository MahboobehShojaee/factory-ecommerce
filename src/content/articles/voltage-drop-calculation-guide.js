/**
 * Voltage Drop Calculation Guide - Technical Guide
 * Step-by-step guide to voltage drop calculations
 * 
 * This technical guide leverages:
 * - Article template system
 * - Technical guide template
 * - Typography components (CodeBlock, CalloutBox)
 * - Internal linking to related articles
 * - Bilingual support (English + Persian)
 */

import { createArticle } from './articleTemplate.js';
import { generateAllMetadata } from './metadataTemplate.js';

export const voltageDropGuideArticle = createArticle({
  slug: 'voltage-drop-calculation-guide',
  contentType: 'guide',
  topicalCluster: 'cable-types',
  category: 'technical',
  tags: ['voltage-drop', 'calculations', 'cable-sizing', 'electrical-design', 'technical-guide'],
  
  primaryKeyword: 'voltage drop calculation',
  secondaryKeywords: [
    'voltage drop formula',
    'cable voltage drop',
    'electrical voltage loss',
    'cable sizing calculations',
    'IEC voltage drop limits',
  ],
  
  metaDescription: {
    en: 'Step-by-step guide to voltage drop calculations for electrical cables. Learn formulas, methods, and IEC standards for calculating voltage drop in power circuits.',
    fa: 'راهنمای گام به گام محاسبات افت ولتاژ برای کابل‌های الکتریکی. فرمول‌ها، روش‌ها و استانداردهای IEC را برای محاسبه افت ولتاژ در مدارهای برق یاد بگیرید.',
  },
  
  title: {
    en: 'Voltage Drop Calculation Guide: Step-by-Step Electrical Design',
    fa: 'راهنمای محاسبه افت ولتاژ: طراحی الکتریکی گام به گام',
  },
  
  excerpt: {
    en: 'Voltage drop is a critical factor in electrical design that affects equipment performance and energy efficiency. This guide provides comprehensive methods for calculating voltage drop in cables, including formulas, examples, and IEC standards compliance.',
    fa: 'افت ولتاژ عامل حیاتی در طراحی الکتریکی است که بر عملکرد تجهیزات و کارایی انرژی تأثیر می‌گذارد. این راهنما روش‌های جامع برای محاسبه افت ولتاژ در کابل‌ها، از جمله فرمول‌ها، مثال‌ها و انطباق با استانداردهای IEC ارائه می‌دهد.',
  },
  
  content: {
    en: `
      <h2>Understanding Voltage Drop</h2>
      <p>Voltage drop is the reduction in electrical potential as current flows through a conductor due to the conductor's resistance. Excessive voltage drop can cause equipment malfunction, reduced efficiency, and increased energy costs. Proper voltage drop calculation is essential for safe and efficient electrical system design.</p>
      
      <div class="callout-box callout-important">
        <h4>Why It Matters</h4>
        <p>Voltage drop directly affects equipment performance. Motors may run slower, lights may dim, and electronic devices may malfunction if voltage drop exceeds acceptable limits.</p>
      </div>
      
      <h2>Voltage Drop Limits</h2>
      
      <h3>IEC Standards</h3>
      <p>IEC standards recommend limiting voltage drop to:</p>
      <ul>
        <li><strong>3% for lighting circuits:</strong> Ensures consistent illumination</li>
        <li><strong>5% for power circuits:</strong> Acceptable for most equipment</li>
        <li><strong>Maximum 8% total:</strong> From supply point to final load</li>
      </ul>
      
      <h3>Local Requirements</h3>
      <p>Always verify local electrical codes as they may have different voltage drop requirements. Some jurisdictions may require stricter limits for specific applications.</p>
      
      <h2>Voltage Drop Formulas</h2>
      
      <h3>Single-Phase Circuits</h3>
      <p>For single-phase AC circuits:</p>
      
      <pre class="code-block"><code>VD = (2 × I × R × L) / 1000

Where:
VD = Voltage Drop (Volts)
I = Current (Amps)
R = Resistance per km (Ω/km)
L = Cable length (meters)

Percentage voltage drop:
VD% = (VD / V) × 100</code></pre>
      
      <h3>Three-Phase Circuits</h3>
      <p>For three-phase AC circuits:</p>
      
      <pre class="code-block"><code>VD = (√3 × I × R × L) / 1000

Where:
VD = Voltage Drop (Volts)
I = Current (Amps)
R = Resistance per km (Ω/km)
L = Cable length (meters)

Percentage voltage drop:
VD% = (VD / V) × 100</code></pre>
      
      <h3>DC Circuits</h3>
      <p>For DC circuits:</p>
      
      <pre class="code-block"><code>VD = (2 × I × R × L) / 1000

Where:
VD = Voltage Drop (Volts)
I = Current (Amps)
R = Resistance per km (Ω/km)
L = Cable length (meters)</code></pre>
      
      <h2>Conductor Resistance Values</h2>
      
      <h3>Copper Resistance (Ω/km at 20°C)</h3>
      <ul>
        <li>1.5mm²: 12.1 Ω/km</li>
        <li>2.5mm²: 7.41 Ω/km</li>
        <li>4mm²: 4.61 Ω/km</li>
        <li>6mm²: 3.08 Ω/km</li>
        <li>10mm²: 1.83 Ω/km</li>
        <li>16mm²: 1.15 Ω/km</li>
        <li>25mm²: 0.727 Ω/km</li>
        <li>35mm²: 0.524 Ω/km</li>
        <li>50mm²: 0.387 Ω/km</li>
      </ul>
      
      <h3>Aluminum Resistance (Ω/km at 20°C)</h3>
      <p>Aluminum has approximately 1.6 times higher resistance than copper for the same cross-sectional area. Use copper resistance values multiplied by 1.6 for aluminum conductors.</p>
      
      <div class="callout-box callout-tip">
        <h4>Temperature Correction</h4>
        <p>Resistance increases with temperature. For operating temperatures above 20°C, apply temperature correction factor: R₂ = R₁ × [1 + α(T₂ - 20)], where α = 0.00393 for copper.</p>
      </div>
      
      <h2>Step-by-Step Calculation Example</h2>
      
      <h3>Example: Three-Phase Motor</h3>
      <p>Calculate voltage drop for a 15kW three-phase motor at 400V, 50m cable run, using 6mm² copper conductor:</p>
      
      <pre class="code-block"><code>Step 1: Calculate current
I = P / (√3 × V × PF × η)
I = 15,000 / (1.732 × 400 × 0.85 × 0.9)
I = 28.3A

Step 2: Get resistance
R = 3.08 Ω/km (for 6mm² copper)

Step 3: Calculate voltage drop
VD = (√3 × I × R × L) / 1000
VD = (1.732 × 28.3 × 3.08 × 50) / 1000
VD = 7.56V

Step 4: Calculate percentage
VD% = (7.56 / 400) × 100
VD% = 1.89%

Result: 1.89% voltage drop (below 5% limit) ✓</code></pre>
      
      <h2>Reducing Voltage Drop</h2>
      
      <h3>Increase Conductor Size</h3>
      <p>The most effective method is to use a larger conductor. Larger conductors have lower resistance, reducing voltage drop proportionally.</p>
      
      <h3>Reduce Cable Length</h3>
      <p>Shorter cable runs reduce voltage drop. Consider locating equipment closer to the power source or using distributed power supplies.</p>
      
      <h3>Use Higher Voltage</h3>
      <p>Higher voltage systems have lower current for the same power, reducing voltage drop. Consider 480V instead of 240V for large installations.</p>
      
      <h3>Improve Power Factor</h3>
      <p>Power factor correction reduces current, which reduces voltage drop. Install power factor correction capacitors for inductive loads.</p>
      
      <h2>Common Mistakes to Avoid</h2>
      
      <ul>
        <li><strong>Using wrong formula:</strong> Ensure you use the correct formula for single-phase, three-phase, or DC circuits</li>
        <li><strong>Ignoring temperature:</strong> Resistance increases with operating temperature</li>
        <li><strong>Wrong resistance values:</strong> Use values for the correct conductor material and size</li>
        <li><strong>Forgetting return path:</strong> Single-phase and DC circuits have twice the voltage drop (out and back)</li>
        <li><strong>Not considering load growth:</strong> Design for future load increases</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Proper voltage drop calculation is essential for efficient electrical system design. Following the formulas and methods in this guide ensures your installations meet IEC standards and operate efficiently. For complex projects or special applications, consult with Setareh Kerman's engineering team for expert guidance.</p>
      
      <p>See our <a href="/blog/cable-sizing-basics">cable sizing basics guide</a> for comprehensive cable selection information.</p>
    `,
    
    fa: `
      <h2>درک افت ولتاژ</h2>
      <p>افت ولتاژ کاهش پتانسیل الکتریکی به عنوان جریان از طریق یک هادی به دلیل مقاومت هادی جریان می‌یابد. افت ولتاژ بیش از حد می‌تواند باعث نقص تجهیزات، کاهش کارایی و افزایش هزینه‌های انرژی شود. محاسبه صحیح افت ولتاژ برای طراحی سیستم الکتریکی ایمن و کارآمد ضروری است.</p>
      
      <div class="callout-box callout-important">
        <h4>چرا مهم است</h4>
        <p>افت ولتاژ به طور مستقیم بر عملکرد تجهیزات تأثیر می‌گذارد. موتورها ممکن است کندتر اجرا شوند، چراغ‌ها ممکن است کم‌نور شوند و دستگاه‌های الکترونیکی ممکن است اگر افت ولتاژ از محدوده قابل قبول تجاوز کند، نقص داشته باشند.</p>
      </div>
      
      <h2>محدودیت‌های افت ولتاژ</h2>
      
      <h3>استانداردهای IEC</h3>
      <p>استانداردهای IEC توصیه می‌کنند افت ولتاژ را محدود کنید به:</p>
      <ul>
        <li><strong>۳٪ برای مدارهای روشنایی:</strong> روشنایی ثابت را تضمین می‌کند</li>
        <li><strong>۵٪ برای مدارهای برق:</strong> برای اکثر تجهیزات قابل قبول است</li>
        <li><strong>حداکثر ۸٪ کل:</strong> از نقطه تأمین تا بار نهایی</li>
      </ul>
      
      <h3>الزامات محلی</h3>
      <p>همیشه کدهای الکتریکی محلی را تأیید کنید زیرا ممکن است الزامات افت ولتاژ متفاوتی داشته باشند. برخی حوزه‌های قضایی ممکن است محدودیت‌های سخت‌گیرانه‌تری برای کاربردهای خاص نیاز داشته باشند.</p>
      
      <h2>فرمول‌های افت ولتاژ</h2>
      
      <h3>مدارهای تک‌فاز</h3>
      <p>برای مدارهای AC تک‌فاز:</p>
      
      <pre class="code-block"><code>VD = (2 × I × R × L) / 1000

که در آن:
VD = افت ولتاژ (ولت)
I = جریان (آمپر)
R = مقاومت در کیلومتر (Ω/km)
L = طول کابل (متر)

درصد افت ولتاژ:
VD% = (VD / V) × 100</code></pre>
      
      <h3>مدارهای سه‌فاز</h3>
      <p>برای مدارهای AC سه‌فاز:</p>
      
      <pre class="code-block"><code>VD = (√3 × I × R × L) / 1000

که در آن:
VD = افت ولتاژ (ولت)
I = جریان (آمپر)
R = مقاومت در کیلومتر (Ω/km)
L = طول کابل (متر)

درصد افت ولتاژ:
VD% = (VD / V) × 100</code></pre>
      
      <h3>مدارهای DC</h3>
      <p>برای مدارهای DC:</p>
      
      <pre class="code-block"><code>VD = (2 × I × R × L) / 1000

که در آن:
VD = افت ولتاژ (ولت)
I = جریان (آمپر)
R = مقاومت در کیلومتر (Ω/km)
L = طول کابل (متر)</code></pre>
      
      <h2>مقادیر مقاومت هادی</h2>
      
      <h3>مقاومت مس (Ω/km در ۲۰°C)</h3>
      <ul>
        <li>۱.۵ میلی‌متر مربع: ۱۲.۱ Ω/km</li>
        <li>۲.۵ میلی‌متر مربع: ۷.۴۱ Ω/km</li>
        <li>۴ میلی‌متر مربع: ۴.۶۱ Ω/km</li>
        <li>۶ میلی‌متر مربع: ۳.۰۸ Ω/km</li>
        <li>۱۰ میلی‌متر مربع: ۱.۸۳ Ω/km</li>
        <li>۱۶ میلی‌متر مربع: ۱.۱۵ Ω/km</li>
        <li>۲۵ میلی‌متر مربع: ۰.۷۲۷ Ω/km</li>
        <li>۳۵ میلی‌متر مربع: ۰.۵۲۴ Ω/km</li>
        <li>۵۰ میلی‌متر مربع: ۰.۳۸۷ Ω/km</li>
      </ul>
      
      <h3>مقاومت آلومینیوم (Ω/km در ۲۰°C)</h3>
      <p>آلومینیوم مقاومت تقریباً ۱.۶ برابر بالاتری نسبت به مس برای همان سطح مقطع دارد. از مقادیر مقاومت مس ضرب در ۱.۶ برای هادی‌های آلومینیوم استفاده کنید.</p>
      
      <div class="callout-box callout-tip">
        <h4>اصلاح دما</h4>
        <p>مقاومت با دما افزایش می‌یابد. برای دماهای کاری بالاتر از ۲۰°C، عامل اصلاح دما را اعمال کنید: R₂ = R₁ × [۱ + α(T₂ - ۲۰)]، که در آن α = ۰.۰۰۳۹۳ برای مس است.</p>
      </div>
      
      <h2>مثال محاسبه گام به گام</h2>
      
      <h3>مثال: موتور سه‌فاز</h3>
      <p>افت ولتاژ را برای یک موتور سه‌فاز ۱۵ کیلووات در ۴۰۰ ولت، اجرای کابل ۵۰ متر، با استفاده از هادی مس ۶ میلی‌متر مربع محاسبه کنید:</p>
      
      <pre class="code-block"><code>مرحله 1: جریان را محاسبه کنید
I = P / (√3 × V × PF × η)
I = ۱۵،۰۰۰ / (۱.۷۳۲ × ۴۰۰ × ۰.۸۵ × ۰.۹)
I = ۲۸.۳A

مرحله 2: مقاومت را دریافت کنید
R = ۳.۰۸ Ω/km (برای ۶ میلی‌متر مربع مس)

مرحله 3: افت ولتاژ را محاسبه کنید
VD = (√3 × I × R × L) / 1000
VD = (۱.۷۳۲ × ۲۸.۳ × ۳.۰۸ × ۵۰) / 1000
VD = ۷.۵۶V

مرحله 4: درصد را محاسبه کنید
VD% = (۷.۵۶ / ۴۰۰) × 100
VD% = ۱.۸۹%

نتیجه: ۱.۸۹٪ افت ولتاژ (زیر محدودیت ۵٪) ✓</code></pre>
      
      <h2>کاهش افت ولتاژ</h2>
      
      <h3>اندازه هادی را افزایش دهید</h3>
      <p>موثرترین روش استفاده از هادی بزرگتر است. هادی‌های بزرگتر مقاومت پایین‌تری دارند و افت ولتاژ را به نسبت کاهش می‌دهند.</p>
      
      <h3>طول کابل را کاهش دهید</h3>
      <p>اجراهای کابل کوتاه‌تر افت ولتاژ را کاهش می‌دهند. در نظر بگیرید تجهیزات را نزدیک‌تر به منبع برق قرار دهید یا از منابع برق توزیع شده استفاده کنید.</p>
      
      <h3>از ولتاژ بالاتر استفاده کنید</h3>
      <p>سیستم‌های ولتاژ بالاتر جریان کمتری برای همان توان دارند و افت ولتاژ را کاهش می‌دهند. برای نصب‌های بزرگ ۴۸۰ ولت را به جای ۲۴۰ ولت در نظر بگیرید.</p>
      
      <h3>ضریب توان را بهبود دهید</h3>
      <p>اصلاح ضریب توان جریان را کاهش می‌دهد که افت ولتاژ را کاهش می‌دهد. خازن‌های اصلاح ضریب توان را برای بارهای القایی نصب کنید.</p>
      
      <h2>اشتباهات رایج برای جلوگیری</h2>
      
      <ul>
        <li><strong>استفاده از فرمول اشتباه:</strong> اطمینان حاصل کنید که فرمول صحیح را برای مدارهای تک‌فاز، سه‌فاز یا DC استفاده کنید</li>
        <li><strong>نادیده گرفتن دما:</strong> مقاومت با دمای کاری افزایش می‌یابد</li>
        <li><strong>مقادیر مقاومت اشتباه:</strong> مقادیر را برای ماده و اندازه هادی صحیح استفاده کنید</li>
        <li><strong>فراموش کردن مسیر بازگشت:</strong> مدارهای تک‌فاز و DC دو برابر افت ولتاژ دارند (خروج و بازگشت)</li>
        <li><strong>در نظر نگرفتن رشد بار:</strong> برای افزایش بار آینده طراحی کنید</li>
      </ul>
      
      <h2>نتیجه‌گیری</h2>
      <p>محاسبه صحیح افت ولتاژ برای طراحی سیستم الکتریکی کارآمد ضروری است. دنبال کردن فرمول‌ها و روش‌های این راهنما تضمین می‌کند که نصب‌های شما با استانداردهای IEC مطابقت دارند و به طور کارآمد کار می‌کنند. برای پروژه‌های پیچیده یا کاربردهای خاص، با تیم مهندسی ستاره کرمان برای راهنمایی کارشناسانه مشورت کنید.</p>
      
      <p><a href="/blog/cable-sizing-basics">راهنمای اصول اندازه‌گیری کابل</a> ما را برای اطلاعات جامع انتخاب کابل ببینید.</p>
    `,
  },
  
  author: 'Setareh Kerman Engineering Team',
  publishDate: '2024-01-25',
  featuredImage: '/og-image.jpg',
  
  linksToPillar: false,
  internalLinks: [
    'cable-sizing-basics',
    'low-voltage-cables-guide',
    'ampacity-chart-reference',
  ],
  
  faqs: [
    {
      question: {
        en: 'What is the maximum allowable voltage drop?',
        fa: 'حداکثر افت ولتاژ مجاز چیست؟',
      },
      answer: {
        en: 'IEC standards recommend 3% for lighting circuits and 5% for power circuits, with a maximum total of 8% from supply point to final load. Local codes may have different requirements.',
        fa: 'استانداردهای IEC ۳٪ برای مدارهای روشنایی و ۵٪ برای مدارهای برق توصیه می‌کنند، با حداکثر کل ۸٪ از نقطه تأمین تا بار نهایی. کدهای محلی ممکن است الزامات متفاوتی داشته باشند.',
      },
    },
    {
      question: {
        en: 'How do I reduce voltage drop?',
        fa: 'چگونه افت ولتاژ را کاهش دهم؟',
      },
      answer: {
        en: 'Increase conductor size, reduce cable length, use higher voltage systems, or improve power factor. Increasing conductor size is the most effective method for reducing voltage drop.',
        fa: 'اندازه هادی را افزایش دهید، طول کابل را کاهش دهید، از سیستم‌های ولتاژ بالاتر استفاده کنید یا ضریب توان را بهبود دهید. افزایش اندازه هادی موثرترین روش برای کاهش افت ولتاژ است.',
      },
    },
  ],
  
  ctas: [
    {
      type: 'consultation',
      location: 'after-introduction',
      text: {
        en: 'Need Help with Voltage Drop Calculations?',
        fa: 'نیاز به کمک در محاسبات افت ولتاژ دارید؟',
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
export const voltageDropGuideMetadata = {
  en: generateAllMetadata(voltageDropGuideArticle, 'en'),
  fa: generateAllMetadata(voltageDropGuideArticle, 'fa'),
};
