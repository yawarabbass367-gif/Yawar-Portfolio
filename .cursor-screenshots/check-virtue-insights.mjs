import { chromium } from "playwright";
import fs from "fs";

const url = "http://localhost:3002/works/virtue";
const outDir = ".cursor-screenshots";
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(800);

const sections = [
  { sel: ".virtue-p2-youtube", name: "youtube" },
  { sel: ".virtue-p2-money", name: "money" },
  { sel: ".virtue-p2-accessibility", name: "a11y" },
];

for (const s of sections) {
  const loc = page.locator(s.sel).first();
  await loc.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  const box = await loc.boundingBox();
  if (!box) {
    console.log(`MISSING ${s.name}`);
    continue;
  }
  const metrics = await loc.evaluate((node) => {
    const phones = [...node.querySelectorAll("img")].map((img) => ({
      src: img.getAttribute("src")?.split("/").pop(),
      w: Math.round(img.getBoundingClientRect().width),
      h: Math.round(img.getBoundingClientRect().height),
    }));
    const rect = node.getBoundingClientRect();
    return {
      sectionH: Math.round(rect.height),
      sectionW: Math.round(rect.width),
      phones,
    };
  });
  console.log(`\n=== ${s.name} ===`);
  console.log(JSON.stringify(metrics, null, 2));

  const clipH = Math.min(box.height + 16, 1100);
  await page.screenshot({
    path: `${outDir}/virtue-insight-${s.name}-1440.png`,
    clip: {
      x: Math.max(0, box.x - 8),
      y: Math.max(0, box.y - 8),
      width: Math.min(1440 - Math.max(0, box.x - 8), box.width + 16),
      height: clipH,
    },
  });
}

await browser.close();
