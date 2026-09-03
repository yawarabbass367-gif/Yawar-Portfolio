const sharp = require("sharp");
(async () => {
  const f = "public/case-studies/nayapay/hero/hero-composition.png";
  const { data, info } = await sharp(f).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;
  let bottom = -1, top = h;
  for (let y = h - 1; y >= 0; y--) {
    for (let x = 0; x < w; x++) {
      if (data[(y * w + x) * 4 + 3] > 20) { bottom = y; break; }
    }
    if (bottom >= 0) break;
  }
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (data[(y * w + x) * 4 + 3] > 20) { top = y; break; }
    }
    if (top < h) break;
  }
  console.log({ w, h, top, bottom, padBottom: h - 1 - bottom, padTop: top });
})();
