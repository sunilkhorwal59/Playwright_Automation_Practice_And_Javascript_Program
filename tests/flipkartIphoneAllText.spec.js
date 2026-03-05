import {test,expect} from '@playwright/test';

test('Extract all iphone text form PLP', async({page}) => {

    await page.goto('https://www.flipkart.com/')
    
    await page.fill('input[name="q"]', 'iphone')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(5000)

    const productTitles = page.locator('div.RG5Slk');
    const productCount = await productTitles.count();
    const productNames = await productTitles.allTextContents()
    console.log(`Total products found:${productCount}`)
    console.log(productNames);
    //productNames.forEach((name, index) => {
   // console.log(`${index + 1}. ${name}`);
  });

