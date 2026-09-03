import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto("http://localhost:3002/works/virtue", { waitUntil: "networkidle" });
await page.locator(".virtue-p2-compare-callout__text--label").first().scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.screenshot({ path: ".cursor-screenshots/virtue-compare-login-focused.png" });
await browser.close();
