/**
 * Ampacity Chart Reference - Technical Reference Article
 * Comprehensive ampacity charts and current carrying capacity data
 * 
 * This reference article leverages:
 * - Article template system
 * - Technical table components (AmpacityChart)
 * - Typography components (CalloutBox)
 * - Internal linking to related articles
 * - Bilingual support (English + Persian)
 */

import { createArticle } from './articleTemplate.js';
import { generateAllMetadata } from './metadataTemplate.js';

export const ampacityChartArticle = createArticle({
  slug: 'ampacity-chart-reference',
  contentType: 'cluster',
  topicalCluster: 'cable-types',
  category: 'technical',
  tags: ['ampacity', 'current-carrying-capacity', 'cable-charts', 'technical-reference', 'cable-sizing'],
  
  primaryKeyword: 'ampacity chart',
  secondaryKeywords: [
    'current carrying capacity',
    'cable ampacity table',
    'conductor ampacity',
    'IEC ampacity',
    'cable current ratings',
  ],
  
  metaDescription: {
    en: 'Comprehensive ampacity charts and current carrying capacity tables for copper and aluminum conductors. Reference data for cable sizing and electrical design.',
    fa: 'نمودارهای جامع ظرفیت جریان و جداول ظرفیت حمل جریان برای هادی‌های مس و آلومینیوم. داده‌های مرجع برای اندازه‌گیری کابل و طراحی الکتریکی.',
  },
  
  title: {
    en: 'Ampacity Chart Reference: Current Carrying Capacity Tables',
    fa: 'مرجع نمودار ظرفیت جریان: جداول ظرفیت حمل جریان',
  },
  
  excerpt: {
    en: 'Complete reference guide to ampacity charts and current carrying capacity for electrical cables. Includes copper and aluminum conductor ratings, derating factors, and IEC standard compliance data.',
    fa: 'راهنمای مرجع کامل به نمودارهای ظرفیت جریان و ظرفیت حمل جریان برای کابل‌های الکتریکی. شامل رتبه‌بندی هادی مس و آلومینیوم، عوامل کاهش و داده‌های انطباق استاندارد IEC.',
  },
  
  content: {
    en: `
      <h2>Ampacity Chart Reference Guide</h2>
      <p>Ampacity charts provide essential data for cable sizing and electrical design. This reference guide includes current carrying capacity tables for copper and aluminum conductors, derating factors, and IEC standard compliance information.</p>
      
      <div class="callout-box callout-important">
        <h4>Application Note</h4>
        <p>These ampacity values are for reference only. Always consult manufacturer specifications and local electrical codes for actual installation conditions. Derating factors must be applied for ambient temperature, cable grouping, and installation method.</p>
      </div>
      
      <h2>Copper Conductor Ampacity (PVC Insulation, Air Installation)</h2>
      
      <h3>Low Voltage Cables (0.6/1kV)</h3>
      
      <ul>
        <li><strong>1.5mm²:</strong> 16A</li>
        <li><strong>2.5mm²:</strong> 21A</li>
        <li><strong>4mm²:</strong> 28A</li>
        <li><strong>6mm²:</strong> 36A</li>
        <li><strong>10mm²:</strong> 48A</li>
        <li><strong>16mm²:</strong> 63A</li>
        <li><strong>25mm²:</strong> 80A</li>
        <li><strong>35mm²:</strong> 99A</li>
        <li><strong>50mm²:</strong> 125A</li>
        <li><strong>70mm²:</strong> 160A</li>
        <li><strong>95mm²:</strong> 195A</li>
        <li><strong>120mm²:</strong> 220A</li>
        <li><strong>150mm²:</strong> 250A</li>
        <li><strong>185mm²:</strong> 285A</li>
        <li><strong>240mm²:</strong> 335A</li>
        <li><strong>300mm²:</strong> 380A</li>
        <li><strong>400mm²:</strong> 450A</li>
        <li><strong>500mm²:</strong> 520A</li>
      </ul>
      
      <h2>XLPE Insulation Ampacity (90°C Rating)</h2>
      
      <p>XLPE insulation allows higher operating temperatures (90°C vs 70°C for PVC), resulting in approximately 20-25% higher ampacity ratings:</p>
      
      <ul>
        <li><strong>1.5mm²:</strong> 20A</li>
        <li><strong>2.5mm²:</strong> 27A</li>
        <li><strong>4mm²:</strong> 36A</li>
        <li><strong>6mm²:</strong> 46A</li>
        <li><strong>10mm²:</strong> 61A</li>
        <li><strong>16mm²:</strong> 80A</li>
        <li><strong>25mm²:</strong> 101A</li>
        <li><strong>35mm²:</strong> 125A</li>
        <li><strong>50mm²:</strong> 158A</li>
        <li><strong>70mm²:</strong> 200A</li>
        <li><strong>95mm²:</strong> 245A</li>
        <li><strong>120mm²:</strong> 275A</li>
        <li><strong>150mm²:</strong> 315A</li>
        <li><strong>185mm²:</strong> 355A</li>
        <li><strong>240mm²:</strong> 420A</li>
        <li><strong>300mm²:</strong> 475A</li>
        <li><strong>400mm²:</strong> 560A</li>
        <li><strong>500mm²:</strong> 650A</li>
      </ul>
      
      <div class="callout-box callout-tip">
        <h4>XLPE Advantage</h4>
        <p>For detailed comparison of XLPE vs PVC insulation, see our <a href="/blog/xlpe-vs-pvc-insulation-comparison">XLPE vs PVC guide</a>.</p>
      </div>
      
      <h2>Aluminum Conductor Ampacity</h2>
      
      <p>Aluminum has approximately 60% of copper's conductivity. For equivalent current capacity, aluminum requires approximately 1.6 times the cross-sectional area:</p>
      
      <ul>
        <li><strong>16mm²:</strong> 48A</li>
        <li><strong>25mm²:</strong> 61A</li>
        <li><strong>35mm²:</strong> 75A</li>
        <li><strong>50mm²:</strong> 95A</li>
        <li><strong>70mm²:</strong> 120A</li>
        <li><strong>95mm²:</strong> 145A</li>
        <li><strong>120mm²:</strong> 165A</li>
        <li><strong>150mm²:</strong> 190A</li>
        <li><strong>185mm²:</strong> 215A</li>
        <li><strong>240mm²:</strong> 255A</li>
        <li><strong>300mm²:</strong> 290A</li>
        <li><strong>400mm²:</strong> 345A</li>
        <li><strong>500mm²:</strong> 400A</li>
      </ul>
      
      <h2>Ambient Temperature Derating Factors</h2>
      
      <p>Higher ambient temperatures reduce current capacity. Apply these correction factors for PVC insulation (70°C rating):</p>
      
      <ul>
        <li><strong>25°C:</strong> 1.00 (reference)</li>
        <li><strong>30°C:</strong> 0.94</li>
        <li><strong>35°C:</strong> 0.87</li>
        <li><strong>40°C:</strong> 0.79</li>
        <li><strong>45°C:</strong> 0.71</li>
        <li><strong>50°C:</strong> 0.61</li>
        <li><strong>55°C:</strong> 0.50</li>
      </ul>
      
      <h2>Cable Grouping Derating Factors</h2>
      
      <p>Cables grouped together reduce heat dissipation. Apply these grouping factors for cables installed in air:</p>
      
      <ul>
        <li><strong>1 cable:</strong> 1.00</li>
        <li><strong>2 cables:</strong> 0.80</li>
        <li><strong>3 cables:</strong> 0.70</li>
        <li><strong>4-6 cables:</strong> 0.65</li>
        <li><strong>7-9 cables:</strong> 0.60</li>
        <li><strong>10-12 cables:</strong> 0.55</li>
        <li><strong>13-20 cables:</strong> 0.50</li>
        <li><strong>20+ cables:</strong> 0.45</li>
      </ul>
      
      <h2>Installation Method Derating</h2>
      
      <p>Different installation methods affect heat dissipation:</p>
      
      <ul>
        <li><strong>Air (free air):</strong> 1.00 (reference)</li>
        <li><strong>Cable tray (single layer):</strong> 0.85</li>
        <li><strong>Cable tray (touching):</strong> 0.70</li>
        <li><strong>Conduit (in air):</strong> 0.80</li>
        <li><strong>Conduit (buried):</strong> 0.70</li>
        <li><strong>Direct burial:</strong> 0.75</li>
      </ul>
      
      <h2>Short-Circuit Current Ratings</h2>
      
      <p>Cables must withstand short-circuit currents. Typical short-circuit ratings for 1-second fault:</p>
      
      <ul>
        <li><strong>1.5mm² copper:</strong> 0.2kA</li>
        <li><strong>2.5mm² copper:</strong> 0.3kA</li>
        <li><strong>4mm² copper:</strong> 0.5kA</li>
        <li><strong>6mm² copper:</strong> 0.7kA</li>
        <li><strong>10mm² copper:</strong> 1.2kA</li>
        <li><strong>16mm² copper:</strong> 1.9kA</li>
        <li><strong>25mm² copper:</strong> 3.0kA</li>
        <li><strong>35mm² copper:</strong> 4.2kA</li>
        <li><strong>50mm² copper:</strong> 6.0kA</li>
        <li><strong>70mm² copper:</strong> 8.4kA</li>
        <li><strong>95mm² copper:</strong> 11.4kA</li>
        <li><strong>120mm² copper:</strong> 14.4kA</li>
      </ul>
      
      <h2>Using Ampacity Charts</h2>
      
      <h3>Step-by-Step Process</h3>
      <ol>
        <li>Determine load current</li>
        <li>Select conductor material and insulation type</li>
        <li>Choose installation method</li>
        <li>Apply ambient temperature derating</li>
        <li>Apply grouping derating (if applicable)</li>
        <li>Apply installation method derating</li>
        <li>Select cable size with sufficient ampacity</li>
        <li>Verify voltage drop is within limits</li>
        <li>Verify short-circuit rating is adequate</li>
      </ol>
      
      <div class="callout-box callout-warning">
        <h4>Critical Reminder</h4>
        <p>Always apply all applicable derating factors. Failure to do so can result in overheating, insulation degradation, and potential fire hazards.</p>
      </div>
      
      <h2>IEC Standards Reference</h2>
      
      <p>These ampacity values are based on IEC 60502-1 for power cables with extruded insulation. Always verify compliance with local electrical codes and standards.</p>
      
      <h2>Conclusion</h2>
      <p>Proper use of ampacity charts is essential for safe and efficient electrical system design. This reference provides the data needed for cable sizing calculations. For complex applications or special conditions, consult with Setareh Kerman's engineering team for expert guidance.</p>
      
      <p>See our <a href="/blog/cable-sizing-basics">cable sizing basics guide</a> for comprehensive cable selection procedures.</p>
    `,
    
    fa: `
      <h2>راهنمای مرجع نمودار ظرفیت جریان</h2>
      <p>نمودارهای ظرفیت جریان داده‌های ضروری برای اندازه‌گیری کابل و طراحی الکتریکی ارائه می‌دهند. این راهنمای مرجع شامل جداول ظرفیت حمل جریان برای هادی‌های مس و آلومینیوم، عوامل کاهش و اطلاعات انطباق استاندارد IEC است.</p>
      
      <div class="callout-box callout-important">
        <h4>یادداشت کاربرد</h4>
        <p>این مقادیر ظرفیت جریان فقط برای مرجع هستند. همیشه مشخصات سازنده و کدهای الکتریکی محلی را برای شرایط نصب واقعی مشورت کنید. عوامل کاهش باید برای دمای محیط، گروه‌بندی کابل و روش نصب اعمال شوند.</p>
      </div>
      
      <h2>ظرفیت جریان هادی مس (عایق PVC، نصب هوا)</h2>
      
      <h3>کابل‌های ولتاژ پایین (۰.۶/۱ کیلوولت)</h3>
      
      <ul>
        <li><strong>۱.۵ میلی‌متر مربع:</strong> ۱۶A</li>
        <li><strong>۲.۵ میلی‌متر مربع:</strong> ۲۱A</li>
        <li><strong>۴ میلی‌متر مربع:</strong> ۲۸A</li>
        <li><strong>۶ میلی‌متر مربع:</strong> ۳۶A</li>
        <li><strong>۱۰ میلی‌متر مربع:</strong> ۴۸A</li>
        <li><strong>۱۶ میلی‌متر مربع:</strong> ۶۳A</li>
        <li><strong>۲۵ میلی‌متر مربع:</strong> ۸۰A</li>
        <li><strong>۳۵ میلی‌متر مربع:</strong> ۹۹A</li>
        <li><strong>۵۰ میلی‌متر مربع:</strong> ۱۲۵A</li>
        <li><strong>۷۰ میلی‌متر مربع:</strong> ۱۶۰A</li>
        <li><strong>۹۵ میلی‌متر مربع:</strong> ۱۹۵A</li>
        <li><strong>۱۲۰ میلی‌متر مربع:</strong> ۲۲۰A</li>
        <li><strong>۱۵۰ میلی‌متر مربع:</strong> ۲۵۰A</li>
        <li><strong>۱۸۵ میلی‌متر مربع:</strong> ۲۸۵A</li>
        <li><strong>۲۴۰ میلی‌متر مربع:</strong> ۳۳۵A</li>
        <li><strong>۳۰۰ میلی‌متر مربع:</strong> ۳۸۰A</li>
        <li><strong>۴۰۰ میلی‌متر مربع:</strong> ۴۵۰A</li>
        <li><strong>۵۰۰ میلی‌متر مربع:</strong> ۵۲۰A</li>
      </ul>
      
      <h2>ظرفیت جریان عایق XLPE (رتبه ۹۰°C)</h2>
      
      <p>عایق XLPE دماهای کاری بالاتر (۹۰°C در برابر ۷۰°C برای PVC) اجازه می‌دهد و منجر به رتبه‌های ظرفیت جریان تقریباً ۲۰-۲۵٪ بالاتر می‌شود:</p>
      
      <ul>
        <li><strong>۱.۵ میلی‌متر مربع:</strong> ۲۰A</li>
        <li><strong>۲.۵ میلی‌متر مربع:</strong> ۲۷A</li>
        <li><strong>۴ میلی‌متر مربع:</strong> ۳۶A</li>
        <li><strong>۶ میلی‌متر مربع:</strong> ۴۶A</li>
        <li><strong>۱۰ میلی‌متر مربع:</strong> ۶۱A</li>
        <li><strong>۱۶ میلی‌متر مربع:</strong> ۸۰A</li>
        <li><strong>۲۵ میلی‌متر مربع:</strong> ۱۰۱A</li>
        <li><strong>۳۵ میلی‌متر مربع:</strong> ۱۲۵A</li>
        <li><strong>۵۰ میلی‌متر مربع:</strong> ۱۵۸A</li>
        <li><strong>۷۰ میلی‌متر مربع:</strong> ۲۰۰A</li>
        <li><strong>۹۵ میلی‌متر مربع:</strong> ۲۴۵A</li>
        <li><strong>۱۲۰ میلی‌متر مربع:</strong> ۲۷۵A</li>
        <li><strong>۱۵۰ میلی‌متر مربع:</strong> ۳۱۵A</li>
        <li><strong>۱۸۵ میلی‌متر مربع:</strong> ۳۵۵A</li>
        <li><strong>۲۴۰ میلی‌متر مربع:</strong> ۴۲۰A</li>
        <li><strong>۳۰۰ میلی‌متر مربع:</strong> ۴۷۵A</li>
        <li><strong>۴۰۰ میلی‌متر مربع:</strong> ۵۶۰A</li>
        <li><strong>۵۰۰ میلی‌متر مربع:</strong> ۶۵۰A</li>
      </ul>
      
      <div class="callout-box callout-tip">
        <h4>مزیت XLPE</h4>
        <p>برای مقایسه دقیق عایق XLPE و PVC، <a href="/blog/xlpe-vs-pvc-insulation-comparison">راهنمای XLPE در برابر PVC</a> ما را ببینید.</p>
      </div>
      
      <h2>ظرفیت جریان هادی آلومینیوم</h2>
      
      <p>آلومینیوم تقریباً ۶۰٪ هدایت مس دارد. برای ظرفیت جریان معادل، آلومینیوم به تقریباً ۱.۶ برابر سطح مقطع نیاز دارد:</p>
      
      <ul>
        <li><strong>۱۶ میلی‌متر مربع:</strong> ۴۸A</li>
        <li><strong>۲۵ میلی‌متر مربع:</strong> ۶۱A</li>
        <li><strong>۳۵ میلی‌متر مربع:</strong> ۷۵A</li>
        <li><strong>۵۰ میلی‌متر مربع:</strong> ۹۵A</li>
        <li><strong>۷۰ میلی‌متر مربع:</strong> ۱۲۰A</li>
        <li><strong>۹۵ میلی‌متر مربع:</strong> ۱۴۵A</li>
        <li><strong>۱۲۰ میلی‌متر مربع:</strong> ۱۶۵A</li>
        <li><strong>۱۵۰ میلی‌متر مربع:</strong> ۱۹۰A</li>
        <li><strong>۱۸۵ میلی‌متر مربع:</strong> ۲۱۵A</li>
        <li><strong>۲۴۰ میلی‌متر مربع:</strong> ۲۵۵A</li>
        <li><strong>۳۰۰ میلی‌متر مربع:</strong> ۲۹۰A</li>
        <li><strong>۴۰۰ میلی‌متر مربع:</strong> ۳۴۵A</li>
        <li><strong>۵۰۰ میلی‌متر مربع:</strong> ۴۰۰A</li>
      </ul>
      
      <h2>عوامل کاهش دمای محیط</h2>
      
      <p>دماهای محیط بالاتر ظرفیت جریان را کاهش می‌دهند. این عوامل اصلاح را برای عایق PVC (رتبه ۷۰°C) اعمال کنید:</p>
      
      <ul>
        <li><strong>۲۵°C:</strong> ۱.۰۰ (مرجع)</li>
        <li><strong>۳۰°C:</strong> ۰.۹۴</li>
        <li><strong>۳۵°C:</strong> ۰.۸۷</li>
        <li><strong>۴۰°C:</strong> ۰.۷۹</li>
        <li><strong>۴۵°C:</strong> ۰.۷۱</li>
        <li><strong>۵۰°C:</strong> ۰.۶۱</li>
        <li><strong>۵۵°C:</strong> ۰.۵۰</li>
      </ul>
      
      <h2>عوامل کاهش گروه‌بندی کابل</h2>
      
      <p>کابل‌های گروه‌بندی شده دفع حرارت را کاهش می‌دهند. این عوامل گروه‌بندی را برای کابل‌های نصب شده در هوا اعمال کنید:</p>
      
      <ul>
        <li><strong>۱ کابل:</strong> ۱.۰۰</li>
        <li><strong>۲ کابل:</strong> ۰.۸۰</li>
        <li><strong>۳ کابل:</strong> ۰.۷۰</li>
        <li><strong>۴-۶ کابل:</strong> ۰.۶۵</li>
        <li><strong>۷-۹ کابل:</strong> ۰.۶۰</li>
        <li><strong>۱۰-۱۲ کابل:</strong> ۰.۵۵</li>
        <li><strong>۱۳-۲۰ کابل:</strong> ۰.۵۰</li>
        <li><strong>۲۰+ کابل:</strong> ۰.۴۵</li>
      </ul>
      
      <h2>کاهش روش نصب</h2>
      
      <p>روش‌های نصب مختلف بر دفع حرارت تأثیر می‌گذارند:</p>
      
      <ul>
        <li><strong>هوا (هوا آزاد):</strong> ۱.۰۰ (مرجع)</li>
        <li><strong>سینی کابل (لایه واحد):</strong> ۰.۸۵</li>
        <li><strong>سینی کابل (لمس):</strong> ۰.۷۰</li>
        <li><strong>لوله (در هوا):</strong> ۰.۸۰</li>
        <li><strong>لوله (دفن شده):</strong> ۰.۷۰</li>
        <li><strong>دفن مستقیم:</strong> ۰.۷۵</li>
      </ul>
      
      <h2>رتبه‌های جریان اتصال کوتاه</h2>
      
      <p>کابل‌ها باید جریان‌های اتصال کوتاه را تحمل کنند. رتبه‌های اتصال کوتاه معمولی برای خطای ۱ ثانیه:</p>
      
      <ul>
        <li><strong>۱.۵ میلی‌متر مربع مس:</strong> ۰.۲kA</li>
        <li><strong>۲.۵ میلی‌متر مربع مس:</strong> ۰.۳kA</li>
        <li><strong>۴ میلی‌متر مربع مس:</strong> ۰.۵kA</li>
        <li><strong>۶ میلی‌متر مربع مس:</strong> ۰.۷kA</li>
        <li><strong>۱۰ میلی‌متر مربع مس:</strong> ۱.۲kA</li>
        <li><strong>۱۶ میلی‌متر مربع مس:</strong> ۱.۹kA</li>
        <li><strong>۲۵ میلی‌متر مربع مس:</strong> ۳.۰kA</li>
        <li><strong>۳۵ میلی‌متر مربع مس:</strong> ۴.۲kA</li>
        <li><strong>۵۰ میلی‌متر مربع مس:</strong> ۶.۰kA</li>
        <li><strong>۷۰ میلی‌متر مربع مس:</strong> ۸.۴kA</li>
        <li><strong>۹۵ میلی‌متر مربع مس:</strong> ۱۱.۴kA</li>
        <li><strong>۱۲۰ میلی‌متر مربع مس:</strong> ۱۴.۴kA</li>
      </ul>
      
      <h2>استفاده از نمودارهای ظرفیت جریان</h2>
      
      <h3>فرآیند گام به گام</h3>
      <ol>
        <li>جریان بار را تعیین کنید</li>
        <li>ماده هادی و نوع عایق را انتخاب کنید</li>
        <li>روش نصب را انتخاب کنید</li>
        <li>کاهش دمای محیط را اعمال کنید</li>
        <li>کاهش گروه‌بندی را اعمال کنید (در صورت وجود)</li>
        <li>کاهش روش نصب را اعمال کنید</li>
        <li>اندازه کابل با ظرفیت جریان کافی را انتخاب کنید</li>
        <li>تأیید کنید افت ولتاژ در محدوده است</li>
        <li>تأیید کنید رتبه اتصال کوتاه کافی است</li>
      </ol>
      
      <div class="callout-box callout-warning">
        <h4>یادآوری حیاتی</h4>
        <p>همیشه تمام عوامل کاهش قابل اعمال را اعمال کنید. عدم انجام این کار می‌تواند منجر به گرم شدن بیش از حد، تخریب عایق و خطرات آتش‌سوزی احتمالی شود.</p>
      </div>
      
      <h2>مرجع استانداردهای IEC</h2>
      
      <p>این مقادیر ظرفیت جریان بر اساس IEC 60502-1 برای کابل‌های برق با عایق اکسترود شده است. همیشه انطباق با کدها و استانداردهای الکتریکی محلی را تأیید کنید.</p>
      
      <h2>نتیجه‌گیری</h2>
      <p>استفاده صحیح از نمودارهای ظرفیت جریان برای طراحی سیستم الکتریکی ایمن و کارآمد ضروری است. این مرجع داده‌های مورد نیاز برای محاسبات اندازه‌گیری کابل را ارائه می‌دهد. برای کاربردهای پیچیده یا شرایط خاص، با تیم مهندسی ستاره کرمان برای راهنمایی کارشناسانه مشورت کنید.</p>
      
      <p><a href="/blog/cable-sizing-basics">راهنمای اصول اندازه‌گیری کابل</a> ما را برای رویه‌های جامع انتخاب کابل ببینید.</p>
    `,
  },
  
  author: 'Setareh Kerman Engineering Team',
  publishDate: '2024-01-26',
  featuredImage: '/og-image.jpg',
  
  linksToPillar: false,
  internalLinks: [
    'cable-sizing-basics',
    'xlpe-vs-pvc-insulation-comparison',
    'copper-vs-aluminum-conductors',
    'voltage-drop-calculation-guide',
  ],
  
  faqs: [
    {
      question: {
        en: 'What is ampacity?',
        fa: 'ظرفیت جریان چیست؟',
      },
      answer: {
        en: 'Ampacity is the maximum current a conductor can carry continuously without exceeding its temperature rating. It depends on conductor material, size, insulation type, installation method, ambient temperature, and grouping factors.',
        fa: 'ظرفیت جریان حداکثر جریانی است که یک هادی می‌تواند به طور مداوم بدون exceeding رتبه دمای خود حمل کند. به ماده هادی، اندازه، نوع عایق، روش نصب، دمای محیط و عوامل گروه‌بندی بستگی دارد.',
      },
    },
    {
      question: {
        en: 'Why do I need to apply derating factors?',
        fa: 'چرا باید عوامل کاهش را اعمال کنم؟',
      },
      answer: {
        en: 'Derating factors account for conditions that reduce heat dissipation, such as high ambient temperature, cable grouping, and installation method. Failure to apply derating can cause overheating and cable failure.',
        fa: 'عوامل کاهش شرایطی را که دفع حرارت را کاهش می‌دهند، مانند دمای محیط بالا، گروه‌بندی کابل و روش نصب، در نظر می‌گیرند. عدم اعمال کاهش می‌تواند باعث گرم شدن بیش از حد و شکست کابل شود.',
      },
    },
  ],
  
  ctas: [
    {
      type: 'consultation',
      location: 'after-introduction',
      text: {
        en: 'Need Help with Ampacity Calculations?',
        fa: 'نیاز به کمک در محاسبات ظرفیت جریان دارید؟',
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
export const ampacityChartMetadata = {
  en: generateAllMetadata(ampacityChartArticle, 'en'),
  fa: generateAllMetadata(ampacityChartArticle, 'fa'),
};
