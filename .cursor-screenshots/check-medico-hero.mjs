import { chromium } from "playwright";

const b = await chromium.launch();
const p = await b.newPage();
await p.setViewportSize({ width: 1440, height: 900 });
await p.goto("http://localhost:3000/works/medico", {
  waitUntil: "networkidle",
  timeout: 90000,
});
await p.waitForTimeout(800);
const m = await p.evaluate(() => {
  const box = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      w: Math.round(r.width),
      h: Math.round(r.height),
      x: Math.round(r.x),
      y: Math.round(r.y),
    };
  };
  return {
    stage: box(".medico-hero__stage"),
    phone: box(".medico-hero__phone"),
    doctor: box(".medico-hero__card--doctor"),
    symptoms: box(".medico-hero__card--symptoms"),
    watermark: box(".medico-hero__watermark"),
    calendar: box(".medico-hero__calendar"),
    heart: box(".medico-hero__heart-deco"),
  };
});
console.log(JSON.stringify(m, null, 2));
const hero = await p.locator(".medico-hero").boundingBox();
await p.screenshot({
  path: ".cursor-screenshots/medico-hero-v2.png",
  clip: { x: 0, y: hero.y, width: 1440, height: Math.min(hero.height, 900) },
});
await b.close();
