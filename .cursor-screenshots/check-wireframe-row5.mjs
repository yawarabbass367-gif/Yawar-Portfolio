import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3002/works/virtue", { waitUntil: "networkidle" });
await page.waitForTimeout(600);

const info = await page.evaluate(() => {
  const wf = document.querySelector(".virtue-p2-wireframes");
  const hf = document.querySelector(".virtue-p2-hifi");
  const ig = wf?.querySelector('img[src*="phone-instagram-limit"]');
  const hdfc = wf?.querySelector('img[src*="phone-hdfc-netbanking"]');
  const box = (el) => {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { w: Math.round(r.width), h: Math.round(r.height), visible: r.width > 0 && r.height > 0 };
  };
  return {
    inWireframes: { ig: Boolean(ig), hdfc: Boolean(hdfc) },
    inHifi: {
      ig: Boolean(hf?.querySelector('img[src*="phone-instagram-limit"]')),
      hdfc: Boolean(hf?.querySelector('img[src*="phone-hdfc-netbanking"]')),
    },
    sizes: { ig: box(ig), hdfc: box(hdfc) },
    overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
  };
});
console.log(JSON.stringify(info, null, 2));

const row = page.locator(".virtue-p2-wireframe-row5").first();
await row.scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await row.screenshot({ path: ".cursor-screenshots/virtue-wireframe-row5.png" });
await browser.close();
