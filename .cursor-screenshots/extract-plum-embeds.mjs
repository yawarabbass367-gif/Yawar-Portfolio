import fs from "fs";
import path from "path";
import { createRequire } from "module";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const outDir = "public/case-studies/plum/assets";
fs.mkdirSync(outDir, { recursive: true });

const data = new Uint8Array(fs.readFileSync("public/case-studies/plum-case-study.pdf"));
const doc = await getDocument({ data, disableWorker: true }).promise;
const page = await doc.getPage(1);
const ops = await page.getOperatorList();
const common = await page.commonObjs;
const objs = page.objs;

let imgCount = 0;
const names = [];

for (let i = 0; i < ops.fnArray.length; i++) {
  const fn = ops.fnArray[i];
  // OPS.paintImageXObject = 85, paintInlineImageXObject = 86, paintImageXObjectRepeat = 88
  if (fn === 85 || fn === 88) {
    const name = ops.argsArray[i][0];
    names.push(name);
  }
}

console.log("image refs", names.length, [...new Set(names)].length, "unique");

const unique = [...new Set(names)];
for (const name of unique) {
  try {
    const img = objs.get(name) || common.get(name);
    if (!img) {
      console.log("missing", name);
      continue;
    }
    // Resolve if promise-like
    const resolved = typeof img.then === "function" ? await img : img;
    const w = resolved.width;
    const h = resolved.height;
    let raw = resolved.data;
    if (!raw) {
      console.log("no data", name, Object.keys(resolved));
      continue;
    }
    imgCount++;
    const file = path.join(outDir, `embed-${String(imgCount).padStart(2, "0")}-${w}x${h}.png`);
    // PDF images are often RGB or RGBA Uint8ClampedArray
    const channels = raw.length / (w * h);
    if (channels === 4 || channels === 3 || channels === 1) {
      await sharp(Buffer.from(raw), {
        raw: { width: w, height: h, channels: Math.round(channels) },
      })
        .png()
        .toFile(file);
      console.log("saved", path.basename(file), "ch", channels);
    } else {
      console.log("odd channels", name, w, h, raw.length, channels);
    }
  } catch (e) {
    console.log("err", name, e.message);
  }
}
console.log("done embeds", imgCount);
