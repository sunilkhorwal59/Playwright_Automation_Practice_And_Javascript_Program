const { test, expect } = require('@playwright/test');

test('Search for iPhone on Amazon.in and print top 5 products', async ({ page }) => {
  
  // Step 1: Navigate to Amazon.in
  await page.goto('https://www.amazon.in/');
  console.log('✓ Navigated to Amazon.in');
  
  // Step 2: Search for iPhone
  const searchInput = page.locator('input[placeholder="Search Amazon.in"]');
  await searchInput.click();
  await searchInput.fill('iphone');
  await searchInput.press('Enter');
  console.log('✓ Searched for "iphone"');
  
  // Step 3: Wait for products to be displayed
  // Wait for the first product to appear
  await page.waitForSelector('[data-component-type="s-search-result"]', { timeout: 10000 });
  console.log('✓ Products are now displayed');
  
  // Wait for network to be idle to ensure all products are loaded
//  await page.waitForLoadState('networkidle');
  
  // Step 4: Get all product elements (limiting to top 5)
  const products = await page.locator('[data-component-type="s-search-result"]').all();
  console.log(`\n📦 Total products found: ${products.length}\n`);

  const productTitle = page.locator('div[data-cy="title-recipe"]')
  const allTitles = await productTitle.allTextContents()
  
  // Get only first 5 products
  const topFiveTitles = allTitles.slice(0, 5);
  
  // Assert that we have at least 5 products
  expect(topFiveTitles.length).toBeGreaterThanOrEqual(5);
  console.log(`✓ Found ${topFiveTitles.length} products (expecting 5)\n`);
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('                    TOP 5 PRODUCT TITLES                  ');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  // Print and assert each of the top 5 titles using for loop
  for (let i = 0; i < topFiveTitles.length; i++) {
    const title = topFiveTitles[i];
    
    // Assert that title is not empty
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
    
    console.log(`${i + 1}. ${title}`);
  }
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✓ All 5 products titles validated successfully!\n');
});
