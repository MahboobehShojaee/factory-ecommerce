/**
 * Compress About page process step images in place.
 * Run: node scripts/optimize-process-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const processDir = path.resolve(__dirname, "../src/assets/images/Process");
const maxWidth = 1000;

const files = fs
  .readdirSync(processDir)
  .filter((name) => /^step[1-6]\.(png|jpe?g)$/i.test(name))
  .sort();

for (const file of files) {
  const inputPath = path.join(processDir, file);
  const base = path.basename(file, path.extname(file));
  const outputPath = path.join(processDir, `${base}.jpg`);
  const before = fs.statSync(inputPath).size;

  await sharp(inputPath)
    .rotate()
    .resize(maxWidth, null, { withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(outputPath);

  const after = fs.statSync(outputPath).size;
  if (outputPath !== inputPath) {
    fs.unlinkSync(inputPath);
  }

  console.log(
    `${base}: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB (${path.basename(outputPath)})`,
  );
}
