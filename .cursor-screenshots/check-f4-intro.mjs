import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();

for (const width of [1440, 390]) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto("http://localhost:3002/works/nayapay", { waitUntil: "networkidle" });
  await page.locator("text=Feature 4").first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);

  const index = await page.locator("text=Feature 4").first().isVisible();
  const savings = await page.locator("section:has-text('Feature 4') h2").first().textContent();
  const heading = await page.locator(".nayapay-f4-intro__copy h3").textContent();
  console.log(`--- ${width}px`);
  console.log("index:", index, "savings h2:", savings?.trim());
  console.log("band heading:", heading?.replace(/\s+/g, " ").trim());

  await page.screenshot({ path: `.cursor-screenshots/f4-intro-${width}.png` });
}

await browser.close();
