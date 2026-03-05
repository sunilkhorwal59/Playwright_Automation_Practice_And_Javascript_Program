const {test,expect} = require('@playwright/test');

test("Verify Error Message on Invalid Login", async function({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");

    await page.locator("//input[@name = 'password']").fill("wrongpassword");

    await page.keyboard.press("Enter"); // simulate pressing Enter key to click login button

    // await page.waitForTimeout(5000);

    // Verify the error message
    // Created custom locator for error message bcz Classname is too Long

    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent();

    console.log("ErrorMessage is: " + errorMessage);

    expect(errorMessage.includes("Invalid")).toBeTruthy(); // verifying partial text

    expect(errorMessage === "Invalid credential").toBeTruthy(); // verifying exact text

})