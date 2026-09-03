import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { createCanvas } from "@napi-rs/canvas";
import fs from "fs";
import path from "path";

const pdfPath = "public/case-studies/medico-case-study.pdf";
const refDir = "public/case-studies/medico/ref";
const assetsDir = "public/case-studies/medico/assets";
fs.mkdirSync(refDir, { recursive: true });
fs.mkdirSync(assetsDir, { recursive: true });

const data = new Uint8Array(fs.readFileSync(pdfPath));
const pdf = await getDocument({ data, disableFontFace: true }).promise;
const page = await pdf.getPage(1);
const scale = 1;
const viewport = page.getViewport({ scale });
const W = Math.round(viewport.width);
const H = Math.round(viewport.height);
console.log("page", W, H);

const BAND = 1800;
let band = 0;
for (let y = 0; y < H; y += BAND) {
  const h = Math.min(BAND, H - y);
  const canvas = createCanvas(W, h);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, W, h);
  ctx.save();
  ctx.translate(0, -y);
  await page.render({ canvasContext: ctx, viewport }).promise;
  ctx.restore();
  const out = path.join(refDir, `band-${String(band).padStart(2, "0")}.jpg`);
  fs.writeFileSync(out, canvas.toBuffer("image/jpeg", 82));
  console.log("band", band, "y", y, "h", h, "->", out);
  band++;
}

// Extract embedded image XObjects
const ops = await page.getOperatorList();
const OPS = {
  paintImageXObject: 85,
  paintImageXObjectRepeat: 82,
  paintInlineImageXObject: 86,
};
const names = new Set();
for (let i = 0; i < ops.fnArray.length; i++) {
  const fn = ops.fnArray[i];
  if (fn === OPS.paintImageXObject || fn === OPS.paintImageXObjectRepeat) {
    const name = ops.argsArray[i]?.[0];
    if (typeof name === "string") names.add(name);
  }
}
console.log("image xobjects", [...names]);

let extracted = 0;
for (const name of names) {
  try {
    const img = await new Promise((resolve, reject) => {
      page.objs.get(name, (obj) => {
        if (!obj) reject(new Error("missing " + name));
        else resolve(obj);
      });
    });
    if (!img?.data || !img?.width) {
      console.log("skip", name, Object.keys(img || {}));
      continue;
    }
    const w = img.width;
    const h = img.height;
    const kind = img.kind; // 1=GRAYSCALE, 2=RGB, 3=RGBA
    const canvas = createCanvas(w, h);
    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(w, h);
    const src = img.data;
    if (kind === 2 || src.length === w * h * 3) {
      for (let i = 0, j = 0; i < src.length; i += 3, j += 4) {
        imageData.data[j] = src[i];
        imageData.data[j + 1] = src[i + 1];
        imageData.data[j + 2] = src[i + 2];
        imageData.data[j + 3] = 255;
      }
    } else if (kind === 3 || src.length === w * h * 4) {
      imageData.data.set(src);
    } else if (kind === 1 || src.length === w * h) {
      for (let i = 0, j = 0; i < src.length; i++, j += 4) {
        imageData.data[j] = imageData.data[j + 1] = imageData.data[j + 2] = src[i];
        imageData.data[j + 3] = 255;
      }
    } else {
      console.log("unknown format", name, w, h, src.length, kind);
      continue;
    }
    ctx.putImageData(imageData, 0, 0);
    const out = path.join(assetsDir, `embed-${String(extracted).padStart(3, "0")}-${w}x${h}.png`);
    fs.writeFileSync(out, canvas.toBuffer("image/png"));
    console.log("embed", extracted, name, w, h, "->", out);
    extracted++;
  } catch (e) {
    console.log("fail", name, e.message);
  }
}
console.log("done embeds", extracted);
