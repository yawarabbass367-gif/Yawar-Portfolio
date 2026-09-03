import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto("http://localhost:3002/works/nayapay", { waitUntil: "networkidle" });

const phones = page.locator('img[src*="f3-flow-phones"]');
const f4 = page.locator("text=Feature 4").first();

console.log("phones count:", await phones.count());
console.log("phones visible:", await phones.isVisible());

const phonesBox = await phones.boundingBox();
const f4Box = await f4.boundingBox();
if (phonesBox && f4Box) {
  console.log("phones above Feature 4:", phonesBox.y < f4Box.y);
}

await phones.scrollIntoViewIfNeeded();
await page.screenshot({ path: ".cursor-screenshots/f3-flow-section.png" });
await browser.close();
