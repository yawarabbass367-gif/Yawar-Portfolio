import fs from "fs";

const src = String.raw`C:\Users\Dell\.cursor\projects\c-Users-Dell-Documents-personal-portfolio\agent-tools\73c82f2a-2e5a-44f8-9723-3615fca207c9.txt`;
let text = fs.readFileSync(src, "utf8");
if (text.includes("IMPORTANT: After you call this tool")) {
  text = text.split("IMPORTANT: After you call this tool")[0];
}

const topRe =
  /^  <(frame|symbol|rounded-rectangle|vector) id="([^"]+)" name="([^"]+)" x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)"/gm;
const top = [...text.matchAll(topRe)].map((m) => ({
  kind: m[1],
  id: m[2],
  name: m[3],
  x: m[4],
  y: m[5],
  w: m[6],
  h: m[7],
}));

const instances = [...text.matchAll(/<instance id="([^"]+)" name="([^"]+)"/g)].map(
  (m) => m[2]
);
const symbols = [...text.matchAll(/<symbol id="([^"]+)" name="([^"]+)"/g)].map((m) => ({
  id: m[1],
  name: m[2],
}));
const frames = [...text.matchAll(/<frame id="([^"]+)" name="([^"]+)"/g)].map((m) => m[2]);

function count(arr) {
  const c = new Map();
  for (const n of arr) c.set(n, (c.get(n) || 0) + 1);
  return [...c.entries()].sort((a, b) => b[1] - a[1]);
}

const iconPat =
  /(icon|arrow|chevron|check|eye|wifi|battery|signal|lock|shield|star|bell|search|trash|upload|file|home|user|edit|building|fingerprint|cloud|info|alert|clock|car|mail|phone|calendar|plus|minus|close|radio|checkbox|vuesax)/i;
const iconNames = [];
for (const m of text.matchAll(/<(frame|vector|symbol|instance) id="([^"]+)" name="([^"]+)"/g)) {
  const name = m[3];
  if (iconPat.test(name) || ["check", "edit", "home", "user", "info", "star", "bell"].includes(name.toLowerCase())) {
    iconNames.push(name);
  }
}

const screens = [];
const nonscreen = [];
for (const t of top) {
  const wf = parseFloat(t.w);
  const hf = parseFloat(t.h);
  if (t.kind === "frame" && wf >= 360 && wf <= 430 && hf >= 700) screens.push(t);
  else if (t.kind === "frame") nonscreen.push(t);
}

const instC = count(instances);
const frameC = count(frames);
const iconC = count(iconNames);

const lines = [];
lines.push(`INSTANCE_UNIQUE ${instC.length} TOTAL ${instances.length}`);
lines.push(`SYMBOLS ${symbols.length}`);
lines.push(`SCREENS ${screens.length}`);
lines.push("=== INSTANCES ===");
for (const [n, c] of instC) lines.push(`${String(c).padStart(4)}  ${n}`);
lines.push("=== SYMBOLS ===");
for (const s of symbols) lines.push(`${s.id}  ${s.name}`);
lines.push("=== SCREENS ===");
for (const s of screens) lines.push(`${s.id}\t${s.name}\t${s.x}\t${s.y}\t${s.w}x${s.h}`);
lines.push("=== TOP NONSCREEN ===");
for (const s of nonscreen) lines.push(`${s.id}\t${s.name}\t${s.w}x${s.h}`);
lines.push("=== ICON NAMES ===");
for (const [n, c] of iconC) lines.push(`${String(c).padStart(4)}  ${n}`);
lines.push("=== REPEATED FRAMES >=8 ===");
for (const [n, c] of frameC) if (c >= 8) lines.push(`${String(c).padStart(4)}  ${n}`);

const out = String.raw`C:\Users\Dell\Documents\personal-portfolio\.tmp-figma-audit-out.txt`;
fs.writeFileSync(out, lines.join("\n"), "utf8");
console.log("wrote", out, lines.length);
