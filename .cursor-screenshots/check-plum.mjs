import { chromium } from "playwright";

const url = "http://localhost:3002/works/plum";
const browser = await chromium.launch();

for (const vp of [
  { name: "1440", width: 1440, height: 900 },
  { name: "390", width: 390, height: 844 },
]) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  const info = await page.evaluate(() => {
    const iframes = [...document.querySelectorAll("iframe, embed, object")].map((el) => ({
      tag: el.tagName,
      src: el.getAttribute("src") || "",
    }));
    const imgs = [...document.querySelectorAll(".plum-case img")].map((img) => ({
      src: img.getAttribute("src")?.includes("plum/pages") || img.currentSrc?.includes("plum/pages"),
      w: Math.round(img.getBoundingClientRect().width),
      h: Math.round(img.getBoundingClientRect().height),
      natural: `${img.naturalWidth}x${img.naturalHeight}`,
    }));
    const pdfMention =
      document.body.innerText.includes("plum-case-study.pdf") ||
      !!document.querySelector('[src*="plum-case-study.pdf"]');
    return {
      iframes,
      pdfMention,
      imgCount: imgs.length,
      imgs,
      overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      hasAllWorks: document.body.innerText.includes("All Works"),
      title: document.body.innerText.includes("Plum Case Study"),
    };
  });

  console.log(`\n=== ${vp.name} ===`);
  console.log(JSON.stringify(info, null, 2));
  await page.screenshot({ path: `.cursor-screenshots/plum-qa-${vp.name}.png`, fullPage: false });
  await page.close();
}

await browser.close();
