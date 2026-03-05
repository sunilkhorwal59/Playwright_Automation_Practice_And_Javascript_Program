const {expect} = require('@playwright/test')

class LoginPage
{
    constructor(page) 
    {
        this.page = page;
        this.header = 'h2.header';
        this.username = '#email1';
        this.password = "input[id= 'password1']";
        this.loginButton = "//button[contains(text(),'Sign in')]";
    }

    async loginToApplication(user,pass)
    {
        await this.page.fill(this.username,user);
        await this.page.fill(this.password,pass);
        await this.page.click(this.loginButton);
    }

    async veifySignInPage()
    {
        await expect(this.page.locator(this.header)).toHaveText('Sign In')
    }
}

module.exports = LoginPage;