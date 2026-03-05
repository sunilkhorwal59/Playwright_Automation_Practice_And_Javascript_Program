const {test,expect} = require('@playwright/test');

test('Drag and Drop Test', async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");

    //  const source = page.locator('#column-a');
    //  const destination = page.locator('#column-b');

    //  await source.dragTo(destination);

    //  await page.waitForTimeout(5000);

  //  await expect(page.locator('#column-a header')).toHaveText('B');

    // Alternative way to perform drag and drop using mouse events
    const source = await page.$('#column-a');
    const destination = await page.$('#column-b');  
    
    await source.hover();
    await page.mouse.down();

    await destination.hover();
    await page.mouse.up();
    await page.waitForTimeout(5000);

    await expect(page.locator('#column-a header')).toHaveText('B');
})
