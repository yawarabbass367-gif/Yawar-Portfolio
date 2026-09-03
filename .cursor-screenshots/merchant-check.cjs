const sharp = require("sharp");
(async () => {
  const m = await sharp("public/case-studies/nayapay/figma/board/merchant-phones-2x.png").metadata();
  const { data, info } = await sharp("public/case-studies/nayapay/figma/board/merchant-phones-2x.png").ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = (x, y) => {
    const i = (y * info.width + x) * 4;
    return [data[i], data[i + 1], data[i + 2], data[i + 3]].join(",");
  };
  let transparent = 0;
  for (let i = 3; i < data.length; i += 4) if (data[i] < 10) transparent++;
  console.log(JSON.stringify({ w: m.width, h: m.height, hasAlpha: m.hasAlpha, TL: px(0, 0), transparent, ratio: (m.width / m.height).toFixed(4), figma: (851 / 1152).toFixed(4) }));
})();
