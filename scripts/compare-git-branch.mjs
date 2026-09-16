import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "git-snapshots");
const reportPath = path.join(root, "git-report.txt");

fs.mkdirSync(outDir, { recursive: true });

function run(cmd) {
  try {
    return execSync(cmd, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  } catch (err) {
    return `${err.stdout || ""}${err.stderr || ""}${err.message || err}`;
  }
}

function tryShow(ref, filePath, outName) {
  const outFile = path.join(outDir, outName);
  try {
    const content = execSync(`git show ${ref}:${filePath}`, {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    fs.writeFileSync(outFile, content);
    return { ok: true, bytes: content.length, outFile };
  } catch (err) {
    fs.writeFileSync(outFile, `[MISSING] ${err.stderr || err.message}`);
    return { ok: false, outFile, error: err.stderr || err.message };
  }
}

const sections = [
  ["BRANCHES", "git branch -a"],
  ["CURRENT_BRANCH", "git rev-parse --abbrev-ref HEAD"],
  ["MERGE_BASE", "git merge-base main codex/refine-hero-and-glass-navbar"],
  ["CODEX_LOG", "git log codex/refine-hero-and-glass-navbar --oneline -15"],
  [
    "CODEX_FILE_LOG",
    "git log codex/refine-hero-and-glass-navbar --oneline -- src/components/layout/Header.jsx src/components/home/HeroSection.jsx",
  ],
  ["COMMIT_640656f", "git show 640656f --stat --name-only"],
  [
    "DIFF_MAIN_VS_CODEX",
    "git diff main...codex/refine-hero-and-glass-navbar -- src/components/layout/Header.jsx src/components/home/HeroSection.jsx",
  ],
  [
    "DIFF_MAIN_VS_WORKING",
    "git diff main -- src/components/layout/Header.jsx src/components/home/HeroSection.jsx",
  ],
  [
    "DIFF_CODEX_HEAD_VS_WORKING",
    "git diff codex/refine-hero-and-glass-navbar -- src/components/layout/Header.jsx src/components/home/HeroSection.jsx",
  ],
];

let report = `# Git comparison report\nGenerated: ${new Date().toISOString()}\n\n`;

for (const [title, cmd] of sections) {
  report += `\n## ${title}\n\`\`\`\n${run(cmd).trim()}\n\`\`\`\n`;
}

const snapshots = [
  ["main", "main", "Header.main.jsx", "src/components/layout/Header.jsx"],
  ["main", "main", "HeroSection.main.jsx", "src/components/home/HeroSection.jsx"],
  ["codex", "codex/refine-hero-and-glass-navbar", "Header.codex.jsx", "src/components/layout/Header.jsx"],
  ["codex", "codex/refine-hero-and-glass-navbar", "HeroSection.codex.jsx", "src/components/home/HeroSection.jsx"],
  ["head", "HEAD", "Header.head.jsx", "src/components/layout/Header.jsx"],
  ["head", "HEAD", "HeroSection.head.jsx", "src/components/home/HeroSection.jsx"],
];

report += `\n## SNAPSHOTS\n`;
for (const [label, ref, name, filePath] of snapshots) {
  const result = tryShow(ref, filePath, name);
  report += `- ${label} ${filePath}: ${result.ok ? `${result.bytes} bytes -> ${name}` : `MISSING (${result.error})`}\n`;
}

fs.writeFileSync(reportPath, report);
console.log("Wrote", reportPath);
