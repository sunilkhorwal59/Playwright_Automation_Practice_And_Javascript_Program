const {test,expect} = require('@playwright/test');

test.skip('AutoHandle Test', async function({page}) {

    await page.goto('https://www.google.com/');

    await page.locator("//textarea[@name = 'q']").fill('Playwright Automation');

  //  await page.locator("div[aria-label = 'playwright automation tutorial']").click();

  //  await page.waitForTimeout(5000);

   await page.waitForSelector("li[role='presentation']")

   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('ArrowDown');

   await page.waitForTimeout(5000);

    await page.keyboard.press('Enter');

    await page.waitForTimeout(5000);
})

test.skip('AutoHandle Test using loop', async function({page}) {

    await page.goto('https://www.google.com/');

    await page.locator("//textarea[@name = 'q']").fill('Playwright Automation');

    await page.waitForSelector("li[role='presentation']")

    const elements = await page.$$("li[role='presentation']")

    for(let i=0; i< elements.length; i++) 
    {
    const text = await elements[i].textContent();

    if(text.includes('tool')) 
    {
        await elements[i].click();
        break;
    }
   }
})