import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const requiredFiles = [
  "meta.json",
  "hyperframes.json",
  "index.html",
  "compositions/01-typer.html",
  "compositions/02-spotlight.html",
  "compositions/03-assembly.html",
  "compositions/04-ticker.html",
  "compositions/05-chat.html",
  "compositions/06-outro.html",
];

const forbiddenPatterns = [
  { pattern: /repeat\s*:\s*-1/, label: "infinite GSAP repeat" },
  { pattern: /Math\.random/, label: "non-deterministic Math.random" },
  { pattern: /Date\.now/, label: "non-deterministic Date.now" },
  { pattern: /setTimeout/, label: "async timeline construction" },
];

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

for (const rel of requiredFiles) {
  if (!fs.existsSync(path.join(root, rel))) {
    throw new Error(`Missing ${rel}`);
  }
}

const index = read("index.html");
for (const id of [
  "case-typer",
  "case-spotlight",
  "case-assembly",
  "case-ticker",
  "case-chat",
  "case-outro",
]) {
  if (!index.includes(`data-composition-id="${id}"`)) {
    throw new Error(`index.html does not reference ${id}`);
  }
}

for (const rel of requiredFiles.filter((file) => file.endsWith(".html"))) {
  const text = read(rel);
  for (const { pattern, label } of forbiddenPatterns) {
    if (pattern.test(text)) {
      throw new Error(`${rel} contains ${label}`);
    }
  }

  const compositionMatch = text.match(/data-composition-id="([^"]+)"/);
  if (rel !== "index.html" && !compositionMatch) {
    throw new Error(`${rel} lacks data-composition-id`);
  }
  if (rel !== "index.html") {
    const id = compositionMatch[1];
    if (!text.includes(`window.__timelines["${id}"]`)) {
      throw new Error(`${rel} does not register timeline ${id}`);
    }
  }
}

console.log("prompt-video-showcase structure OK");
