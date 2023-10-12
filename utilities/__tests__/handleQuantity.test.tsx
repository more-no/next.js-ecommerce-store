import { expect, test } from '@jest/globals';
import { handleQuantity } from '../../app/products/[productId]/handleQuantity';

//  JEST Unit: Test function for updating quantity in item of cookie
//  (eg. adding an item to the cart that already exists)

test('', () => {
  expect(handleQuantity(3, 7)).toBe(10);
  expect(handleQuantity(3, 4)).toBe(7);
  expect(handleQuantity(5, 3)).toBe(8);
});
