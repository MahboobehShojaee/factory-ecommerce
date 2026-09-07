/**
 * Low Voltage Cables - Cluster Article
 * Focused deep-dive on low voltage cable types and applications
 * 
 * This cluster article leverages:
 * - Article template system
 * - Typography components
 * - Technical table components
 * - TOC system
 * - Breadcrumb system
 * - Internal linking to pillar page
 * - Bilingual support (English + Persian)
 */

import { createArticle, clusterArticleTemplate } from './articleTemplate.js';
import { generateAllMetadata } from './metadataTemplate.js';

export const lowVoltageCablesArticle = createArticle({
  slug: 'low-voltage-cables-guide',
  contentType: 'cluster',
  topicalCluster: 'cable-types',
  category: 'technical',
  tags: ['low-voltage', 'power-cables', 'xlpe', 'pvc', 'cable-types'],
  
  primaryKeyword: 'low voltage cables',
  secondaryKeywords: [
    'LV power cables',
    '0.6/1kV cables',
    'building wiring',
    'industrial LV cables',
    'cable specifications',
  ],
  
  metaDescription: {
    en: 'Comprehensive guide to low voltage cables (0.6/1kV). Learn about LV cable types, specifications, applications, and selection criteria for building wiring and industrial installations.',
    fa: 'راهنمای جامع کابل‌های ولتاژ پایین (۰.۶/۱ کیلوولت). درباره انواع کابل LV، مشخصات، کاربردها و معیارهای انتخاب برای سیم‌کشی ساختمان و نصب‌های صنعتی اطلاعات کسب کنید.',
  },
  
  title: {
    en: 'Low Voltage Cables: Complete Guide to 0.6/1kV Power Cables',
    fa: 'کابل‌های ولتاژ پایین: راهنمای جامع کابل‌های برق ۰.۶/۱ کیلوولت',
  },
  
  excerpt: {
    en: 'Low voltage cables (0.6/1kV) are the backbone of electrical distribution systems in buildings, industrial facilities, and infrastructure. This guide covers LV cable types, construction, standards, and applications to help you select the right cables for your project.',
    fa: 'کابل‌های ولتاژ پایین (۰.۶/۱ کیلوولت) ستون فقرات سیستم‌های توزیع برق در ساختمان‌ها، تأسیسات صنعتی و زیرساخت‌ها هستند. این راهنما انواع کابل LV، ساختار، استانداردها و کاربردها را پوشش می‌دهد تا به شما در انتخاب کابل‌های مناسب برای پروژه خود کمک کند.',
  },
  
  content: {
    en: `
      <h2>Understanding Low Voltage Cables</h2>
      <p><span class="technical-term" title="Power cables designed for voltages up to 1kV, typically rated at 0.6/1kV for distribution systems">Low voltage (LV) cables</span> are essential components in electrical distribution systems, carrying power from transformers to end-use equipment. These cables operate at voltages up to 1,000V AC and are used extensively in building wiring, industrial facilities, and infrastructure projects.</p>
      
      <div class="callout-box callout-important">
        <h4>Voltage Rating</h4>
        <p>LV cables are typically rated at 0.6/1kV (600V phase-to-ground, 1,000V phase-to-phase). This rating is standard for most building and industrial distribution systems worldwide.</p>
      </div>
      
      <h2>LV Cable Construction</h2>
      <p>Low voltage cables consist of several key components:</p>
      
      <ul>
        <li><strong>Conductor:</strong> Copper or aluminum strands carrying electrical current</li>
        <li><strong>Insulation:</strong> PVC or XLPE material isolating the conductor</li>
        <li><strong>Bedding:</strong> Protective layer between insulation and armor</li>
        <li><strong>Armor:</strong> Mechanical protection (steel wire or tape, aluminum)</li>
        <li><strong>Outer Sheath:</strong> Final protective layer against environmental factors</li>
      </ul>
      
      <h2>Insulation Materials for LV Cables</h2>
      <p>LV cables commonly use two insulation materials:</p>
      
      <h3>PVC Insulation</h3>
      <p><span class="technical-term" title="Polyvinyl chloride, a thermoplastic insulation material suitable for low-voltage applications">PVC</span> insulation is cost-effective and suitable for most building wiring applications. It offers good flexibility and adequate performance for temperatures up to 70°C.</p>
      
      <h3>XLPE Insulation</h3>
      <p><span class="technical-term" title="Cross-linked polyethylene, a thermoset insulation with superior thermal properties">XLPE</span> insulation provides higher temperature ratings (up to 90°C) and better thermal stability, making it suitable for demanding industrial applications.</p>
      
      <div class="callout-box callout-tip">
        <h4>Selection Tip</h4>
        <p>For a detailed comparison of XLPE vs PVC insulation, see our comprehensive <a href="/blog/xlpe-vs-pvc-insulation-comparison">XLPE vs PVC guide</a>.</p>
      </div>
      
      <h2>LV Cable Types</h2>
      
      <h3>Single-Core Cables</h3>
      <p>Single-core LV cables consist of one insulated conductor and are used for:</p>
      <ul>
        <li>Phase conductors in three-phase systems</li>
        <li>Neutral conductors</li>
        <li>Earth conductors</li>
        <li>High-current applications requiring larger conductor sizes</li>
      </ul>
      
      <h3>Multi-Core Cables</h3>
      <p>Multi-core LV cables contain multiple insulated conductors in a single sheath:</p>
      <ul>
        <li><strong>2-Core:</strong> Single-phase systems (phase + neutral)</li>
        <li><strong>3-Core:</strong> Three-phase systems (3 phases)</li>
        <li><strong>4-Core:</strong> Three-phase + neutral</li>
        <li><strong>5-Core:</strong> Three-phase + neutral + earth</li>
      </ul>
      
      <h2>Armored vs Unarmored LV Cables</h2>
      
      <h3>Armored Cables</h3>
      <p>Armored LV cables include mechanical protection and are used for:</p>
      <ul>
        <li>Underground installations</li>
        <li>Industrial environments with mechanical stress</li>
        <li>Areas with risk of physical damage</li>
        <li>Direct burial applications</li>
      </ul>
      
      <h3>Unarmored Cables</h3>
      <p>Unarmored LV cables are lighter and more flexible, suitable for:</p>
      <ul>
        <li>Indoor installations in cable trays</li>
        <li>Conduit installations</li>
        <li>Above-ground installations with protection</li>
        <li>Building wiring applications</li>
      </ul>
      
      <h2>Applications of LV Cables</h2>
      
      <h3>Building Wiring</h3>
      <p>LV cables are extensively used in:</p>
      <ul>
        <li>Residential buildings</li>
        <li>Commercial buildings</li>
        <li>Office complexes</li>
        <li>Hospitals and educational facilities</li>
      </ul>
      
      <h3>Industrial Applications</h3>
      <p>Industrial facilities use LV cables for:</p>
      <ul>
        <li>Motor connections</li>
        <li>Control circuits</li>
        <li>Lighting systems</li>
        <li>Power distribution within facilities</li>
      </ul>
      
      <h3>Infrastructure</h3>
      <p>Infrastructure projects utilize LV cables for:</p>
      <ul>
        <li>Street lighting</li>
        <li>Traffic signal systems</li>
        <li>Pumping stations</li>
        <li>Utility distribution networks</li>
      </ul>
      
      <h2>Standards and Specifications</h2>
      <p>LV cables must comply with international standards:</p>
      
      <ul>
        <li><strong>IEC 60502-1:</strong> Power cables with extruded insulation</li>
        <li><strong>IEC 60228:</strong> Conductor classes and sizes</li>
        <li><strong>BS 5467:</strong> British standard for armored cables</li>
        <li><strong>National Standards:</strong> Country-specific requirements</li>
      </ul>
      
      <h2>Conductor Selection</h2>
      
      <h3>Copper Conductors</h3>
      <p>Copper conductors offer:</p>
      <ul>
        <li>Higher conductivity</li>
        <li>Better corrosion resistance</li>
        <li>Easier termination</li>
        <li>Higher cost</li>
      </ul>
      
      <h3>Aluminum Conductors</h3>
      <p>Aluminum conductors provide:</p>
      <ul>
        <li>Lower cost</li>
        <li>Lighter weight</li>
        <li>Larger cross-section for same current</li>
        <li>Special termination requirements</li>
      </ul>
      
      <div class="callout-box callout-warning">
        <h4>Conductor Selection</h4>
        <p>For a detailed comparison of copper vs aluminum conductors, see our <a href="/blog/copper-vs-aluminum-conductors">conductor comparison guide</a>.</p>
      </div>
      
      <h2>Cable Sizing Considerations</h2>
      <p>When selecting LV cable sizes, consider:</p>
      
      <ol>
        <li><strong>Current Carrying Capacity:</strong> Must handle load current without overheating</li>
        <li><strong>Voltage Drop:</strong> Keep within acceptable limits (typically 3-5%)</li>
        <li><strong>Short-Circuit Rating:</strong> Withstand fault currents</li>
        <li><strong>Installation Method:</strong> Affects current rating (derating factors)</li>
        <li><strong>Ambient Temperature:</strong> Higher temperatures reduce current capacity</li>
        <li><strong>Grouping:</strong> Cables grouped together require derating</li>
      </ol>
      
      <h2>Installation Best Practices</h2>
      
      <h3>Indoor Installation</h3>
      <ul>
        <li>Use cable trays or conduits for protection</li>
        <li>Maintain minimum bend radius</li>
        <li>Provide adequate support spacing</li>
        <li>Label cables for identification</li>
      </ul>
      
      <h3>Underground Installation</h3>
      <ul>
        <li>Use armored cables for direct burial</li>
        <li>Maintain minimum burial depth</li>
        <li>Provide cable protection (sand, warning tape)</li>
        <li>Consider thermal backfill for high-current cables</li>
      </ul>
      
      <h2>Testing and Commissioning</h2>
      <p>LV cables require testing before commissioning:</p>
      
      <ul>
        <li><strong>Insulation Resistance Test:</strong> Verify insulation integrity</li>
        <li><strong>Continuity Test:</strong> Confirm conductor continuity</li>
        <li><strong>Phase Identification:</strong> Verify phase sequence</li>
        <li><strong>High Voltage Test:</strong> Test insulation strength (optional)</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Low voltage cables are fundamental to electrical distribution systems. Proper selection based on application, environmental conditions, and technical requirements ensures safe, reliable power distribution. Setareh Kerman manufactures high-quality LV cables compliant with international standards, suitable for diverse applications from building wiring to industrial installations.</p>
      
      <p>Contact our engineering team for technical consultation and product recommendations tailored to your specific LV cable requirements.</p>
    `,
    
    fa: `
      <h2>درک کابل‌های ولتاژ پایین</h2>
      <p><span class="technical-term" title="کابل‌های برق طراحی شده برای ولتاژهای تا ۱ کیلوولت، معمولاً رتبه‌بندی شده در ۰.۶/۱ کیلوولت برای سیستم‌های توزیع">کابل‌های ولتاژ پایین (LV)</span> اجزای ضروری در سیستم‌های توزیع برق هستند که برق را از ترانسفورماتورها به تجهیزات نهایی منتقل می‌کنند. این کابل‌ها در ولتاژهای تا ۱۰۰۰ ولت AC کار می‌کنند و به طور گسترده در سیم‌کشی ساختمان، تأسیسات صنعتی و پروژه‌های زیرساختی استفاده می‌شوند.</p>
      
      <div class="callout-box callout-important">
        <h4>رتبه ولتاژ</h4>
        <p>کابل‌های LV معمولاً در ۰.۶/۱ کیلوولت (۶۰۰ ولت فاز به زمین، ۱۰۰۰ ولت فاز به فاز) رتبه‌بندی می‌شوند. این رتبه‌بندی استاندارد برای اکثر سیستم‌های توزیع ساختمان و صنعتی در سراسر جهان است.</p>
      </div>
      
      <h2>ساختار کابل LV</h2>
      <p>کابل‌های ولتاژ پایین از چندین جزء کلیدی تشکیل شده‌اند:</p>
      
      <ul>
        <li><strong>هادی:</strong> رشته‌های مس یا آلومینیوم که جریان الکتریکی را حمل می‌کنند</li>
        <li><strong>عایق:</strong> ماده PVC یا XLPE که هادی را ایزوله می‌کند</li>
        <li><strong>لایه زیرین:</strong> لایه محافظ بین عایق و زره</li>
        <li><strong>زره:</strong> محافظت مکانیکی (سیم یا نوار فولادی، آلومینیوم)</li>
        <li><strong>غلاف خارجی:</strong> لایه محافظ نهایی در برابر عوامل محیطی</li>
      </ul>
      
      <h2>مواد عایق برای کابل‌های LV</h2>
      <p>کابل‌های LV معمولاً از دو ماده عایق استفاده می‌کنند:</p>
      
      <h3>عایق PVC</h3>
      <p>عایق <span class="technical-term" title="پلی‌وینیل کلرید، یک ماده عایق ترموپلاستیک مناسب برای کاربردهای ولتاژ پایین">PVC</span> صرفه اقتصادی است و برای اکثر کاربردهای سیم‌کشی ساختمان مناسب است. انعطاف‌پذیری خوب و عملکرد مناسب برای دماهای تا ۷۰°C ارائه می‌دهد.</p>
      
      <h3>عایق XLPE</h3>
      <p>عایق <span class="technical-term" title="پلی‌اتیلن متصل‌شده، یک عایق ترموست با خواص حرارتی برتر">XLPE</span> رتبه دمای بالاتر (تا ۹۰°C) و پایداری حرارتی بهتر ارائه می‌دهد و آن را برای کاربردهای صنعتی demanding مناسب می‌سازد.</p>
      
      <div class="callout-box callout-tip">
        <h4>نکته انتخاب</h4>
        <p>برای مقایسه دقیق عایق XLPE و PVC، <a href="/blog/xlpe-vs-pvc-insulation-comparison">راهنمای جامع XLPE در برابر PVC</a> ما را ببینید.</p>
      </div>
      
      <h2>انواع کابل LV</h2>
      
      <h3>کابل‌های تک‌هسته</h3>
      <p>کابل‌های LV تک‌هسته از یک هادی عایق‌شده تشکیل شده‌اند و برای موارد زیر استفاده می‌شوند:</p>
      <ul>
        <li>هادی‌های فاز در سیستم‌های سه‌فاز</li>
        <li>هادی‌های نول</li>
        <li>هادی‌های زمین</li>
        <li>کاربردهای جریان بالا که نیاز به اندازه هادی بزرگتر دارند</li>
      </ul>
      
      <h3>کابل‌های چندهسته</h3>
      <p>کابل‌های LV چندهسته شامل چندین هادی عایق‌شده در یک غلاف هستند:</p>
      <ul>
        <li><strong>۲ هسته:</strong> سیستم‌های تک‌فاز (فاز + نول)</li>
        <li><strong>۳ هسته:</strong> سیستم‌های سه‌فاز (۳ فاز)</li>
        <li><strong>۴ هسته:</strong> سه‌فاز + نول</li>
        <li><strong>۵ هسته:</strong> سه‌فاز + نول + زمین</li>
      </ul>
      
      <h2>کابل‌های LV زره‌دار در برابر بدون زره</h2>
      
      <h3>کابل‌های زره‌دار</h3>
      <p>کابل‌های LV زره‌دار شامل محافظت مکانیکی هستند و برای موارد زیر استفاده می‌شوند:</p>
      <ul>
        <li>نصب زیرزمینی</li>
        <li>محیط‌های صنعتی با استرس مکانیکی</li>
        <li>مناطق با خطر آسیب فیزیکی</li>
        <li>کاربردهای دفن مستقیم</li>
      </ul>
      
      <h3>کابل‌های بدون زره</h3>
      <p>کابل‌های LV بدون زره سبک‌تر و انعطاف‌پذیرتر هستند و برای موارد زیر مناسب هستند:</p>
      <ul>
        <li>نصب داخلی در سینی کابل</li>
        <li>نصب در لوله</li>
        <li>نصب بالای زمین با محافظت</li>
        <li>کاربردهای سیم‌کشی ساختمان</li>
      </ul>
      
      <h2>کاربردهای کابل‌های LV</h2>
      
      <h3>سیم‌کشی ساختمان</h3>
      <p>کابل‌های LV به طور گسترده در موارد زیر استفاده می‌شوند:</p>
      <ul>
        <li>ساختمان‌های مسکونی</li>
        <li>ساختمان‌های تجاری</li>
        <li>مجتمع‌های اداری</li>
        <li>بیمارستان‌ها و امکانات آموزشی</li>
      </ul>
      
      <h3>کاربردهای صنعتی</h3>
      <p>تأسیسات صنعتی کابل‌های LV را برای موارد زیر استفاده می‌کنند:</p>
      <ul>
        <li>اتصالات موتور</li>
        <li>مدارهای کنترلی</li>
        <li>سیستم‌های روشنایی</li>
        <li>توزیع برق در تأسیسات</li>
      </ul>
      
      <h3>زیرساخت</h3>
      <p>پروژه‌های زیرساختی کابل‌های LV را برای موارد زیر استفاده می‌کنند:</p>
      <ul>
        <li>روشنایی خیابان</li>
        <li>سیستم‌های سیگنال ترافیکی</li>
        <li>ایستگاه‌های پمپاژ</li>
        <li>شبکه‌های توزیع公用事业</li>
      </ul>
      
      <h2>استانداردها و مشخصات</h2>
      <p>کابل‌های LV باید با استانداردهای بین‌المللی مطابقت داشته باشند:</p>
      
      <ul>
        <li><strong>IEC 60502-1:</strong> کابل‌های برق با عایق اکسترود شده</li>
        <li><strong>IEC 60228:</strong> کلاس‌ها و اندازه‌های هادی</li>
        <li><strong>BS 5467:</strong> استاندارد بریتانیا برای کابل‌های زره‌دار</li>
        <li><strong>استانداردهای ملی:</strong> الزامات خاص کشور</li>
      </ul>
      
      <h2>انتخاب هادی</h2>
      
      <h3>هادی‌های مس</h3>
      <p>هادی‌های مس ارائه می‌دهند:</p>
      <ul>
        <li>هدایت بالاتر</li>
        <li>مقاومت خوردگی بهتر</li>
        <li>پایانی‌سازی آسان‌تر</li>
        <li>هزینه بالاتر</li>
      </ul>
      
      <h3>هادی‌های آلومینیوم</h3>
      <p>هادی‌های آلومینیوم ارائه می‌دهند:</p>
      <ul>
        <li>هزینه کمتر</li>
        <li>وزن سبک‌تر</li>
        <li>سطح مقطع بزرگتر برای همان جریان</li>
        <li>الزامات پایانی‌سازی خاص</li>
      </ul>
      
      <div class="callout-box callout-warning">
        <h4>انتخاب هادی</h4>
        <p>برای مقایسه دقیق هادی‌های مس و آلومینیوم، <a href="/blog/copper-vs-aluminum-conductors">راهنمای مقایسه هادی</a> ما را ببینید.</p>
      </div>
      
      <h2>ملاحظات اندازه‌گیری کابل</h2>
      <p>هنگام انتخاب اندازه کابل LV، موارد زیر را در نظر بگیرید:</p>
      
      <ol>
        <li><strong>ظرفیت حمل جریان:</strong> باید جریان بار را بدون گرم شدن بیش از حد تحمل کند</li>
        <li><strong>افت ولتاژ:</strong> در محدوده قابل قبول نگه دارید (معمولاً ۳-۵٪)</li>
        <li><strong>رتبه اتصال کوتاه:</strong> تحمل جریان‌های خطا</li>
        <li><strong>روش نصب:</strong> بر رتبه جریان تأثیر می‌گذارد (عوامل کاهش)</li>
        <li><strong>دمای محیط:</strong> دماهای بالاتر ظرفیت جریان را کاهش می‌دهند</li>
        <li><strong>گروه‌بندی:</strong> کابل‌های گروه‌بندی شده نیاز به کاهش دارند</li>
      </ol>
      
      <h2>بهترین شیوه‌های نصب</h2>
      
      <h3>نصب داخلی</h3>
      <ul>
        <li>از سینی کابل یا لوله برای محافظت استفاده کنید</li>
        <li>شعاع خمشی حداقل را حفظ کنید</li>
        <li>فاصله پشتیبانی کافی ارائه دهید</li>
        <li>کابل‌ها را برای شناسایی برچسب‌گذاری کنید</li>
      </ul>
      
      <h3>نصب زیرزمینی</h3>
      <ul>
        <li>از کابل‌های زره‌دار برای دفن مستقیم استفاده کنید</li>
        <li>عمق دفن حداقل را حفظ کنید</li>
        <li>محافظت کابل (شن، نوار هشدار) ارائه دهید</li>
        <li>پر حرارتی را برای کابل‌های جریان بالا در نظر بگیرید</li>
      </ul>
      
      <h2>تست و راه‌اندازی</h2>
      <p>کابل‌های LV قبل از راه‌اندازی نیاز به تست دارند:</p>
      
      <ul>
        <li><strong>تست مقاومت عایق:</strong> یکپارچگی عایق را تأیید کنید</li>
        <li><strong>تست پیوستگی:</strong> پیوستگی هادی را تأیید کنید</li>
        <li><strong>شناسایی فاز:</strong> توالی فاز را تأیید کنید</li>
        <li><strong>تست ولتاژ بالا:</strong> قدرت عایق را تست کنید (اختیاری)</li>
      </ul>
      
      <h2>نتیجه‌گیری</h2>
      <p>کابل‌های ولتاژ پایین بنیادی برای سیستم‌های توزیع برق هستند. انتخاب مناسب بر اساس کاربرد، شرایط محیطی و الزامات فنی، توزیع برق ایمن و قابل اعتماد را تضمین می‌کند. ستاره کرمان کابل‌های LV با کیفیت بالا مطابق با استانداردهای بین‌المللی تولید می‌کند که برای کاربردهای متنوع از سیم‌کشی ساختمان تا نصب‌های صنعتی مناسب هستند.</p>
      
      <p>برای مشاوره فنی و توصیه محصول متناسب با الزامات خاص کابل LV خود با تیم مهندسی ما تماس بگیرید.</p>
    `,
  },
  
  author: 'Setareh Kerman Engineering Team',
  publishDate: '2024-01-21',
  featuredImage: '/og-image.jpg',
  
  linksToPillar: true,
  pillarPage: 'xlpe-vs-pvc-insulation-comparison',
  internalLinks: [
    'cable-sizing-calculations',
    'copper-vs-aluminum-conductors',
    'installation-best-practices',
  ],
  
  faqs: [
    {
      question: {
        en: 'What is the voltage rating of low voltage cables?',
        fa: 'رتبه ولتاژ کابل‌های ولتاژ پایین چیست؟',
      },
      answer: {
        en: 'Low voltage cables are typically rated at 0.6/1kV (600V phase-to-ground, 1,000V phase-to-phase). This is the standard rating for building and industrial distribution systems.',
        fa: 'کابل‌های ولتاژ پایین معمولاً در ۰.۶/۱ کیلوولت (۶۰۰ ولت فاز به زمین، ۱۰۰۰ ولت فاز به فاز) رتبه‌بندی می‌شوند. این رتبه‌بندی استاندارد برای سیستم‌های توزیع ساختمان و صنعتی است.',
      },
    },
    {
      question: {
        en: 'Should I use armored or unarmored LV cables?',
        fa: 'آیا باید از کابل‌های LV زره‌دار یا بدون زره استفاده کنم؟',
      },
      answer: {
        en: 'Use armored cables for underground installations, industrial environments with mechanical stress, and areas with risk of physical damage. Use unarmored cables for indoor installations in cable trays, conduit systems, and above-ground installations with protection.',
        fa: 'از کابل‌های زره‌دار برای نصب زیرزمینی، محیط‌های صنعتی با استرس مکانیکی و مناطق با خطر آسیب فیزیکی استفاده کنید. از کابل‌های بدون زره برای نصب داخلی در سینی کابل، سیستم‌های لوله و نصب بالای زمین با محافظت استفاده کنید.',
      },
    },
  ],
  
  ctas: [
    {
      type: 'consultation',
      location: 'after-introduction',
      text: {
        en: 'Need Help with LV Cable Selection?',
        fa: 'نیاز به کمک در انتخاب کابل LV دارید؟',
      },
    },
    {
      type: 'catalog',
      location: 'after-content',
      text: {
        en: 'Download LV Cable Catalog',
        fa: 'کاتالوگ کابل LV را دانلود کنید',
      },
    },
  ],
});

// Export metadata for SEO
export const lowVoltageCablesMetadata = {
  en: generateAllMetadata(lowVoltageCablesArticle, 'en'),
  fa: generateAllMetadata(lowVoltageCablesArticle, 'fa'),
};
