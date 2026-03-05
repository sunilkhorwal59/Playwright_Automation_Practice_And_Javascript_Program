const {test,expect} = require('@playwright/test');

test('Fixture Demo Test', async function ({browser}) {

    const context  = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/docs/next/api/class-browsercontext');

    await page.waitForTimeout(5000);

});