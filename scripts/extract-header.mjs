import fs from "node:fs";
import path from "node:path";

const transcriptPath =
  "C:/Users/HP/.cursor/projects/c-Users-HP-Desktop-setarehKermanWebsite/agent-transcripts/1c92dcf2-1b8a-42fd-817c-06bbb9d4f582/1c92dcf2-1b8a-42fd-817c-06bbb9d4f582.jsonl";
const outDir = path.resolve("c:/Users/HP/Desktop/setarehKermanWebsite/.codex-snapshots");

const lines = fs.readFileSync(transcriptPath, "utf8").split("\n").filter(Boolean);

function getTools(lineNum) {
  const obj = JSON.parse(lines[lineNum - 1]);
  const content = obj?.message?.content || obj?.content;
  return content.filter((x) => x.type === "tool_use");
}

// Line 395 refined dark header Write
const tools395 = getTools(395);
const headerWrite395 = tools395.find(
  (t) => t.name === "Write" && /Header\.jsx$/i.test(t.input?.path || "")
);

if (!headerWrite395) {
  console.error("No Header Write on line 395");
  process.exit(1);
}

let header = headerWrite395.input.contents;
console.log("Base Header from line 395:", header.split("\n").length, "lines");

// Apply Header StrReplaces after line 395 through 427
const headerReplaces = [];
for (let i = 395; i < lines.length; i++) {
  let obj;
  try {
    obj = JSON.parse(lines[i]);
  } catch {
    continue;
  }
  const content = obj?.message?.content || obj?.content;
  if (!Array.isArray(content)) continue;
  for (const item of content) {
    if (
      item.type === "tool_use" &&
      item.name === "StrReplace" &&
      /Header\.jsx$/i.test(item.input?.path || "")
    ) {
      headerReplaces.push({ line: i + 1, ...item.input });
    }
  }
  if (i > 427) break;
}

for (const r of headerReplaces) {
  if (header.includes(r.old_string)) {
    header = header.replace(r.old_string, r.new_string);
    console.log("Applied StrReplace line", r.line);
  } else {
    console.warn("Skipped StrReplace line", r.line, "- old_string not found");
  }
}

fs.writeFileSync(path.join(outDir, "Header.jsx"), header, "utf8");
console.log("Wrote Header.jsx:", header.split("\n").length, "lines");
console.log("Has inset-x-0:", header.includes("inset-x-0"));
console.log("Has #1B2A37:", header.includes("#1B2A37"));
console.log("Has backdrop-blur:", header.includes("backdrop-blur"));
console.log("Has text-white:", header.includes("text-white"));
