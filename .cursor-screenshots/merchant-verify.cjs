const sharp = require("sharp");
(async () => {
  const { data, info } = await sharp("public/case-studies/nayapay/figma/board/merchant-phones-user.png").ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = (x, y) => {
    const i = (y * info.width + x) * 4;
    return [data[i], data[i + 1], data[i + 2], data[i + 3]].join(",");
  };
  let t = 0;
  for (let i = 3; i < data.length; i += 4) if (data[i] < 10) t++;
  console.log({ TL: px(0, 0), TR: px(info.width - 1, 0), transparent: t });
})();
