import { chromium } from "playwright";

const url = "http://localhost:3002/works/virtue";
const viewports = [
  { name: "1440", width: 1440, height: 900 },
  { name: "1280", width: 1280, height: 900 },
  { name: "390", width: 390, height: 844 },
];

const headings = [
  "Tabish Ali",
  "Usability Study: parameters",
  "Usability Findings",
  "Usability Solution",
  "What is the one thing that you hate about yout be",
  "What if you could earn",
  "Accessibility Consideration",
  "Digital Wireframe",
  "High Fidelity Designs",
  "Takeaways",
  "Lets stay connected",
];

const browser = await chromium.launch();
for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewportSize({ width: vp.width, height: vp.height });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  const result = await page.evaluate((headings) => {
    const docWidth = document.documentElement.scrollWidth;
    const viewWidth = window.innerWidth;
    const overflow = docWidth > viewWidth + 1;
    const firstPersona = document.querySelector(".virtue-persona");
    const tabish = Array.from(document.querySelectorAll(".virtue-persona")).length;
    const found = headings.map((h) => document.body.textContent.includes(h));
    return {
      overflow,
      docWidth,
      viewWidth,
      personaSections: tabish,
      firstPersonaHasJauhar: firstPersona?.textContent?.includes("Jauhar") ?? false,
      headingsFound: found,
    };
  }, headings);

  console.log(`\n=== ${vp.name}px ===`);
  console.log(JSON.stringify(result, null, 2));
  await page.screenshot({
    path: `.cursor-screenshots/virtue-p2-qa-${vp.name}.png`,
    fullPage: true,
  });
  await page.close();
}
await browser.close();
