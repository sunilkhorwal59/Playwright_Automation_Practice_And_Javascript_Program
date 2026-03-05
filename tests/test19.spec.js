//const {test,expect} = require('@playwright/test');
import { test, expect } from '@playwright/test';

test('Verify 3rd prodcut of PLP Page of Sauce Demo', async function({page}) {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');   

    await page.locator('#login-button').click();
    await page.waitForTimeout(5000)
    await page.locator('.inventory_item')
  .filter({ hasText: 'Sauce Labs Bike Light' })
  .locator('button')
  .click();

  await page.waitForTimeout(5000)

  await page.getByText('LinkedIn').click();

  await page.waitForTimeout(5000)

})