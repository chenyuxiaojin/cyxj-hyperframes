import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(root, "index.html");

for (const rel of ["meta.json", "hyperframes.json", "DESIGN.md", "index.html"]) {
  if (!fs.existsSync(path.join(root, rel))) {
    throw new Error(`Missing ${rel}`);
  }
}

const index = fs.readFileSync(indexPath, "utf8");

const required = [
  'data-composition-id="burn-through-preview"',
  'data-duration="7"',
  'data-width="1920"',
  'data-height="1080"',
  "three@0.160.0",
  "new THREE.PerspectiveCamera",
  "new THREE.WebGLRenderer",
  "paused: true",
  'window.__timelines["burn-through-preview"]',
  "$15,000",
  "$0",
  "money-particle",
  "red-bar",
  "shimmer",
  "JetBrains Mono",
  "#D4AF37",
  "#FF2D2D",
  "#0A0A0F",
];

for (const needle of required) {
  if (!index.includes(needle)) {
    throw new Error(`index.html missing ${needle}`);
  }
}

const forbidden = [
  [/Math\.random/, "Math.random"],
  [/Date\.now/, "Date.now"],
  [/repeat\s*:\s*-1/, "repeat:-1"],
  [/setTimeout|setInterval|requestAnimationFrame/, "async frame loop"],
  [/`[^`]*\$\{/, "template literal selector risk"],
];

for (const [pattern, label] of forbidden) {
  if (pattern.test(index)) {
    throw new Error(`index.html contains forbidden ${label}`);
  }
}

console.log("15000 burn-through preview structure OK");
