import { test, expect } from '@playwright/test';

test('Login Test Autogenrated by Playwright Codegen', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('banner').getByText('fbadbcdbffmichalmichalmichal').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});