// Dev-only helper: prints the hero's element rects so they can be checked against
// the design's pixel grid. Not part of the build.
import { chromium } from "playwright-core";

const url = process.argv[2] || "http://localhost:5175/fa";
const width = Number(process.argv[3] || 1024);

const browser = await chromium.launch({ channel: "chrome", args: ["--hide-scrollbars"] });
const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "domcontentloaded" });
await page.waitForFunction(() => !!document.querySelector("section[aria-labelledby='hero-heading']"), null, {
  timeout: 30000,
  polling: 250,
});
await page.waitForTimeout(1500);

const rects = await page.evaluate(() => {
  const hero = document.querySelector("section[aria-labelledby='hero-heading']");
  const base = hero.getBoundingClientRect();
  const pick = (label, el) => {
    if (!el) return { label, missing: true };
    const r = el.getBoundingClientRect();
    return {
      label,
      x: Math.round(r.x - base.x),
      y: Math.round(r.y - base.y),
      w: Math.round(r.width),
      h: Math.round(r.height),
      right: Math.round(r.right - base.x),
      bottom: Math.round(r.bottom - base.y),
    };
  };
  const copy = hero.querySelector("h1")?.parentElement;
  const out = [
    pick("hero", hero),
    pick("header", document.querySelector("header nav")),
    pick("copyColumn", copy),
    pick("badge", copy?.children[0]),
    pick("headline", hero.querySelector("h1")),
    pick("subtitle", hero.querySelector("h1")?.nextElementSibling),
    pick("buttonRow", hero.querySelector("[aria-label='Primary actions']")),
    pick("featureRow", hero.querySelector("[aria-label='Primary actions']")?.nextElementSibling),
    pick("statsBar", hero.querySelector("[aria-label='Key statistics']")),
  ];
  const btn = hero.querySelector("[aria-label='Primary actions'] a");
  const bs = btn ? getComputedStyle(btn) : null;
  const nav = document.querySelector("header nav");
  const navKids = Array.from(nav?.children || []).map((el, i) => {
    const r = el.getBoundingClientRect();
    return `child${i} h=${Math.round(r.height)} w=${Math.round(r.width)} x=${Math.round(r.x)}`;
  });
  const h1 = hero.querySelector("h1");
  const cs = h1 ? getComputedStyle(h1) : null;
  return {
    rects: out,
    headlineFont: cs?.fontSize,
    headlineColor: cs?.color,
    button: bs
      ? { font: bs.fontSize, line: bs.lineHeight, padTop: bs.paddingTop, padBottom: bs.paddingBottom, border: bs.borderTopWidth }
      : null,
    navKids,
  };
});

for (const r of rects.rects) {
  if (r.missing) {
    console.log(`${r.label.padEnd(12)} MISSING`);
    continue;
  }
  console.log(
    `${r.label.padEnd(12)} x=${String(r.x).padStart(4)} y=${String(r.y).padStart(4)} w=${String(r.w).padStart(4)} h=${String(r.h).padStart(4)}  right=${String(r.right).padStart(4)} bottom=${String(r.bottom).padStart(4)}`,
  );
}
console.log("headline font/color:", rects.headlineFont, rects.headlineColor);
console.log("button computed:", JSON.stringify(rects.button));
console.log("nav children:", rects.navKids.join(" | "));

await browser.close();
