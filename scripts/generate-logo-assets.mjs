/**
 * Generate favicons from logo-wb-wt.png with transparent background,
 * tight crop, and centered logo scaled to fill the canvas.
 * Run: node scripts/generate-logo-assets.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const master = path.join(root, "src/assets/images/logo-wb-wt.png");
const publicDir = path.join(root, "public");

/** How much of the square canvas the logo should fill (0–1). */
const FILL_RATIO = 0.97;

if (!fs.existsSync(master)) {
  console.error("Missing master logo:", master);
  process.exit(1);
}

async function removeBlackBackground(inputPath) {
  const image = sharp(inputPath).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Turn near-black pixels transparent (removes black bars/padding).
    if (r <= 24 && g <= 24 && b <= 24) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, { raw: { width, height, channels } })
    .trim({ threshold: 1 })
    .png()
    .toBuffer();
}

async function buildSquareIcon(sourceBuffer, size) {
  const meta = await sharp(sourceBuffer).metadata();
  const maxSide = Math.max(meta.width, meta.height);
  const target = Math.max(1, Math.round(size * FILL_RATIO));
  const scale = target / maxSide;
  const resizedWidth = Math.max(1, Math.round(meta.width * scale));
  const resizedHeight = Math.max(1, Math.round(meta.height * scale));

  const resized = await sharp(sourceBuffer)
    .resize(resizedWidth, resizedHeight, {
      fit: "inside",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const padTop = Math.floor((size - resizedHeight) / 2);
  const padBottom = size - resizedHeight - padTop;
  const padLeft = Math.floor((size - resizedWidth) / 2);
  const padRight = size - resizedWidth - padLeft;

  return sharp(resized)
    .extend({
      top: padTop,
      bottom: padBottom,
      left: padLeft,
      right: padRight,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
}

function createIcoFromPngs(pngBuffers) {
  const images = pngBuffers.map((png) => {
    const width = png.readUInt32BE(16);
    const height = png.readUInt32BE(20);
    return { width, height, png };
  });

  const count = images.length;
  const headerSize = 6 + count * 16;
  let dataOffset = headerSize;
  const totalSize = headerSize + images.reduce((sum, img) => sum + img.png.length, 0);
  const ico = Buffer.alloc(totalSize);

  ico.writeUInt16LE(0, 0);
  ico.writeUInt16LE(1, 2);
  ico.writeUInt16LE(count, 4);

  let dirOffset = 6;
  for (const img of images) {
    ico.writeUInt8(img.width >= 256 ? 0 : img.width, dirOffset);
    ico.writeUInt8(img.height >= 256 ? 0 : img.height, dirOffset + 1);
    ico.writeUInt8(0, dirOffset + 2);
    ico.writeUInt8(0, dirOffset + 3);
    ico.writeUInt16LE(1, dirOffset + 4);
    ico.writeUInt16LE(32, dirOffset + 6);
    ico.writeUInt32LE(img.png.length, dirOffset + 8);
    ico.writeUInt32LE(dataOffset, dirOffset + 12);

    img.png.copy(ico, dataOffset);
    dataOffset += img.png.length;
    dirOffset += 16;
  }

  return ico;
}

const trimmedLogo = await removeBlackBackground(master);

const outputs = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-48x48.png", size: 48 },
  { name: "favicon-192x192.png", size: 192 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "logo-512.png", size: 512 },
];

const pngBySize = new Map();

for (const { name, size } of outputs) {
  const png = await buildSquareIcon(trimmedLogo, size);
  await fs.promises.writeFile(path.join(publicDir, name), png);
  pngBySize.set(size, png);
}

const ico = createIcoFromPngs([
  pngBySize.get(16),
  pngBySize.get(32),
  pngBySize.get(48),
]);
await fs.promises.writeFile(path.join(publicDir, "favicon.ico"), ico);

console.log("Generated favicon/logo assets from logo-wb-wt.png (transparent, tight crop):");
for (const file of [
  "public/favicon.ico",
  "public/favicon-16x16.png",
  "public/favicon-32x32.png",
  "public/favicon-48x48.png",
  "public/favicon-192x192.png",
  "public/apple-touch-icon.png",
  "public/logo-512.png",
]) {
  const stat = fs.statSync(path.join(root, file));
  console.log(`  ${file} — ${(stat.size / 1024).toFixed(1)} KB`);
}
