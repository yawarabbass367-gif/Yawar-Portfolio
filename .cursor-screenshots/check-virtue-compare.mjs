import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto("http://localhost:3002/works/virtue", { waitUntil: "networkidle" });
await page.locator(".virtue-p2-solution").scrollIntoViewIfNeeded();
await page.waitForTimeout(600);

const checks = await page.evaluate(() => {
  const stage = document.querySelector(".virtue-p2-compare-stage");
  const phone = stage?.querySelector(".virtue-p2-compare-stage__phone-img");
  const callouts = stage?.querySelector(".virtue-p2-compare-stage__before-notes");
  const listBelow = stage?.querySelector(".virtue-p2-callouts");
  return {
    hasStage: !!stage,
    phoneWidth: phone?.getBoundingClientRect().width ?? 0,
    calloutsBesidePhone: !!callouts,
    genericListBelow: !!listBelow,
    hasPinkBg: stage ? getComputedStyle(stage).backgroundImage.includes("gradient") : false,
    hasBeforeSignIn: document.body.textContent?.includes("No option for sign in") ?? false,
    hasAfterIos: document.body.textContent?.includes("Added IOS option") ?? false,
  };
});

console.log(JSON.stringify(checks, null, 2));
await page.screenshot({ path: ".cursor-screenshots/virtue-compare-login-1440.png" });
await browser.close();
