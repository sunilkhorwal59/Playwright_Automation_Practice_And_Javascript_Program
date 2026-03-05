const {test,expect} = require('@playwright/test')

test('Handle Alert', async ({page}) =>
 {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Handling Simple Alert

    page.on('dialog', async function(d){

        expect(d.type()).toContain('alert')

        expect(d.message()).toContain('I am a JS Alert');

        await d.accept()
    })
    await page.locator('button[onClick= "jsAlert()"]').click();
    await page.waitForTimeout(5000);
    
})


test('Handle Confirm Box', async ({page}) =>
 {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Handling Confirm Alert

    page.on('dialog', async function(dialogWindow){

        expect(dialogWindow.type()).toContain('confirm')

        expect(dialogWindow.message()).toContain('I am a JS Confirm');
        await dialogWindow.dismiss();
    })
    await page.locator('button[onClick= "jsConfirm()"]').click();

    await page.waitForTimeout(5000);
    
})

test('Handle Prompt Box', async ({page}) =>
 {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Handling Prompt Box Alert

    page.on('dialog', async function(dialogWindow){

        expect(dialogWindow.type()).toContain('prompt')

        expect(dialogWindow.message()).toContain('I am a JS Prompt');

        await dialogWindow.accept('This is a prompt input');
    })
    await page.locator('button[onClick= "jsPrompt()"]').click();

    await page.waitForTimeout(5000);
    
})

test('Handle Prompt Box with Cancel', async ({page}) =>
 {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');    
    // Handling Alerts
page.on('dialog', async dialog => {
 await dialog.dismiss();
})
 })