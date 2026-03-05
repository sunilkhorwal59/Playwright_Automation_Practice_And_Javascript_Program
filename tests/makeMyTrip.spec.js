const { test } = require('@playwright/test');

test.use({video: 'on'},
  {viewport: {width: 1280, height: 720}}
);

test.skip('MakeMyTrip - Hotel search using locator variables', async ({ page }) => {


  // ================================
  // OPEN URL
  // ================================

    // 🚫 Disable chatbot at network level
 // await page.route('**/*chat*', route => route.abort());
 // await page.route('**/*bot*', route => route.abort());

  await page.goto('https://www.makemytrip.com/hotels/', { waitUntil: 'load' });


  // ================================
  // DEFINE LOCATORS + ACTIONS
  // ================================

  // Close login popup
  const closeLoginPopup = page.locator('span[data-cy="closeModal"]');
  await closeLoginPopup.click();

  // City selection
  const cityInput = page.locator('input[data-cy="city"]');
  await cityInput.click();

  await page.locator('.tp-dt-header > div:nth-child(3)').click();

  const citySearchBox = page.locator('input[placeholder="Where do you want to stay?"]');
  await citySearchBox.fill('Mumbai');

  const selectMumbaiCity = page.locator('span').filter({ hasText: 'Mumbai' }).first()
  await selectMumbaiCity.click();

  // Date selection
 // const checkInBox = page.locator('p[data-cy="checkInDate"]');
 // await checkInBox.click();

 const checkInDate = page.locator('div[aria-label="Mon Feb 02 2026"]');
 await checkInDate.click();

 const checkOutDate = page.locator('div[aria-label="Fri Feb 06 2026"]');
  await checkOutDate.click();


  // Rooms & Guests
 // const roomsGuests = page.locator('span[data-cy="guestLabel"]');
 // await roomsGuests.click();

 const twoAdults = page.locator('(//button[@aria-label="Increase value from 1"])[2]');
 await twoAdults.click();

//   const oneChild = page.locator('li[data-cy="children-1"]');
//   await oneChild.click();

//   const applyGuests = page.locator('button[data-cy="submitGuest"]');
//   await applyGuests.click();

//   // Search button
//   const searchButton = page.locator('button[data-cy="submit"]');
//   await searchButton.click();

  // ================================
  // HOTEL LIST PAGE
  // ================================

//   const hotelCard = page.locator('div[data-testid="hotel-card"]');
//   await hotelCard.first().waitFor();

//   // 5 Star filter
//   const fiveStarFilter = page.locator('label:has-text("5 Star") input');
//   await fiveStarFilter.check();

//   // Sort by highest user rating
//   const sortByHighestRating = page.locator('span:has-text("User Rating (Highest)")');
//   await sortByHighestRating.click();

//   await page.waitForTimeout(4000);

//   // ================================
//   // READ HOTEL DETAILS
//   // ================================

//   const hotelName = page.locator('p[data-testid="hotel-name"]').first();
//   const hotelRating = page.locator('span[data-testid="rating"]').first();
//   const hotelPrice = page.locator('p[data-testid="hotel-price"]').first();

//   console.log('------------------------------');
//   console.log('Hotel Name  :', await hotelName.innerText());
//   console.log('Rating      :', await hotelRating.innerText());
//   console.log('Price (INR) :', await hotelPrice.innerText());
//   console.log('------------------------------');

});

test.skip('MakeMyTrip2 - Hotel search using locator variables', async ({ page }) => {
await page.goto('https://www.makemytrip.com/');
await page.locator('.commonModal__close').click();
await page.locator('.tp-dt-header > div:nth-child(3)').click();
await page.getByRole('link', { name: 'Hotels' }).click();
await page.getByRole('textbox', { name: 'City, Property name or' }).click();
await page.getByRole('textbox', { name: 'Where do you want to stay?' }).click();
await page.getByRole('textbox', { name: 'Where do you want to stay?' }).fill('Mumbai');
await page.getByText('MumbaiCity in Maharashtra', { exact: true }).click();
await page.getByRole('gridcell', { name: 'Sun Feb 01' }).click();
await page.getByLabel('Thu Feb 05').getByText('5').click();
await page.getByRole('button', { name: 'Increase value from 0' }).click();
await page.getByTestId('child_count').getByText('Select').click();
await page.getByText('01').click();
await page.getByRole('button', { name: 'APPLY' }).click();
await page.getByRole('button', { name: 'Search' }).click();

});


test('MakeMyTrip3 - Hotel search using locator variables', async ({ page }) => {

  await page.goto('https://www.makemytrip.com/');
  await page.locator('.commonModal__close').click();
  await page.getByRole('img', { name: 'minimize' }).click();
  await page.getByRole('link', { name: 'Hotels' }).click();
  await page.getByRole('textbox', { name: 'City, Property name or' }).click();
  await page.getByRole('textbox', { name: 'Where do you want to stay?' }).fill('Mumbai');
  await page.getByText('MumbaiCity in Maharashtra', { exact: true }).click();
  await page.getByRole('gridcell', { name: 'Mon Feb 02' }).click();
  await page.getByRole('gridcell', { name: 'Fri Feb 06' }).click();
  await page.getByRole('button', { name: 'Increase value from 0' }).click();
  await page.getByTestId('gstSlct').click();
  await page.getByText('01').click();
  await page.getByRole('button', { name: 'APPLY' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  const fiveStarFilter = page.locator('input[name="class=5"]')
  await fiveStarFilter.scrollIntoViewIfNeeded();
  await fiveStarFilter.check();
  await page.waitForTimeout(5000);
})

// await page.goto('https://www.makemytrip.com/');
// await page.locator('.commonModal__close').click();
// await page.getByRole('img', { name: 'minimize' }).click();
// await page.getByRole('link', { name: 'Hotels' }).click();
// await page.getByRole('textbox', { name: 'City, Property name or' }).click();
// await page.getByRole('textbox', { name: 'Where do you want to stay?' }).click();
// await page.getByRole('textbox', { name: 'Where do you want to stay?' }).fill('Mumbai');
// await page.getByText('MumbaiCity in Maharashtra', { exact: true }).click();
// await page.getByLabel('Mon Feb 02').getByText('2', { exact: true }).click();
// await page.getByLabel('Fri Feb 06').getByText('6', { exact: true }).click();
// await page.getByRole('button', { name: 'Increase value from 0' }).click();
// await page.getByTestId('gstSlct').click();
// await page.getByText('01').click();
// await page.getByRole('button', { name: 'APPLY' }).click();
// await page.getByRole('button', { name: 'Search' }).click();

//Deemo Flow
