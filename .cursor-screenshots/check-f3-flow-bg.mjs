import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto("http://localhost:3002/works/nayapay", { waitUntil: "networkidle" });
await page.locator(".nayapay-f3-flow").scrollIntoViewIfNeeded();
await page.waitForTimeout(1200);

const bg = page.locator('.nayapay-f3-flow img[src*="f3-flow-bg"]');
console.log("bg visible:", await bg.isVisible());
console.log("bg box:", await bg.boundingBox());

await page.screenshot({ path: ".cursor-screenshots/f3-flow-bg-v3.png" });
await browser.close();
