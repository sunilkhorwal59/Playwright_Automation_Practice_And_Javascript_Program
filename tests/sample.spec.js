const {test,expect} = require('@playwright/test')

test('First test', async function({page}) {
    //
    expect(12).toBe(12);
})

test.skip('Second test', async function({page}) {
    //
    expect(101).toBeGreaterThan(1000);

})

test('Third test', async function({page}) {
    //
    expect(5).toBeLessThan(10);
})

test('Fourth test', async function({page}) {
    //
    expect("Sunil Khorwal").toContain("Sunil")
})

test('Fifth test', async function({page}) {
    //
    expect("Sunil Khorwal".includes("Khorwal")).toBeTruthy();
})