const {test,expect} = require('@playwright/test')

test('Keyboard Events Test', async function({page}) {

    await page.goto('https://www.google.com/');

    await page.locator("//textarea[@name = 'q']").fill('Playwright Automation');

   // await page.keyboard.press('Enter')

   await page.keyboard.press('Control+A');

   await page.keyboard.press('Control+C');

   await page.keyboard.press('Backspace')

   await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);

})