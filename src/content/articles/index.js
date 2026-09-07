import { xlpeVsPvcArticle } from './xlpe-vs-pvc-comparison.js';
import { lowVoltageCablesArticle } from './low-voltage-cables-guide.js';
import { cableFaqsArticle } from './cable-faqs.js';
import { cableSizingBasicsArticle } from './cable-sizing-basics.js';
import { copperVsAluminumArticle } from './copper-vs-aluminum-conductors.js';
import { iecStandardsArticle } from './iec-standards-overview.js';
import { voltageDropGuideArticle } from './voltage-drop-calculation-guide.js';
import { ampacityChartArticle } from './ampacity-chart-reference.js';

export {
  xlpeVsPvcArticle,
  lowVoltageCablesArticle,
  cableFaqsArticle,
  cableSizingBasicsArticle,
  copperVsAluminumArticle,
  iecStandardsArticle,
  voltageDropGuideArticle,
  ampacityChartArticle,
};

export const articles = [
  xlpeVsPvcArticle,
  lowVoltageCablesArticle,
  cableFaqsArticle,
  cableSizingBasicsArticle,
  copperVsAluminumArticle,
  iecStandardsArticle,
  voltageDropGuideArticle,
  ampacityChartArticle,
];

export const articlesMap = articles.reduce((acc, article) => {
  acc[article.slug] = article;
  return acc;
}, {});

export default articles;
