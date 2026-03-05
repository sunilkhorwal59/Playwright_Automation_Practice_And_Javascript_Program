const {test,expect} = require('@playwright/test')

test('Verify File Upload', async function({page}){

    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.locator('#file-upload').setInputFiles('./Uploads/Workflow.jpg');

    await page.locator('#file-submit').click();

    await expect(page.locator('h3')).toHaveText('File Uploaded!');

    await expect(page.locator('h3')).toBeVisible();

    await page.waitForTimeout(5000);
})