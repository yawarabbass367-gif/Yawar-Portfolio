import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto("http://localhost:3002/works/nayapay", { waitUntil: "networkidle" });
await page.locator(".nayapay-f4-helps-grid").scrollIntoViewIfNeeded();
await page.waitForTimeout(800);
await page.screenshot({ path: ".cursor-screenshots/f4-helps-grid.png" });
await browser.close();
