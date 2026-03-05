const {test,expect} = require('@playwright/test');

const testData = JSON.parse(JSON.stringify(require('../testdata.json')));

const testData1 = JSON.parse(JSON.stringify(require('../testlogin.json')));


test.use({viewport: {width: 1280, height: 720}, // setting viewport for this file
         screenshot: 'on',
         video: 'on',   // enabling video recording
         trace: 'on',}); // enabling trace for this file

test.skip('Valid Login Test', async function({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log(await page.viewportSize().width);

    console.log(await page.viewportSize().height);


  //  await page.locator("input[name='username']").fill("Admin")
   
    await page.getByPlaceholder("Username").fill("Admin",{delay: 100}); // typing with delay of 100ms

    await page.locator("input[name='password']").fill("admin123",{delay: 100}); // typing with delay of 100ms

    await page.locator("//button[@type='submit']").click();

    // await page.waitForTimeout(5000);

    await expect(page).toHaveURL(/dashboard/)

    await page.waitForTimeout(5000);

    await page.screenshot({path: 'screenshot/afterLogin.png', fullPage: true}); // fullPage screenshot

    await page.getByAltText("profile picture").first().click({delay: 100});

    await page.getByText('Logout').click({delay: 100});

    // await page.waitForTimeout(3000);

    await expect(page).toHaveURL(/login/);

    await page.waitForTimeout(5000);

    await page.screenshot({path: 'screenshot/afterLogout.png', fullPage: true}); // fullPage screenshot

})

test.skip('Login with Reading data from JSON File', async function ({page}) {

  await page.goto('https://freelance-learn-automation.vercel.app/login')

 // await page.getByPlaceholder('Enter Email').fill(testData.Users.validUser.Username);

  await page.locator('input[type="password"]').fill(testData.Users.validUser.Password);

 // await page.locator("//button[contains(text(),'Sign in')]").click();

  await page.getByPlaceholder('Enter Email').fill(testData.Interests[2]);

 await page.pause();
  
})

test.describe('Data Driven Testing - Login Functionality', () => 
  {
    for(const dataSet of testData1) 
    {
      test.describe(`Login with Users ${dataSet.id}`, function()
    {
      test('Login Test', async function ({page})
       {
        await page.goto('https://freelance-learn-automation.vercel.app/login')

        await page.getByPlaceholder('Enter Email').fill(dataSet.username);

        await page.locator('input[type="password"]').fill(dataSet.password);

        await page.locator("//button[contains(text(),'Sign in')]").click();

      })
    })
    }
});

