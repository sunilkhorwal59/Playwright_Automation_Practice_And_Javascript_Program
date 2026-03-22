const path = require('path');
const { test, expect } = require('@playwright/test');

test('Verify File Upload', async ({ page }) => {
    const uploadFilePath = path.resolve(__dirname, '../Uploads/Workflow.jpg');

    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.locator('#file-upload').setInputFiles(uploadFilePath);

    await page.locator('#file-submit').click();

    await expect(page.locator('h3')).toHaveText('File Uploaded!');

    await expect(page.locator('h3')).toBeVisible();
});