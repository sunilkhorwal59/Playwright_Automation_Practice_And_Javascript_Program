const { test, expect } = require('@playwright/test');

test('Filter products by price 100-200 and open a product', async ({ page }) => {

  // =============================
  // 1️⃣ OPEN APPLICATION
  // =============================
  await page.goto('https://practicesoftwaretesting.com/');
  await page.waitForLoadState('networkidle');

  // =============================
  // 2️⃣ PRICE SLIDER (ngx-slider)
  // =============================

  // Slider elements
  const sliderBar = page.locator('.ngx-slider-full-bar');
  const minHandle = page.locator('.ngx-slider-pointer-min');
  const maxHandle = page.locator('.ngx-slider-pointer-max');

  // Get slider dimensions
  const sliderBox = await sliderBar.boundingBox();

  const sliderMin = 0;
  const sliderMax = 200; 

  // Calculate how many pixels represent 1 price unit
  const pixelsPerUnit = sliderBox.width / (sliderMax - sliderMin);

  // Target positions for min & max
  const minTargetX = sliderBox.x + (pixelsPerUnit * 100) + 3;
  const maxTargetX = sliderBox.x + sliderBox.width - 3;

  // ---- Move MIN slider to 100 ----
  await minHandle.hover();
  await page.mouse.down();
  await page.mouse.move(minTargetX, sliderBox.y + sliderBox.height / 2);
  await page.mouse.up();

  // ---- Move MAX slider to 200 ----
  await maxHandle.hover();
  await page.mouse.down();
  await page.mouse.move(maxTargetX, sliderBox.y + sliderBox.height / 2);
  await page.mouse.up();

  // =============================
  // 3️⃣ WAIT UNTIL FILTER APPLIES
  // =============================

  await page.waitForFunction(() => {
    const prices = Array.from(document.querySelectorAll('.card span'))
      .map(el => el.textContent)
      .filter(text => text && text.includes('$'))
      .map(text => Number(text.replace('$', '').trim()));

    return prices.length > 0 && prices.every(price => price >= 100);
  });

  // =============================
  // 4️⃣ VERIFY PRODUCT PRICE RANGE
  // =============================

  const productCards = page.locator('.card');
  const cardCount = await productCards.count();

  expect(cardCount).toBeGreaterThan(0);

  for (let i = 0; i < cardCount; i++) {
    const card = productCards.nth(i);

    const priceText = await card
      .locator('span', { hasText: '$' })
      .first()
      .textContent();

    const price = Number(priceText.replace('$', '').trim());

    expect(price).toBeGreaterThanOrEqual(100);
    expect(price).toBeLessThanOrEqual(200);
  }

  // =============================
  // 5️⃣ OPEN FIRST PRODUCT
  // =============================
  await productCards.first().click();

  // =============================
  // 6️⃣ VERIFY PRODUCT DETAIL PRICE
  // =============================

  const detailPrice = page.locator('span[data-test="unit-price"]');
  await expect(detailPrice).toBeVisible();

  const detailValue = Number(
    (await detailPrice.textContent()).replace('$', '').trim()
  );

  expect(detailValue).toBeGreaterThanOrEqual(100);
  expect(detailValue).toBeLessThanOrEqual(200);

  // =============================
  // 7️⃣ ADD TO CART
  // =============================

  const addToCartButton = page.locator('#btn-add-to-cart');
  await expect(addToCartButton).toBeVisible();
  await addToCartButton.click();

  // =============================
  // 8️⃣ VERIFY MINI CART QUANTITY
  // =============================

  const cartQuantity = page.locator('span[data-test="cart-quantity"]');

  // Wait for mini cart update
  await expect(cartQuantity).toBeVisible({ timeout: 10000 });

  // Verify quantity = 1
  await expect(cartQuantity).toHaveText('1');

  console.log('Cart quantity:', await cartQuantity.textContent());
});
