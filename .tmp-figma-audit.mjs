import fs from "fs";

const text = fs.readFileSync(
  "C:/Users/Dell/.cursor/projects/c-Users-Dell-Documents-personal-portfolio/agent-tools/6f72463f-e108-421a-ba82-1f6e10e9a579.txt",
  "utf8"
);

const count = (arr) => {
  const c = new Map();
  for (const n of arr) c.set(n, (c.get(n) || 0) + 1);
  return [...c.entries()].sort((a, b) => b[1] - a[1]);
};

const inst = [...text.matchAll(/<instance id="([^"]+)" name="([^"]+)"/g)].map((m) => m[2]);
const instC = count(inst);

let lines = [];
lines.push("=== UNIQUE INSTANCES (count) ===");
for (const [n, k] of instC) lines.push(`${String(k).padStart(4)}  ${n}`);

lines.push("\n=== SYMBOLS ===");
for (const m of text.matchAll(/<symbol id="([^"]+)" name="([^"]+)"/g)) {
  lines.push(`${m[1]}  ${m[2]}`);
}

lines.push("\n=== TOP-LEVEL FRAMES ===");
for (const m of text.matchAll(
  /^  <frame id="([^"]+)" name="([^"]+)" x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)"/gm
)) {
  lines.push(`${m[1]}\t${m[2]}\tx=${m[3]} y=${m[4]} ${m[5]}x${m[6]}`);
}

lines.push("\n=== TOP-LEVEL TEXTS ===");
for (const m of text.matchAll(/^  <text id="([^"]+)" name="([^"]+)"/gm)) {
  lines.push(`${m[1]}  ${m[2]}`);
}

const iconKeys = [
  "icon",
  "arrow",
  "vuesax",
  "wifi",
  "battery",
  "signal",
  "check",
  "shield",
  "star",
  "alert",
  "radio",
  "switch",
  "checkbox",
  "chevron",
  "eye",
  "lock",
  "home",
  "search",
  "bell",
  "camera",
  "upload",
  "file",
  "doc",
  "plus",
  "minus",
  "close",
  "x ",
  "info",
  "warning",
  "fingerprint",
  "face",
  "biometric",
];
const iconish = [];
for (const m of text.matchAll(/<(?:frame|instance|symbol) id="[^"]+" name="([^"]+)"/g)) {
  const n = m[1];
  const nl = n.toLowerCase();
  if (iconKeys.some((k) => nl.includes(k))) iconish.push(n);
}
lines.push("\n=== ICON-LIKE NAMES ===");
for (const [n, k] of count(iconish)) lines.push(`${String(k).padStart(4)}  ${n}`);

const frames = [...text.matchAll(/<frame id="[^"]+" name="([^"]+)"/g)].map((m) => m[1]);
const pat = count(frames);
lines.push("\n=== REPEATED FRAME PATTERNS (>=5) ===");
for (const [n, k] of pat) {
  if (k >= 5 && !n.startsWith("Group ") && !n.startsWith("Rectangle") && n !== "Frame") {
    lines.push(`${String(k).padStart(4)}  ${n}`);
  }
}

const texts = [...text.matchAll(/<text id="[^"]+" name="([^"]+)"/g)].map((m) => m[1]);
lines.push("\n=== TEXT LAYER NAMES ===");
for (const [n, k] of count(texts)) lines.push(`${String(k).padStart(4)}  ${n}`);

lines.push("\n=== PATH-LIKE INSTANCE NAMES ===");
for (const [n, k] of instC) {
  if (n.includes("/") || n.startsWith("Building")) lines.push(`${String(k).padStart(4)}  ${n}`);
}

lines.push("\n=== BUTTON INSTANCE SIZES ===");
const btnSizes = [];
for (const m of text.matchAll(
  /<instance id="[^"]+" name="Button" x="[^"]+" y="[^"]+" width="([^"]+)" height="([^"]+)"/g
)) {
  btnSizes.push(`${m[1]}x${m[2]}`);
}
for (const [n, k] of count(btnSizes)) lines.push(`${String(k).padStart(4)}  ${n}`);

lines.push("\n=== FOOTER / HEADER / NAV FRAME NAMES ===");
for (const [n, k] of pat) {
  const nl = n.toLowerCase();
  if (["footer", "header", "statusbar", "status-bar", "cta", "nav", "tab", "sheet", "modal", "bottom"].some((x) => nl.includes(x))) {
    lines.push(`${String(k).padStart(4)}  ${n}`);
  }
}

// named input instances
lines.push("\n=== FORM-RELATED INSTANCES ===");
for (const [n, k] of instC) {
  const nl = n.toLowerCase();
  if (
    ["input", "button", "checkbox", "otp", "password", "select", "switch", "radio", "progress", "alert", "badge"].some((x) =>
      nl.includes(x)
    )
  ) {
    lines.push(`${String(k).padStart(4)}  ${n}`);
  }
}

fs.writeFileSync(
  "C:/Users/Dell/Documents/personal-portfolio/.tmp-figma-audit.txt",
  lines.join("\n"),
  "utf8"
);
console.log("wrote", lines.length, "lines");
