const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const results = [];
  for (const [name, w, h] of [['desktop',1440,900],['laptop',1280,800],['mobile',390,844]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto('http://localhost:3002/works/nayapay', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    const metrics = await page.evaluate(() => {
      const section = document.querySelector('main section');
      const img = document.querySelector('img.nayapay-comp--hero');
      const h1 = document.querySelector('main section h1');
      const overflow = document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
      const ir = img ? img.getBoundingClientRect() : null;
      const sr = section ? section.getBoundingClientRect() : null;
      const hr = h1 ? h1.getBoundingClientRect() : null;
      return {
        overflowX: overflow,
        docScrollW: document.documentElement.scrollWidth,
        clientW: document.documentElement.clientWidth,
        sectionH: sr ? Math.round(sr.height) : null,
        imgW: ir ? Math.round(ir.width) : null,
        imgH: ir ? Math.round(ir.height) : null,
        imgBottomInView: ir ? ir.bottom <= window.innerHeight + 8 : null,
        gapHeadlineToImg: hr && ir ? Math.round(ir.top - hr.bottom) : null,
        imgSrc: img ? img.currentSrc || img.src : null,
      };
    });
    results.push({ name, w, h, ...metrics });
    await page.close();
  }
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
