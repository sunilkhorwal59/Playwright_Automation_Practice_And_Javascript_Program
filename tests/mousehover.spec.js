const {test,expect} =  require('@playwright/test')

test("Mouse Hover Action", async function({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    // Login Action

    await page.locator('//input[@name="email1"]').fill('admin@email.com');

    await page.locator("#password1").fill("admin@123");

    await page.locator('button.submit-btn').click();

    await page.waitForTimeout(5000);

    // Mouse Hover Action

    await page.locator("//span[text()= 'Manage']").hover({force: true});

    await page.locator("//a[text()='Manage Courses']").click();

    await page.waitForTimeout(5000);

})