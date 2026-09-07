/**
 * Compress hero images for production (factory background + man portrait).
 * Run: node scripts/optimize-hero-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, "../src/assets/images");

async function optimize(input, output, maxWidth, format) {
  if (!fs.existsSync(input)) {
    console.warn(`Skip missing: ${input}`);
    return;
  }

  const before = fs.statSync(input).size;
  let pipeline = sharp(input).rotate().resize(maxWidth, null, {
    withoutEnlargement: true,
  });

  const buffer =
    format === "jpeg"
      ? await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer()
      : await pipeline
          .png({ compressionLevel: 9, effort: 10, palette: false })
          .toBuffer();

  fs.writeFileSync(output, buffer);
  console.log(
    `${path.basename(output)}: ${(before / 1024).toFixed(0)} KB -> ${(buffer.length / 1024).toFixed(0)} KB`,
  );
}

await optimize(
  path.join(imagesDir, "factory.png"),
  path.join(imagesDir, "factory.jpg"),
  1600,
  "jpeg",
);

await optimize(
  path.join(imagesDir, "men/men.png"),
  path.join(imagesDir, "men/men.png"),
  900,
  "png",
);

await optimize(
  path.join(imagesDir, "men/2.png"),
  path.join(imagesDir, "men/2.png"),
  256,
  "png",
);
