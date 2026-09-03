import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto("http://localhost:3002/works/nayapay", { waitUntil: "networkidle" });
await page.locator(".nayapay-persona").scrollIntoViewIfNeeded();
await page.waitForTimeout(800);

const checks = await page.evaluate(() => {
  const section = document.querySelector(".nayapay-persona");
  if (!section) return null;
  return {
    hasPortrait: !!section.querySelector('img[src*="persona-portrait"]'),
    hasSavingsNeeds: section.textContent?.includes("Savings-related needs") ?? false,
    hasCards: section.querySelectorAll("article").length,
    heading: section.querySelector("h3")?.textContent?.trim(),
    subtitle: section.querySelector("h3 + p")?.textContent?.trim(),
  };
});
console.log(checks);
await page.screenshot({ path: ".cursor-screenshots/persona-rebuild.png" });
await browser.close();
