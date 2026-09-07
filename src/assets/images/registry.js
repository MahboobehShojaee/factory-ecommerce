/**
 * Centralized image asset registry.
 * All images must be imported here — never use /src/assets/ paths in components.
 */
import logoNav from "./logo-wb-wt.png";
import logoWatermark from "./logo-withoutBackground.png";
import factoryHero from "./factory.jpg";
import manHero from "./men/men.png";
import menScene from "./men/1.png";
import menCableDetail from "./men/2.png";
import processStep1 from "./Process/step1.jpg";
import processStep2 from "./Process/step2.jpg";
import processStep3 from "./Process/step3.jpg";
import processStep4 from "./Process/step4.jpg";
import processStep5 from "./Process/step5.jpg";
import processStep6 from "./Process/step6.jpg";

export const images = {
  logo: {
    nav: logoNav,
    showcase: logoNav,
    watermark: logoWatermark,
  },
  factory: factoryHero,
  men: manHero,
  menScene,
  menCableDetail,
  process: {
    step1: processStep1,
    step2: processStep2,
    step3: processStep3,
    step4: processStep4,
    step5: processStep5,
    step6: processStep6,
  },
};

export default images;
