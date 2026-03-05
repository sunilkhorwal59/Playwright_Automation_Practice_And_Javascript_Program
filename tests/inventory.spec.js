import { test, expect } from '@playwright/test';

test('User lands directly on inventory page (no login)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');

  // Validate user is logged in
  await expect(page.getByText('Products')).toBeVisible();

  // Validate inventory items
  const items = page.locator('.inventory_item');
  await expect(items).toHaveCount(6);
});
