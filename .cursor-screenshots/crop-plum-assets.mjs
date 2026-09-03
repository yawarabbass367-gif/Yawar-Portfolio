import fs from "fs";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const full = "public/case-studies/plum/ref/full.jpg";
const out = "public/case-studies/plum/assets";
fs.mkdirSync(out, { recursive: true });

const meta = await sharp(full).metadata();
console.log("full", meta.width, meta.height);

// Crops tuned to 1752 x 14959 full render (PDF-native).
// Format: [name, left, top, width, height]
const crops = [
  // Hero waveform (standalone logo above PLUM)
  ["waveform-logo.png", 820, 80, 112, 72],
  // Hero phone with signup screen
  ["hero-phone.png", 650, 280, 450, 920],
  // Rocky product phone (quotes section left)
  ["phone-rocky.png", 90, 2480, 780, 980],
  // Green 3D search showcase
  ["showcase-search-green.png", 90, 4300, 1570, 900],
  // Wireframes grid (12 phones) - visual asset of screens only
  ["wireframes-grid.png", 80, 5400, 1590, 1950],
  // More wireframe phones row
  ["wireframes-row-extra.png", 120, 7350, 1510, 520],
  // Notifications phone
  ["phone-notifications.png", 620, 8200, 520, 1050],
  // Travel apps folder phone
  ["phone-apps-folder.png", 620, 9450, 520, 1050],
  // Welcome 3-phone cluster
  ["phones-welcome-cluster.png", 280, 10780, 1200, 900],
  // Mobile screens 3-phone row
  ["phones-mobile-row.png", 180, 11880, 1400, 900],
  // Final screens grid (8 phones on white/green)
  ["phones-final-grid.png", 80, 12850, 1590, 1450],
];

for (const [name, left, top, width, height] of crops) {
  const h = Math.min(height, meta.height - top);
  const w = Math.min(width, meta.width - left);
  if (h <= 0 || w <= 0) {
    console.log("skip", name, left, top);
    continue;
  }
  await sharp(full)
    .extract({ left, top, width: w, height: h })
    .png({ compressionLevel: 9 })
    .toFile(path.join(out, name));
  const st = fs.statSync(path.join(out, name));
  console.log(name, `${w}x${h}`, Math.round(st.size / 1024) + "kb");
}
console.log("done");
