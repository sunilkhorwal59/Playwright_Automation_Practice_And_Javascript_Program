const { test } = require('@playwright/test');

test('Booking.com 5-star hotel scraper', async ({ page }) => {

  await page.goto('https://www.booking.com');

  
  // ----------------------------
  // ✅ Handle Cookie Banner
  // ----------------------------
  const acceptCookies = page.locator('#onetrust-accept-btn-handler');
  if (await acceptCookies.count() > 0) {
    await acceptCookies.click();
  }

  const cityInput = page.locator('input[name="ss"]');
  await cityInput.fill('Mumbai');

  // ✅ Handle Genius Sign-in Popup
  // ----------------------------
  const geniusPopupClose = page.locator(
    'button[aria-label="Dismiss sign-in info."]'
  );

   if (await geniusPopupClose.count() > 0) {
    await geniusPopupClose.click();
  }

  const dateBox = page.locator('[data-testid="searchbox-dates-container"]');
  await dateBox.click();

  await page.locator('[data-date="2026-03-10"]').click();
  await page.locator('[data-date="2026-03-15"]').click();

  const guestButton = page.locator('button[data-testid="occupancy-config"]');
  await guestButton.click();

  const addChild = page.locator("(//button[@aria-hidden='true'])[3]");
  await addChild.click();

  await page.locator('select[name="age"]').selectOption('0');

  await page.locator('(//button[@type="submit"])[1]').click();

  // Results page
  const fiveStarFilter = page.locator('(//input[@name="class=5"])[1]');
  await fiveStarFilter.check();

  const firstHotel = page.locator('[data-testid="property-card"]').first();

  const hotelName = await firstHotel.locator('[data-testid="title"]').innerText();
  const rating = await firstHotel.locator('[data-testid="review-score"]').innerText();
  const price = await firstHotel.locator('[data-testid="price-and-discounted-price"]').innerText();

  console.log(hotelName, rating, price);

  await browser.close();
});
