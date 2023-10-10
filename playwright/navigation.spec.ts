import test, { expect } from '@playwright/test';

//  PLAYWRIGHT E2E: Add to cart, change quantity and remove from cart
test('Add to cart test', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('link', { name: 'Adelaide' }).click();
  await page.waitForURL('http://localhost:3000/products/1');
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  await page.getByTestId('product-quantity').fill('3');
  await page.keyboard.press('Enter');

  await page.getByTestId('products-link').click();

  await page.getByRole('link', { name: 'Esmeralda' }).click();
  await page.waitForURL('http://localhost:3000/products/3');
  await expect(page).toHaveURL('http://localhost:3000/products/3');

  await page.getByTestId('product-quantity').fill('1');
  await page.keyboard.press('Enter');

  await page.getByTestId('cart-link').click();
  await page.waitForURL('http://localhost:3000/cart');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  await page
    .locator('li')
    .filter({
      hasText: 'Esmeralda Quantity: 1 Subtotal: 55 €Change QuantityRemove Item',
    })
    .getByTestId('product-quantity')
    .fill('5');

  await page.getByRole('button', { name: 'Change Quantity' }).nth(1).click();

  await page.getByRole('button', { name: 'Remove Item' }).nth(1).click();

  await page.getByTestId('cart-link').click();

  await page.getByRole('button', { name: 'Remove Item' }).click();

  await page.getByTestId('cart-link').click();
});

// PLAYWRIGHT E2E: Checkout flow, payment page, thank you page
test('Checkout flow test', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByRole('link', { name: 'Adelaide' }).click();
  await page.waitForURL('http://localhost:3000/products/1');
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  await page.getByTestId('product-quantity').fill('3');
  await page.keyboard.press('Enter');

  await page.getByTestId('cart-link').click();
  await page.waitForURL('http://localhost:3000/cart');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  await page.getByRole('button', { name: 'Check Out' }).click();
  await page.waitForURL('http://localhost:3000/checkout');
  await expect(page).toHaveURL('http://localhost:3000/checkout');

  await page.getByTestId('checkout-first-name').fill('Luca');
  await page.getByTestId('checkout-last-name').fill('Rossi');
  await page.getByTestId('checkout-email').fill('luca.rossi@gmail.com');
  await page.getByTestId('checkout-address').fill('Via Roma 45');
  await page.getByTestId('checkout-city').fill('Roma');
  await page.getByTestId('checkout-postal-code').fill('10190');
  await page.getByTestId('checkout-country').fill('Italy');
  await page.getByTestId('checkout-credit-card').fill('1111222233334444');
  await page.getByTestId('checkout-expiration-date').fill('0325');
  await page.getByTestId('checkout-security-code').fill('352');

  await page.getByTestId('checkout-confirm-order').click();
  await page.waitForURL('http://localhost:3000/thankyou');
  await expect(page).toHaveURL('http://localhost:3000/thankyou');
});
