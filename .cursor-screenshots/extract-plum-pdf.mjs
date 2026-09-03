import fs from "fs";
import path from "path";
import { createRequire } from "module";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { createCanvas } from "@napi-rs/canvas";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const pdfPath = "public/case-studies/plum-case-study.pdf";
const outDir = "public/case-studies/plum";
const assetDir = path.join(outDir, "assets");
const refDir = path.join(outDir, "ref");
fs.mkdirSync(assetDir, { recursive: true });
fs.mkdirSync(refDir, { recursive: true });

const data = new Uint8Array(fs.readFileSync(pdfPath));
const doc = await getDocument({ data, disableWorker: true }).promise;
const page = await doc.getPage(1);

const textContent = await page.getTextContent();
const items = textContent.items
  .map((i) => ({
    str: i.str,
    x: Math.round(i.transform[4] * 10) / 10,
    y: Math.round(i.transform[5] * 10) / 10,
    w: Math.round(i.width * 10) / 10,
    size: Math.round(Math.abs(i.transform[0]) * 10) / 10,
    font: i.fontName,
  }))
  .filter((i) => i.str.trim())
  .sort((a, b) => b.y - a.y || a.x - b.x);

fs.writeFileSync(".cursor-screenshots/plum-text.json", JSON.stringify(items, null, 2));
console.log("text items", items.length);
for (const i of items) {
  console.log(`${i.y}\t${i.x}\t${i.size}px\t${JSON.stringify(i.str)}`);
}

// High-res full render for cropping individual assets
const targetWidth = 1752; // native PDF width
const base = page.getViewport({ scale: 1 });
const scale = targetWidth / base.width;
const viewport = page.getViewport({ scale });
console.log("full render", Math.round(viewport.width), "x", Math.round(viewport.height));

const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
const ctx = canvas.getContext("2d");
await page.render({ canvasContext: ctx, viewport }).promise;
const png = canvas.toBuffer("image/png");
await sharp(png).jpeg({ quality: 90, mozjpeg: true }).toFile(path.join(refDir, "full.jpg"));
console.log("wrote full.jpg");

// Also write vertical band refs for section analysis (not for web use)
const sliceH = 2000;
const slices = Math.ceil(canvas.height / sliceH);
for (let i = 0; i < slices; i++) {
  const y = i * sliceH;
  const h = Math.min(sliceH, canvas.height - y);
  await sharp(png)
    .extract({ left: 0, top: y, width: canvas.width, height: h })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(refDir, `band-${String(i + 1).padStart(2, "0")}.jpg`));
}
console.log("bands", slices);
