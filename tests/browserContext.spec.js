// browserContextExample.spec.js
const { chromium, test } = require('@playwright/test');

test('Multiple incognito contexts example', async () => {

  // 1️⃣ Launch ONE browser
  const browser = await chromium.launch({
    headless: false
  });

  // 2️⃣ First incognito context
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page1.fill("input[name='email']", 'userpw@pw.com');
  await page1.fill("input[type='password']", 'Test@123');
  await page1.click("input[value='Login']");

  // 3️⃣ Second incognito context (completely isolated)
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page2.fill("input[name='email']", 'sunil@gmail.com');
  await page2.fill("input[type='password']", 'Sunil@123');
  await page2.click("input[value='Login']");

  await page1.waitForTimeout(5000);
  await page2.waitForTimeout(5000);

  await browser.close();
});
