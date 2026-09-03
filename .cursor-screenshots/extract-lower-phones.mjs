import sharp from "sharp";

async function extractPhones(srcPath, outPrefix, expectedCount) {
  const { data, info } = await sharp(srcPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  const isPhone = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) {
    const o = i * 4;
    const r = data[o];
    const g = data[o + 1];
    const b = data[o + 2];
    const a = data[o + 3];
    if (a < 30) continue;
    const isSoftGreen = g > 160 && g > r + 40 && g > b + 40 && a < 250;
    if (isSoftGreen) continue;
    isPhone[i] = 1;
  }

  const col = new Array(w).fill(0);
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) if (isPhone[y * w + x]) col[x]++;
  }
  const thr = h * 0.08;
  const runs = [];
  let s = null;
  for (let x = 0; x <= w; x++) {
    const on = x < w && col[x] > thr;
    if (on && s === null) s = x;
    if (!on && s !== null) {
      runs.push([s, x - 1]);
      s = null;
    }
  }
  const merged = [];
  for (const r of runs) {
    if (merged.length && r[0] - merged[merged.length - 1][1] < 50) {
      merged[merged.length - 1][1] = r[1];
    } else {
      merged.push([...r]);
    }
  }
  merged.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));
  const top = merged.slice(0, expectedCount).sort((a, b) => a[0] - b[0]);
  console.log(srcPath, "runs", top);

  const outs = [];
  for (let i = 0; i < top.length; i++) {
    const [x0, x1] = top[i];
    let minX = x1;
    let minY = h;
    let maxX = x0;
    let maxY = 0;
    for (let y = 0; y < h; y++) {
      for (let x = x0; x <= x1; x++) {
        if (!isPhone[y * w + x]) continue;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
    minX = Math.max(0, minX - 2);
    minY = Math.max(0, minY - 2);
    maxX = Math.min(w - 1, maxX + 2);
    maxY = Math.min(h - 1, maxY + 2);
    const cw = maxX - minX + 1;
    const ch = maxY - minY + 1;
    const out = `public/case-studies/plum/assets/${outPrefix}-${i + 1}.png`;
    await sharp(srcPath)
      .extract({ left: minX, top: minY, width: cw, height: ch })
      .png()
      .toFile(out);
    console.log("wrote", out, `${cw}x${ch}`, "from", minX, minY);
    outs.push({ out, width: cw, height: ch });
  }
  return outs;
}

await extractPhones(
  "public/case-studies/plum/assets/mobile-phones-row-2.png",
  "mobile-phone-mid",
  3,
);
await extractPhones(
  "public/case-studies/plum/assets/mobile-phones-row-3.png",
  "mobile-phone-bot",
  2,
);
