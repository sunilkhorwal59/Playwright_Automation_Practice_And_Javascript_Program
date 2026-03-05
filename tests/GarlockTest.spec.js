const {test,expect} = require('@playwright/test');

test.use({viewport: {width: 1280, height: 720}, // setting viewport for this file
         video: 'on',   // enabling video recording
         trace: 'on',}); // enabling trace for this file

test('Garlock Test', async function({page}){

    await page.goto('https://garlock--uat2.sandbox.my.site.com/Garlock/login');

    await page.locator("(//input[@part='input'])[1]").fill('sunil.khorwaloe-eriks@objectedge.com');

    await page.locator("(//input[@part='input'])[2]").fill('Garlocktest@086560');

    await page.getByText('Log In').click();

    await page.waitForTimeout(5000);

    await expect(page.locator("//span[starts-with(text(), 'User Profile')]")).toBeVisible();

   // Searching Products

   await page.locator("input[aria-autocomplete ='list']").fill('MEC04-15267');

   await page.locator("button[title='Search']").click();

   await page.waitForTimeout(5000);

   await expect(page.locator('h2.item-number')).toHaveText('MEC04-15267');

   // await page.waitForTimeout(5000);
   console.log("Product Search Completed");

   // Adding to Cart

   await page.locator("//button[@aria-label = 'Add To Cart']").click();

   await page.waitForTimeout(5000);

   const toastMessage = page.locator('#toast');

   //await expect(toastMessage).toBeVisible();

   //await expect(toastMessage).toHaveText('Product has been added to the cart.');
   const successAlert = page.getByText('Product has been added to the cart.');
   await expect(successAlert).toBeVisible();

   await page.waitForTimeout(5000);

   console.log("Product Added to Cart");

   await page.locator("[data-automation= 'cart-badge']").click();

   await page.waitForTimeout(5000);

   console.log("Navigated to Cart");


})