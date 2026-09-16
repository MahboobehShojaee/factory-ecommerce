// Dev-only helper: captures the hero at a fixed 1024px viewport so the result can be
// diffed against the design reference. Not part of the build.
import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const url = process.argv[2] || "http://localhost:5175/fa";
const out = process.argv[3] || ".tmp-ref/hero-now.png";
const width = Number(process.argv[4] || 1024);
const height = Number(process.argv[5] || 900);

mkdirSync(".tmp-ref", { recursive: true });

const channels = ["chrome", "msedge", "chrome-beta"];
let browser = null;
let lastError = null;
for (const channel of channels) {
  try {
    browser = await chromium.launch({ channel, args: ["--force-device-scale-factor=1", "--hide-scrollbars"] });
    console.log("launched channel:", channel);
    break;
  } catch (error) {
    lastError = error;
  }
}
if (!browser) {
  console.error("no browser channel available:", lastError?.message);
  process.exit(1);
}

const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "domcontentloaded" });
await page.waitForFunction(
  () => !!document.querySelector("section[aria-labelledby='hero-heading']"),
  null,
  { timeout: 30000, polling: 250 },
);
await page.addStyleTag({
  content: "*,*::before,*::after{animation-duration:0s!important;animation-delay:0s!important;transition-duration:0s!important;}",
});
await page
  .waitForFunction(
    () => Array.from(document.images).every((img) => img.complete),
    null,
    { timeout: 15000, polling: 250 },
  )
  .catch(() => console.warn("some images never settled; continuing"));
await page.waitForTimeout(1500);

const box = await page.evaluate(() => {
  const s = document.querySelector("section[aria-labelledby='hero-heading']");
  const r = s.getBoundingClientRect();
  return { x: r.x, y: r.y + window.scrollY, width: r.width, height: r.height };
});
console.log("hero box:", JSON.stringify(box));

await page.screenshot({ path: out, clip: { x: 0, y: 0, width, height: Math.min(height, Math.ceil((box?.y ?? 0) + (box?.height ?? height))) } });
console.log("wrote", out);

await browser.close();
