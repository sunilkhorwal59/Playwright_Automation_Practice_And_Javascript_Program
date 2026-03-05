import { firefox } from '@playwright/test';

export default async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Step 1: Go to login page
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Step 3: Wait for successful login
  await page.waitForURL('**/inventory.html');

  // Step 4: Save storage state
  await context.storageState({
    path: 'storage/saucedemo-user.json'
  });

  await browser.close();
};
