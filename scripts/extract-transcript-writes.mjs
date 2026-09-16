import fs from "node:fs";
import path from "node:path";

const transcriptPath =
  "C:/Users/HP/.cursor/projects/c-Users-HP-Desktop-setarehKermanWebsite/agent-transcripts/1c92dcf2-1b8a-42fd-817c-06bbb9d4f582/1c92dcf2-1b8a-42fd-817c-06bbb9d4f582.jsonl";
const outDir = path.resolve("c:/Users/HP/Desktop/setarehKermanWebsite/.codex-snapshots");

fs.mkdirSync(outDir, { recursive: true });

const lines = fs.readFileSync(transcriptPath, "utf8").split("\n").filter(Boolean);

const heroWrites = [];
const headerWrites = [];
const heroStrReplaces = [];
const headerStrReplaces = [];

for (let i = 0; i < lines.length; i++) {
  let obj;
  try {
    obj = JSON.parse(lines[i]);
  } catch {
    continue;
  }
  const content = obj?.message?.content || obj?.content;
  if (!Array.isArray(content)) continue;

  for (const item of content) {
    if (item.type !== "tool_use") continue;
    const filePath = item.input?.path || "";
    const isHero = /HeroSection\.jsx$/i.test(filePath);
    const isHeader = /Header\.jsx$/i.test(filePath);

    if (item.name === "Write") {
      const contents = item.input?.contents || "";
      const entry = { line: i + 1, path: filePath, contents };
      if (isHero) heroWrites.push(entry);
      if (isHeader) headerWrites.push(entry);
      // Hero Write without explicit path in input (path in contents only?)
      if (!filePath && contents.includes("HeroGoldCorner")) {
        heroWrites.push({ line: i + 1, path: "(implicit HeroSection)", contents });
      }
    }

    if (item.name === "StrReplace" && (isHero || isHeader)) {
      const entry = {
        line: i + 1,
        path: filePath,
        old_string: item.input?.old_string || "",
        new_string: item.input?.new_string || "",
      };
      if (isHero) heroStrReplaces.push(entry);
      if (isHeader) headerStrReplaces.push(entry);
    }

    // Write with path only in input.path for Hero
    if (item.name === "Write" && !filePath) {
      const contents = item.input?.contents || "";
      if (contents.includes("function HeroGoldCorner") || contents.includes("images.menScene")) {
        heroWrites.push({
          line: i + 1,
          path: "src/components/home/HeroSection.jsx (no path field)",
          contents,
        });
      }
    }
  }
}

function applyStrReplaces(base, replaces, filePattern) {
  let result = base;
  for (const r of replaces) {
    if (!filePattern.test(r.path)) continue;
    if (!result.includes(r.old_string)) {
      console.warn(`WARN line ${r.line}: old_string not found in ${r.path}`);
      continue;
    }
    result = result.replace(r.old_string, r.new_string);
  }
  return result;
}

console.log("=== HERO WRITES ===");
for (const w of heroWrites) {
  console.log(
    `line ${w.line}: ${w.path} (${w.contents.length} chars) menScene=${w.contents.includes("menScene")} HeroGoldCorner=${w.contents.includes("HeroGoldCorner")} Timer=${w.contents.includes("Timer")}`
  );
}

console.log("\n=== HEADER WRITES ===");
for (const w of headerWrites) {
  console.log(
    `line ${w.line}: ${w.path} (${w.contents.length} chars) inset-x-0=${w.contents.includes("inset-x-0")} #1B2A37=${w.contents.includes("#1B2A37")} dark=${w.contents.includes("backdrop-blur")}`
  );
}

// Pick best hero: line 396 refined dark with menScene/HeroGoldCorner/Timer
const refinedHeroWrite =
  heroWrites.find(
    (w) =>
      w.contents.includes("menScene") &&
      w.contents.includes("HeroGoldCorner") &&
      w.contents.includes("Timer")
  ) || heroWrites.find((w) => w.contents.includes("menScene"));

if (refinedHeroWrite) {
  let hero = refinedHeroWrite.contents;
  const startLine = refinedHeroWrite.line;
  const heroReplacesAfter = heroStrReplaces.filter((r) => r.line > startLine && r.line <= 427);
  hero = applyStrReplaces(hero, heroReplacesAfter, /HeroSection\.jsx$/i);
  const heroOut = path.join(outDir, "HeroSection.jsx");
  fs.writeFileSync(heroOut, hero, "utf8");
  console.log(`\nWrote HeroSection.jsx (${hero.split("\n").length} lines) from line ${refinedHeroWrite.line} + ${heroReplacesAfter.length} StrReplaces`);
}

// Pick best header: dark glass full-width
const darkHeaderWrite =
  headerWrites.find(
    (w) =>
      w.contents.includes("inset-x-0") ||
      w.contents.includes("#1B2A37") ||
      (w.contents.includes("backdrop-blur-2xl") &&
        w.contents.includes("text-white") &&
        !w.contents.includes("bg-white/50"))
  ) ||
  headerWrites.find(
    (w) =>
      w.contents.includes("backdrop-blur-2xl") &&
      (w.contents.includes("#1A1D23") || w.contents.includes("#111c29") || w.contents.includes("rgba(26,29,35"))
  );

if (darkHeaderWrite) {
  let header = darkHeaderWrite.contents;
  const startLine = darkHeaderWrite.line;
  const headerReplacesAfter = headerStrReplaces.filter(
    (r) => r.line > startLine && r.line <= 427 && /Header\.jsx$/i.test(r.path)
  );
  header = applyStrReplaces(header, headerReplacesAfter, /Header\.jsx$/i);
  const headerOut = path.join(outDir, "Header.jsx");
  fs.writeFileSync(headerOut, header, "utf8");
  console.log(`Wrote Header.jsx (${header.split("\n").length} lines) from line ${darkHeaderWrite.line} + ${headerReplacesAfter.length} StrReplaces`);
} else {
  console.log("\nNo dark Header Write found — will need reconstruction");
}

// Dump metadata
fs.writeFileSync(
  path.join(outDir, "extraction-meta.json"),
  JSON.stringify({ heroWrites: heroWrites.map((w) => ({ line: w.line, path: w.path, len: w.contents.length })), headerWrites: headerWrites.map((w) => ({ line: w.line, path: w.path, len: w.contents.length })), heroStrReplaceCount: heroStrReplaces.length, headerStrReplaceCount: headerStrReplaces.length }, null, 2)
);
