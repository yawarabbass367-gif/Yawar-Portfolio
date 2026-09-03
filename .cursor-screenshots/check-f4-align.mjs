import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto("http://localhost:3002/works/nayapay", { waitUntil: "networkidle" });
await page.locator(".nayapay-f4-intro").scrollIntoViewIfNeeded();
await page.waitForTimeout(800);

const metrics = await page.evaluate(() => {
  const band = document.querySelector(".nayapay-f4-intro__band");
  const phone = document.querySelector(".nayapay-comp--f4-phone");
  const copy = document.querySelector(".nayapay-f4-intro__copy");
  if (!band || !phone || !copy) return null;
  const b = band.getBoundingClientRect();
  const p = phone.getBoundingClientRect();
  const c = copy.getBoundingClientRect();
  return {
    phoneBottomGap: Math.round(p.bottom - b.bottom),
    copyCenterInBand: Math.round(c.top + c.height / 2 - (b.top + b.height / 2)),
    bandTop: Math.round(b.top),
    phoneBottom: Math.round(p.bottom),
    bandBottom: Math.round(b.bottom),
  };
});
console.log(metrics);
await page.screenshot({ path: ".cursor-screenshots/f4-align-fix.png" });
await browser.close();
