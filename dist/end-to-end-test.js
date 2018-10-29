const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://arcane-fjord-71017.herokuapp.com/');
  await page.screenshot({path: './puppyteer_screenshots/staging.png'});

  await browser.close();
})();
