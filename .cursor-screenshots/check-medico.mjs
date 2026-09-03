import { chromium } from "playwright";

const b = await chromium.launch();
const p = await b.newPage();
await p.setViewportSize({ width: 1440, height: 900 });

await p.goto("http://localhost:3000/works", {
  waitUntil: "networkidle",
  timeout: 60000,
});
const hasCard = await p.locator('a[href="/works/medico"]').count();
console.log("works medico card", hasCard);
await p.screenshot({ path: ".cursor-screenshots/medico-works-card.png" });

const res = await p.goto("http://localhost:3000/works/medico", {
  waitUntil: "networkidle",
  timeout: 90000,
});
console.log("status", res?.status());
const sections = await p.evaluate(() =>
  [...document.querySelectorAll("main.medico-case section")].map(
    (s) => s.className.split(/\s+/)[0] || s.getAttribute("aria-labelledby"),
  ),
);
console.log("sections", sections.length, sections);
await p.screenshot({ path: ".cursor-screenshots/medico-page-top.png" });

await p.locator(".medico-persona").scrollIntoViewIfNeeded();
await p.waitForTimeout(300);
await p.screenshot({ path: ".cursor-screenshots/medico-persona.png" });

await p.locator(".medico-journey").scrollIntoViewIfNeeded();
await p.waitForTimeout(300);
await p.screenshot({ path: ".cursor-screenshots/medico-journey.png" });

await p.locator(".medico-thanks").scrollIntoViewIfNeeded();
await p.waitForTimeout(300);
await p.screenshot({ path: ".cursor-screenshots/medico-thanks.png" });

await p.setViewportSize({ width: 390, height: 844 });
await p.goto("http://localhost:3000/works/medico", {
  waitUntil: "networkidle",
  timeout: 90000,
});
await p.screenshot({ path: ".cursor-screenshots/medico-mobile-top.png" });

await b.close();
