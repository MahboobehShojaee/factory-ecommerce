/**
 * Cable FAQs Page
 * Comprehensive FAQ page for common cable questions
 * 
 * This FAQ page leverages:
 * - Article template system
 * - FAQ schema (FAQPage)
 * - Typography components
 * - Internal linking to related articles
 * - Bilingual support (English + Persian)
 */

import { createArticle, faqArticleTemplate } from './articleTemplate.js';
import { generateAllMetadata } from './metadataTemplate.js';

export const cableFaqsArticle = createArticle({
  slug: 'cable-faqs',
  contentType: 'faq',
  topicalCluster: 'cable-types',
  category: 'technical',
  tags: ['faq', 'cable-questions', 'technical-support', 'cable-selection'],
  
  primaryKeyword: 'cable FAQs',
  secondaryKeywords: [
    'cable questions',
    'wire and cable FAQ',
    'cable selection FAQ',
    'technical cable questions',
  ],
  
  metaDescription: {
    en: 'Frequently asked questions about cables, wire, and cable selection. Expert answers from Setareh Kerman engineers covering insulation materials, voltage ratings, applications, and installation.',
    fa: 'سوالات متداول درباره کابل، سیم و انتخاب کابل. پاسخ‌های کارشناسانه از مهندسان ستاره کرمان که مواد عایق، رتبه‌های ولتاژ، کاربردها و نصب را پوشش می‌دهد.',
  },
  
  title: {
    en: 'Cable FAQs: Frequently Asked Questions About Wire and Cable',
    fa: 'سوالات متداول کابل: سوالات رایج درباره سیم و کابل',
  },
  
  excerpt: {
    en: 'Expert answers to the most common questions about cables, insulation materials, voltage ratings, applications, and installation. Get technical guidance from Setareh Kerman\'s engineering team.',
    fa: 'پاسخ‌های کارشناسانه به رایج‌ترین سوالات درباره کابل، مواد عایق، رتبه‌های ولتاژ، کاربردها و نصب. راهنمایی فنی از تیم مهندسی ستاره کرمان دریافت کنید.',
  },
  
  content: {
    en: `
      <h2>Frequently Asked Questions About Cables</h2>
      <p>Our engineering team has compiled answers to the most common questions about wire and cable selection, installation, and technical specifications. These FAQs are based on our decades of experience in cable manufacturing and industrial applications.</p>
      
      <CalloutBox type="tip" title="Need More Help?">
        <p>Can't find the answer you're looking for? Contact our engineering team for personalized technical consultation for your specific project requirements.</p>
      </CalloutBox>
      
      <h2>Insulation Materials</h2>
      
      <h3>What is the difference between XLPE and PVC insulation?</h3>
      <p>XLPE (cross-linked polyethylene) and PVC (polyvinyl chloride) are the two most common insulation materials. The main difference is operating temperature: XLPE can operate continuously at 90°C while PVC is limited to 70°C. XLPE also offers superior thermal stability, mechanical strength, and chemical resistance, making it suitable for demanding industrial applications. For a detailed comparison, see our <ReferenceLink to="/blog/xlpe-vs-pvc-insulation-comparison">XLPE vs PVC guide</ReferenceLink>.</p>
      
      <h3>When should I choose XLPE over PVC?</h3>
      <p>Choose XLPE for medium voltage applications (6-36kV), high-current installations, environments with elevated temperatures, chemical processing plants, and applications requiring longer service life. PVC is suitable for low-voltage applications where cost is a primary consideration and thermal requirements are less stringent.</p>
      
      <h2>Voltage Ratings</h2>
      
      <h3>What are the different voltage ratings for cables?</h3>
      <p>Cables are classified by voltage rating:</p>
      <ul>
        <li><strong>Low Voltage (LV):</strong> Up to 1kV (typically 0.6/1kV)</li>
        <li><strong>Medium Voltage (MV):</strong> 1kV to 36kV</li>
        <li><strong>High Voltage (HV):</strong> Above 36kV</li>
      </ul>
      <p>LV cables are used for building wiring and industrial distribution, MV cables for industrial power distribution, and HV cables for power transmission. See our <ReferenceLink to="/blog/low-voltage-cables-guide">LV cables guide</ReferenceLink> for more information.</p>
      
      <h3>Can I use LV cables for higher voltage applications?</h3>
      <p>No, cables must be rated for the voltage they will carry. Using LV cables for higher voltage applications is dangerous and violates safety standards. Always select cables with appropriate voltage ratings for your application.</p>
      
      <h2>Conductor Materials</h2>
      
      <h3>Should I use copper or aluminum conductors?</h3>
      <p>Copper offers higher conductivity (about 60% better than aluminum), better corrosion resistance, and easier termination. Aluminum is lighter, less expensive, and requires larger cross-sections for the same current. Copper is preferred for most applications, while aluminum is suitable for large installations where weight and cost are critical factors.</p>
      
      <h3>What are the advantages of copper conductors?</h3>
      <p>Copper conductors provide:</p>
      <ul>
        <li>Higher electrical conductivity</li>
        <li>Better corrosion resistance</li>
        <li>Easier to terminate and connect</li>
        <li>More durable over long service life</li>
        <li>Better performance in high-current applications</li>
      </ul>
      
      <h2>Cable Selection</h2>
      
      <h3>How do I select the right cable size?</h3>
      <p>Cable size selection depends on:</p>
      <ol>
        <li>Current carrying capacity (ampacity)</li>
        <li>Voltage drop requirements</li>
        <li>Short-circuit rating</li>
        <li>Installation method (air, duct, buried)</li>
        <li>Ambient temperature</li>
        <li>Cable grouping (derating factors)</li>
      </ol>
      <p>Proper cable sizing ensures safe operation and prevents overheating. Consult ampacity charts and IEC standards for accurate calculations.</p>
      
      <h3>What is ampacity?</h3>
      <p>Ampacity is the maximum current a conductor can carry continuously without exceeding its temperature rating. Ampacity depends on conductor material, size, insulation type, installation method, ambient temperature, and grouping factors. Proper ampacity calculation is essential for safe cable selection.</p>
      
      <h2>Installation</h2>
      
      <h3>Should I use armored or unarmored cables?</h3>
      <p>Use armored cables for underground installations, industrial environments with mechanical stress, and areas with risk of physical damage. Use unarmored cables for indoor installations in cable trays, conduit systems, and above-ground installations with protection. Armor provides mechanical protection against crushing, impact, and rodent damage.</p>
      
      <h3>What is the minimum bend radius for cables?</h3>
      <p>The minimum bend radius depends on cable diameter and construction:</p>
      <ul>
        <li><strong>Unarmored cables:</strong> Typically 6-8 times the cable diameter</li>
        <li><strong>Armored cables:</strong> Typically 10-12 times the cable diameter</li>
        <li><strong>Multi-core cables:</strong> Typically 8-10 times the cable diameter</li>
      </ul>
      <p>Exceeding minimum bend radius can damage conductors and insulation, leading to premature failure.</p>
      
      <h2>Standards and Compliance</h2>
      
      <h3>What are IEC standards for cables?</h3>
      <p>Key IEC standards include:</p>
      <ul>
        <li><strong>IEC 60502-1:</strong> Power cables with extruded insulation</li>
        <li><strong>IEC 60228:</strong> Conductors for insulated cables</li>
        <li><strong>IEC 60332:</strong> Fire resistance testing</li>
        <li><strong>IEC 60702:</strong> Fire-resistant cables</li>
      </ul>
      <p>Compliance with IEC standards ensures quality, safety, and international compatibility. Setareh Kerman manufactures cables compliant with these international standards.</p>
      
      <h2>Applications</h2>
      
      <h3>What cables are suitable for outdoor installations?</h3>
      <p>For outdoor installations, use cables with:</p>
      <ul>
        <li>UV-resistant outer sheath (typically black PVC or XLPE)</li>
        <li>Armor for mechanical protection (if required)</li>
        <li>Moisture resistance</li>
        <li>Temperature rating suitable for local climate</li>
      </ul>
      <p>Armored cables are recommended for direct burial outdoor installations.</p>
      
      <h3>What cables are suitable for chemical environments?</h3>
      <p>For chemical environments, use XLPE-insulated cables with chemical-resistant outer sheath. XLPE provides superior chemical resistance compared to PVC. For aggressive chemical environments, consult our engineering team for specialized cable recommendations.</p>
      
      <h2>Service Life and Maintenance</h2>
      
      <h3>What is the typical service life of cables?</h3>
      <p>Service life depends on installation conditions and cable type:</p>
      <ul>
        <li><strong>XLPE cables:</strong> 25-40 years under normal conditions</li>
        <li><strong>PVC cables:</strong> 15-25 years under normal conditions</li>
        <li><strong>Armored cables:</strong> May exceed 40 years with proper installation</li>
      </ul>
      <p>Proper installation, environmental protection, and regular inspection can extend service life.</p>
      
      <h3>How do I maintain installed cables?</h3>
      <p>Regular maintenance includes:</p>
      <ul>
        <li>Visual inspection for damage or degradation</li>
        <li>Insulation resistance testing</li>
        <li>Checking for proper support and protection</li>
        <li>Monitoring operating temperatures</li>
        <li>Addressing any signs of overheating or damage promptly</li>
      </ul>
      
      <h2>Still Have Questions?</h2>
      <p>Our engineering team is available to provide technical consultation for your specific cable requirements. Contact us for expert guidance on cable selection, installation, and troubleshooting.</p>
    `,
    
    fa: `
      <h2>سوالات متداول درباره کابل</h2>
      <p>تیم مهندسی ما پاسخ‌هایی به رایج‌ترین سوالات درباره انتخاب کابل، نصب و مشخصات فنی تهیه کرده است. این سوالات متداول بر اساس دهه‌ها تجربه ما در تولید کابل و کاربردهای صنعتی است.</p>
      
      <calloutBox type="tip" title="نیاز به کمک بیشتر دارید؟">
        <p>پاسخ مورد نظر خود را پیدا نمی‌کنید؟ با تیم مهندسی ما برای مشاوره فنی شخصی‌سازی شده برای الزامات پروژه خاص خود تماس بگیرید.</p>
      </calloutBox>
      
      <h2>مواد عایق</h2>
      
      <h3>تفاوت بین عایق XLPE و PVC چیست؟</h3>
      <p>XLPE (پلی‌اتیلن متصل‌شده) و PVC (پلی‌وینیل کلرید) دو رایج‌ترین مواد عایق هستند. تفاوت اصلی دمای کاری است: XLPE می‌تواند به طور مداوم در ۹۰°C کار کند در حالی که PVC به ۷۰°C محدود است. XLPE همچنین پایداری حرارتی، قدرت مکانیکی و مقاومت شیمیایی برتری ارائه می‌دهد و آن را برای کاربردهای صنعتی demanding مناسب می‌سازد. برای مقایسه دقیق، <ReferenceLink to="/blog/xlpe-vs-pvc-insulation-comparison">راهنمای XLPE در برابر PVC</ReferenceLink> ما را ببینید.</p>
      
      <h3>چه زمانی XLPE را به جای PVC انتخاب کنم؟</h3>
      <p>XLPE را برای کاربردهای ولتاژ متوسط (۶-۳۶ کیلوولت)، نصب‌های جریان بالا، محیط‌های با دمای بالا، کارخانه‌های پردازش شیمیایی و کاربردهایی که نیاز به طول عمر بیشتر دارند انتخاب کنید. PVC برای کاربردهای ولتاژ پایین که هزینه در نظر اولیه است و الزامات حرارتی کمتر سخت‌گیر هستند مناسب است.</p>
      
      <h2>رتبه‌های ولتاژ</h2>
      
      <h3>رتبه‌های ولتاژ مختلف برای کابل‌ها چیست؟</h3>
      <p>کابل‌ها بر اساس رتبه ولتاژ طبقه‌بندی می‌شوند:</p>
      <ul>
        <li><strong>ولتاژ پایین (LV):</strong> تا ۱ کیلوولت (معمولاً ۰.۶/۱ کیلوولت)</li>
        <li><strong>ولتاژ متوسط (MV):</strong> ۱ کیلوولت تا ۳۶ کیلوولت</li>
        <li><strong>ولتاژ بالا (HV):</strong> بالاتر از ۳۶ کیلوولت</li>
      </ul>
      <p>کابل‌های LV برای سیم‌کشی ساختمان و توزیع صنعتی، کابل‌های MV برای توزیع برق صنعتی و کابل‌های HV برای انتقال برق استفاده می‌شوند. برای اطلاعات بیشتر <ReferenceLink to="/blog/low-voltage-cables-guide">راهنمای کابل‌های LV</ReferenceLink> را ببینید.</p>
      
      <h3>آیا می‌توانم از کابل‌های LV برای کاربردهای ولتاژ بالاتر استفاده کنم؟</h3>
      <p>خیر، کابل‌ها باید برای ولتاژی که حمل می‌کنند رتبه‌بندی شوند. استفاده از کابل‌های LV برای کاربردهای ولتاژ بالاتر خطرناک است و استانداردهای ایمنی را نقض می‌کند. همیشه کابل‌های با رتبه ولتاژ مناسب برای کاربرد خود را انتخاب کنید.</p>
      
      <h2>مواد هادی</h2>
      
      <h3>آیا باید از هادی‌های مس یا آلومینیوم استفاده کنم؟</h3>
      <p>مس هدایت بالاتر (حدود ۶۰٪ بهتر از آلومینیوم)، مقاومت خوردگی بهتر و پایانی‌سازی آسان‌تر ارائه می‌دهد. آلومینیوم سبک‌تر، کمتر هزینه و نیاز به سطح مقطع بزرگتر برای همان جریان دارد. مس برای اکثر کاربردها ترجیح داده می‌شود، در حالی که آلومینیوم برای نصب‌های بزرگ که وزن و هزینه عوامل حیاتی هستند مناسب است.</p>
      
      <h3>مزایای هادی‌های مس چیست؟</h3>
      <p>هادی‌های مس ارائه می‌دهند:</p>
      <ul>
        <li>هدایت الکتریکی بالاتر</li>
        <li>مقاومت خوردگی بهتر</li>
        <li>پایانی‌سازی و اتصال آسان‌تر</li>
        <li>بیشتر دوام‌دار در طول عمر سرویس طولانی</li>
        <li>عملکرد بهتر در کاربردهای جریان بالا</li>
      </ul>
      
      <h2>انتخاب کابل</h2>
      
      <h3>چگونه اندازه کابل مناسب را انتخاب کنم؟</h3>
      <p>انتخاب اندازه کابل به موارد زیر بستگی دارد:</p>
      <ol>
        <li>ظرفیت حمل جریان (ظرفیت جریان)</li>
        <li>الزامات افت ولتاژ</li>
        <li>رتبه اتصال کوتاه</li>
        <li>روش نصب (هوا، لوله، دفن شده)</li>
        <li>دمای محیط</li>
        <li>گروه‌بندی کابل (عوامل کاهش)</li>
      </ol>
      <p>انتخاب صحیح اندازه کابل عملکرد ایمن را تضمین می‌کند و از گرم شدن بیش از حد جلوگیری می‌کند. برای محاسبات دقیق به نمودارهای ظرفیت جریان و استانداردهای IEC مراجعه کنید.</p>
      
      <h3>ظرفیت جریان چیست؟</h3>
      <p>ظرفیت جریان حداکثر جریانی است که یک هادی می‌تواند به طور مداوم بدون exceeding رتبه دمای خود حمل کند. ظرفیت جریان به ماده هادی، اندازه، نوع عایق، روش نصب، دمای محیط و عوامل گروه‌بندی بستگی دارد. محاسبه صحیح ظرفیت جریان برای انتخاب کابل ایمن ضروری است.</p>
      
      <h2>نصب</h2>
      
      <h3>آیا باید از کابل‌های زره‌دار یا بدون زره استفاده کنم؟</h3>
      <p>از کابل‌های زره‌دار برای نصب زیرزمینی، محیط‌های صنعتی با استرس مکانیکی و مناطق با خطر آسیب فیزیکی استفاده کنید. از کابل‌های بدون زره برای نصب داخلی در سینی کابل، سیستم‌های لوله و نصب بالای زمین با محافظت استفاده کنید. زره محافظت مکانیکی در برابر خرد شدن، ضربه و آسیب جوندگان ارائه می‌دهد.</p>
      
      <h3>شعاع خمشی حداقل برای کابل‌ها چیست؟</h3>
      <p>شعاع خمشی حداقل به قطر و ساختار کابل بستگی دارد:</p>
      <ul>
        <li><strong>کابل‌های بدون زره:</strong> معمولاً ۶-۸ برابر قطر کابل</li>
        <li><strong>کابل‌های زره‌دار:</strong> معمولاً ۱۰-۱۲ برابر قطر کابل</li>
        <li><strong>کابل‌های چندهسته:</strong> معمولاً ۸-۱۰ برابر قطر کابل</li>
      </ul>
      <p>exceeding شعاع خمشی حداقل می‌تواند به هادی‌ها و عایق آسیب برساند و منجر به شکست زودرس شود.</p>
      
      <h2>استانداردها و انطباق</h2>
      
      <h3>استانداردهای IEC برای کابل‌ها چیست؟</h3>
      <p>استانداردهای کلیدی IEC شامل:</p>
      <ul>
        <li><strong>IEC 60502-1:</strong> کابل‌های برق با عایق اکسترود شده</li>
        <li><strong>IEC 60228:</strong> هادی‌ها برای کابل‌های عایق‌شده</li>
        <li><strong>IEC 60332:</strong> آزمون مقاومت در برابر حریق</li>
        <li><strong>IEC 60702:</strong> کابل‌های مقاوم در برابر حریق</li>
      </ul>
      <p>انطباق با استانداردهای IEC کیفیت، ایمنی و سازگاری بین‌المللی را تضمین می‌کند. ستاره کرمان کابل‌های مطابق با این استانداردهای بین‌المللی تولید می‌کند.</p>
      
      <h2>کاربردها</h2>
      
      <h3>چه کابل‌هایی برای نصب‌های فضای باز مناسب هستند؟</h3>
      <p>برای نصب‌های فضای باز، از کابل‌های با موارد زیر استفاده کنید:</p>
      <ul>
        <li>غلاف خارجی مقاوم در برابر UV (معمولاً PVC یا XLPE سیاه)</li>
        <li>زره برای محافظت مکانیکی (در صورت نیاز)</li>
        <li>مقاومت در برابر رطوبت</li>
        <li>رتبه دمای مناسب برای آب و هوای محلی</li>
      </ul>
      <p>کابل‌های زره‌دار برای نصب‌های فضای باز دفن مستقیم توصیه می‌شوند.</p>
      
      <h3>چه کابل‌هایی برای محیط‌های شیمیایی مناسب هستند؟</h3>
      <p>برای محیط‌های شیمیایی، از کابل‌های عایق XLPE با غلاف خارجی مقاوم شیمیایی استفاده کنید. XLPE مقاومت شیمیایی برتری در مقایسه با PVC ارائه می‌دهد. برای محیط‌های شیمیایی تهاجمی، برای توصیه کابل تخصصی با تیم مهندسی ما مشورت کنید.</p>
      
      <h2>طول عمر سرویس و تعمیر و نگهداری</h2>
      
      <h3>طول عمر سرویس معمولی کابل‌ها چیست؟</h3>
      <p>طول عمر سرویس به شرایط نصب و نوع کابل بستگی دارد:</p>
      <ul>
        <li><strong>کابل‌های XLPE:</strong> ۲۵-۴۰ سال تحت شرایط عادی</li>
        <li><strong>کابل‌های PVC:</strong> ۱۵-۲۵ سال تحت شرایط عادی</li>
        <li><strong>کابل‌های زره‌دار:</strong> ممکن است با نصب صحیح از ۴۰ سال تجاوز کند</li>
      </ul>
      <p>نصب صحیح، محافظت محیطی و بازرسی منظم می‌تواند طول عمر را افزایش دهد.</p>
      
      <h3>چگونه کابل‌های نصب شده را نگهداری کنم؟</h3>
      <p>تعمیر و نگهداری منظم شامل موارد زیر است:</p>
      <ul>
        <li>بازرسی بصری برای آسیب یا تخریب</li>
        <li>تست مقاومت عایق</li>
        <li>بررسی پشتیبانی و محافظت مناسب</li>
        <li>نظارت بر دماهای کاری</li>
        <li>رسیدگی فوری به هر نشانه‌ای از گرم شدن بیش از حد یا آسیب</li>
      </ul>
      
      <h2>هنوز سوال دارید؟</h2>
      <p>تیم مهندسی ما برای ارائه مشاوره فنی برای الزامات کابل خاص شما در دسترس است. برای راهنمایی کارشناسانه در مورد انتخاب کابل، نصب و عیب‌یابی با ما تماس بگیرید.</p>
    `,
  },
  
  author: 'Setareh Kerman Engineering Team',
  publishDate: '2024-01-22',
  featuredImage: '/og-image.jpg',
  
  linksToPillar: false,
  internalLinks: [
    'xlpe-vs-pvc-insulation-comparison',
    'low-voltage-cables-guide',
    'cable-sizing-calculations',
    'iec-standards-overview',
  ],
  
  faqs: [
    {
      question: {
        en: 'What is the difference between XLPE and PVC insulation?',
        fa: 'تفاوت بین عایق XLPE و PVC چیست؟',
      },
      answer: {
        en: 'The main difference is operating temperature: XLPE can operate continuously at 90°C while PVC is limited to 70°C. XLPE also offers superior thermal stability, mechanical strength, and chemical resistance.',
        fa: 'تفاوت اصلی دمای کاری است: XLPE می‌تواند به طور مداوم در ۹۰°C کار کند در حالی که PVC به ۷۰°C محدود است. XLPE همچنین پایداری حرارتی، قدرت مکانیکی و مقاومت شیمیایی برتری ارائه می‌دهد.',
      },
    },
    {
      question: {
        en: 'Should I use copper or aluminum conductors?',
        fa: 'آیا باید از هادی‌های مس یا آلومینیوم استفاده کنم؟',
      },
      answer: {
        en: 'Copper offers higher conductivity and better corrosion resistance, while aluminum is lighter and less expensive. Copper is preferred for most applications, aluminum for large installations where cost and weight are critical.',
        fa: 'مس هدایت بالاتر و مقاومت خوردگی بهتر ارائه می‌دهد، در حالی که آلومینیوم سبک‌تر و کمتر هزینه است. مس برای اکثر کاربردها ترجیح داده می‌شود، آلومینیوم برای نصب‌های بزرگ که هزینه و وزن حیاتی هستند.',
      },
    },
    {
      question: {
        en: 'How do I select the right cable size?',
        fa: 'چگونه اندازه کابل مناسب را انتخاب کنم؟',
      },
      answer: {
        en: 'Consider current carrying capacity, voltage drop, short-circuit rating, installation method, ambient temperature, and grouping factors. Consult ampacity charts and IEC standards for accurate calculations.',
        fa: 'ظرفیت حمل جریان، افت ولتاژ، رتبه اتصال کوتاه، روش نصب، دمای محیط و عوامل گروه‌بندی را در نظر بگیرید. برای محاسبات دقیق به نمودارهای ظرفیت جریان و استانداردهای IEC مراجعه کنید.',
      },
    },
    {
      question: {
        en: 'What is the typical service life of cables?',
        fa: 'طول عمر سرویس معمولی کابل‌ها چیست؟',
      },
      answer: {
        en: 'XLPE cables: 25-40 years under normal conditions. PVC cables: 15-25 years under normal conditions. Proper installation and maintenance can extend service life.',
        fa: 'کابل‌های XLPE: ۲۵-۴۰ سال تحت شرایط عادی. کابل‌های PVC: ۱۵-۲۵ سال تحت شرایط عادی. نصب و تعمیر و نگهداری صحیح می‌تواند طول عمر را افزایش دهد.',
      },
    },
  ],
  
  ctas: [
    {
      type: 'consultation',
      location: 'after-introduction',
      text: {
        en: 'Need Technical Consultation?',
        fa: 'نیاز به مشاوره فنی دارید؟',
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
export const cableFaqsMetadata = {
  en: generateAllMetadata(cableFaqsArticle, 'en'),
  fa: generateAllMetadata(cableFaqsArticle, 'fa'),
};
