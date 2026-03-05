const {test,expect} = require('@playwright/test')

test('Select value from dropdown', async function ({page})
 {
    await page.goto('https://freelance-learn-automation.vercel.app/signup')

    /* Preferred ways to select value from dropdown
    1st label: visible text
    2nd value: value attribute of <option> tag
    3rd index: index of the option in the dropdown
    */

    await page.waitForTimeout(1000);

    await page.locator('#state').selectOption({value:'Rajasthan'});

    await page.waitForTimeout(1000);

    await page.locator('#state').selectOption({label: 'Goa'});  

    await page.waitForTimeout(1000);

    await page.locator('#state').selectOption('Maharashtra');

    await page.waitForTimeout(1000);

    await page.locator('#state').selectOption({index: 10})

    await page.waitForTimeout(5000);

    await expect(page.locator('#state')).toHaveValue('Jammu and Kashmir');

    /*
    const allStates = await page.locator('#state').textContent()

    console.log("All states in dropdown are: "+ allStates);

    await expect(allStates.includes('Uttar Pradesh')).toBeTruthy();

     */

    let state = await page.$('#state');

    let allElements = await state.$$('option')

    let ddStatus = false;

    for(let i=0; i<allElements.length; i++) 
        {
        let value = await allElements[i].textContent();

        console.log("Value from dropdown using for loop "+ i + " is: "+ value);

        if(value.includes('Rajasthan'))
         {
        ddStatus = true;
        break;
        }
    }

    await expect(ddStatus).toBeTruthy();

    // Multiple selection from dropdown

    await page.locator('#hobbies').selectOption(['Playing', 'Swimming']);

    await page.waitForTimeout(5000);
 })