const sharp = require("sharp");
(async () => {
  const src = "public/case-studies/nayapay/figma/board/merchant-phones-2x.png";
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] <= 8 && data[i + 1] <= 8 && data[i + 2] <= 8) data[i + 3] = 0;
  }
  const out = "public/case-studies/nayapay/figma/board/merchant-phones-composition.png";
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toFile(out);
  const m = await sharp(out).metadata();
  const raw = await sharp(out).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const tl = raw.data.slice(0, 4).join(",");
  let t = 0;
  for (let i = 3; i < raw.data.length; i += 4) if (raw.data[i] < 10) t++;
  console.log(JSON.stringify({ out, w: m.width, h: m.height, hasAlpha: m.hasAlpha, TL: tl, transparent: t }));
})();
