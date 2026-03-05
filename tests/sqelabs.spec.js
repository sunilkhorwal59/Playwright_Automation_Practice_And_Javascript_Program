const { test, expect, chromium } = require('@playwright/test');

// Utility function to close Flipkart login popup
async function closeLoginPopup(page) {
  const closePopup = page.locator('button._2KpZ6l._2doB4z');
  if (await closePopup.isVisible()) {
    await closePopup.click();
  }
}

// Test Scenario 1: Login and Messaging
test.skip('Login and Messaging', async ({ browser }) => {
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  // Open Flipkart and close login popup
  await page1.goto('https://www.flipkart.com/');
  await closeLoginPopup(page1);

  // User 1 logs in
  await page1.locator('#username').fill('user1');
  await page1.locator('#password').fill('password1');
  await page1.locator('#loginBtn').click();

  // Wait for message input to be visible
  await page1.locator('#messageInput').waitFor({ state: 'visible', timeout: 60000 });

  // Send message to User 2
  await page1.locator('#messageInput').fill('Hello User 2!');
  await page1.locator('#sendMessageBtn').click();

  // User 2 logs in
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto('https://www.flipkart.com/');
  await closeLoginPopup(page2);
  await page2.locator('#username').fill('user2');
  await page2.locator('#password').fill('password2');
  await page2.locator('#loginBtn').click();

  // Wait for received message to be visible
  await page2.locator('#receivedMessage').waitFor({ state: 'visible', timeout: 60000 });

  // Verify message received and reply
  const receivedMessage = await page2.locator('#receivedMessage').textContent();
  expect(receivedMessage).toBe('Hello User 2!');
  await page2.locator('#messageInput').fill('Hello User 1!');
  await page2.locator('#sendMessageBtn').click();

  // Verify reply received by User 1
  await page1.locator('#receivedMessage').waitFor({ state: 'visible', timeout: 60000 });
  const replyMessage = await page1.locator('#receivedMessage').textContent();
  expect(replyMessage).toBe('Hello User 1!');
});

// Test Scenario 2: Link Navigation and Text Extraction
test.skip('Link Navigation and Text Extraction', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Open Flipkart and close login popup
  await page.goto('https://www.flipkart.com/');
  await closeLoginPopup(page);

  // Click on link and switch to new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('a#linkToNewTab').click(),
  ]);

  // Wait for the new tab to load
  await newPage.waitForLoadState('domcontentloaded');

  // Grab the text from the new tab
  const text = await newPage.locator('#textElement').textContent();
  console.log('Text from new tab:', text);

  // Switch back to the main window
  await page.bringToFront();
});

// Test Scenario 3: Search iPhone, Filter by Price, Add to Cart, and Verify Cart Count
test('Search iPhone, Filter by Price, Add to Cart, and Verify Cart Count', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Open Flipkart and close login popup
  await page.goto('https://www.flipkart.com/');
  await closeLoginPopup(page);

  // Search for iPhone
  const searchInput = page.locator('input[name="q"]').first();
  await searchInput.fill('iPhone');
  await page.locator('button[type="submit"]').click();

  // Wait for price filter to be visible
  await page.locator('._2YxCDZ').first().waitFor({ state: 'visible', timeout: 90000 });

  // Apply price filter (₹50000 to ₹100000)
  await page.locator('._2YxCDZ').nth(0).fill('50000'); // Minimum price
  await page.locator('._2YxCDZ').nth(1).fill('100000'); // Maximum price
  await page.locator('._3UZZGt button').click(); // Apply filter

  // Wait for products to load
  await page.waitForSelector('._1AtVbE', { timeout: 90000 });

  // Click on the first product
  const [productPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('._1AtVbE').nth(0).click(),
  ]);
  await productPage.waitForLoadState('domcontentloaded');

  // Wait for Add to Cart button to be visible
  await productPage.locator('button._2KpZ6l._2U9uOA').waitFor({ state: 'visible', timeout: 90000 });

  // Click on Add to Cart
  await productPage.locator('button._2KpZ6l._2U9uOA').click();

  // Verify cart count
  await productPage.locator('span._2dcihZ').waitFor({ state: 'visible', timeout: 90000 });
  const cartCount = await productPage.locator('span._2dcihZ').textContent();
  expect(cartCount).toBe('1');
});




