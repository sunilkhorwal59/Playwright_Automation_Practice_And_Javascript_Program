const {test,expect} = require('@playwright/test');
const Login = require('../pages/loginPage')
const HomePage = require('../pages/homepage');

const testData = JSON.parse(JSON.stringify(require('../testdata.json')));

//import { Login } from '../pages/loginPage.js';

test('Login to Application using POM Model', async function ({page}) 
{
    // Open URL
    await page.goto('https://freelance-learn-automation.vercel.app/login');

    const loginPage = new Login(page);
    await loginPage.loginToApplication(testData.Users.validUser.Username,testData.Users.validUser.Password);                   // calling method from loginPage.js

    const homePage = new HomePage(page);

    await homePage.verifyManageOption();                   // calling method from homepage.js for Assertion
   
    await homePage.logoutFromApplication();               // calling method from homepage.js

    await loginPage.veifySignInPage();                     // calling method from loginPage.js for Assertion
  
})
