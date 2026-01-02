const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const screenshots = [
  'screenshot1_ja',
  'screenshot1_en',
  'screenshot1_zh_CN',
  'screenshot1_zh_TW',
  'screenshot1_ko',
  'screenshot2_ja',
  'screenshot2_en',
  'screenshot2_zh_CN',
  'screenshot2_zh_TW',
  'screenshot2_ko',
];

async function captureScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1, // 1280x800 exact size
  });

  const page = await context.newPage();
  const screenshotsDir = __dirname;

  for (const name of screenshots) {
    const htmlPath = path.join(screenshotsDir, `${name}.html`);
    const pngPath = path.join(screenshotsDir, `${name}.png`);

    if (!fs.existsSync(htmlPath)) {
      console.log(`Skip: ${htmlPath} not found`);
      continue;
    }

    await page.goto(`file://${htmlPath}`);
    await page.waitForTimeout(500); // Wait for fonts/rendering

    await page.screenshot({
      path: pngPath,
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });

    console.log(`Captured: ${name}.png`);
  }

  await browser.close();
  console.log('\nDone! Screenshots saved to:', screenshotsDir);
}

captureScreenshots().catch(console.error);
