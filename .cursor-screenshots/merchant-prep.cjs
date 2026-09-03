const sharp = require("sharp");
const path = require("path");
const src =
  "C:/Users/Dell/.cursor/projects/c-Users-Dell-Documents-personal-portfolio/assets/c__Users_Dell_AppData_Roaming_Cursor_User_workspaceStorage_10786f6ca0efa34451c68376a925b9f4_images_image_33-6c97e2bb-cbb7-4b00-910d-5e2fa31e9503.png";
const out = "public/case-studies/nayapay/figma/board/merchant-phones-user.png";
(async () => {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    // Solid black matte only — leave phone chrome/UI intact
    if (r <= 8 && g <= 8 && b <= 8) data[i + 3] = 0;
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(out);
  const meta = await sharp(out).metadata();
  console.log({ out, w: meta.width, h: meta.height, hasAlpha: meta.hasAlpha });
})();
