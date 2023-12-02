import test from '@playwright/test';

//  PLAYWRIGHT E2E: Add to cart, change quantity and remove from cart
test('Add to cart test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('product-1').click();
  await page.getByTestId('product-quantity').click();
  await page.getByTestId('product-quantity').fill('3');
  await page.getByTestId('product-quantity').press('Enter');
  await page.getByTestId('products-link').click();
  await page.getByTestId('product-3').click();
  await page.getByTestId('product-quantity').click();
  await page.getByTestId('product-quantity').fill('3');
  await page.getByTestId('product-quantity').press('Enter');
  await page.getByTestId('cart-link').click();
  await page.getByTestId('cart-product-remove-1').click();
});

// PLAYWRIGHT E2E: Checkout flow, payment page, thank you page
test('Checkout flow test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('product-1').click();
  await page.getByTestId('product-add-to-cart').click();
  await page.getByTestId('cart-link').click();
  await page.getByTestId('cart-checkout').click();
  await page.getByTestId('checkout-first-name').click();
  await page.getByTestId('checkout-first-name').fill('Mario');
  await page.getByTestId('checkout-first-name').press('Tab');
  await page.getByTestId('checkout-last-name').fill('Rossi');
  await page.getByTestId('checkout-last-name').press('Tab');
  await page.getByTestId('checkout-email').fill('mario@mail.com');
  await page.getByTestId('checkout-email').press('Tab');
  await page.getByTestId('checkout-address').fill('via roma');
  await page.getByTestId('checkout-address').press('Tab');
  await page.getByTestId('checkout-city').fill('roma');
  await page.getByTestId('checkout-city').press('Tab');
  await page.getByTestId('checkout-postal-code').fill('1256');
  await page.getByTestId('checkout-postal-code').press('Tab');
  await page.getByTestId('checkout-country').fill('italy');
  await page.getByTestId('checkout-country').press('Tab');
  await page.getByTestId('checkout-credit-card').fill('1212262659594878');
  await page.getByTestId('checkout-credit-card').press('Tab');
  await page.getByTestId('checkout-expiration-date').fill('10/08');
  await page.getByTestId('checkout-expiration-date').press('Tab');
  await page.getByTestId('checkout-security-code').fill('352');
  await page.getByTestId('checkout-confirm-order').click();
});
