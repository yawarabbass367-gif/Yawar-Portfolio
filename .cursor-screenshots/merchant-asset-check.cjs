const sharp = require("sharp");
(async () => {
  const src = "C:/Users/Dell/.cursor/projects/c-Users-Dell-Documents-personal-portfolio/assets/c__Users_Dell_AppData_Roaming_Cursor_User_workspaceStorage_10786f6ca0efa34451c68376a925b9f4_images_image_33-6c97e2bb-cbb7-4b00-910d-5e2fa31e9503.png";
  const meta = await sharp(src).metadata();
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = (x, y) => {
    const i = (y * info.width + x) * 4;
    return [data[i], data[i + 1], data[i + 2], data[i + 3]].join(",");
  };
  let transparent = 0;
  for (let i = 3; i < data.length; i += 4) if (data[i] < 10) transparent++;
  console.log({ w: meta.width, h: meta.height, hasAlpha: meta.hasAlpha, TL: px(0, 0), mid: px((info.width / 2) | 0, (info.height / 2) | 0), transparent });
})();
