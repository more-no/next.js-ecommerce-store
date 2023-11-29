import { expect, test } from '@jest/globals';
import { calculateSubTotal } from '../../app/cart/DisplayItem';

test('Combine data from database (price) with data from cookie (quantity)', () => {
  expect(calculateSubTotal(55, 2)).toBe(110);
  expect(calculateSubTotal(60, 3)).toBe(180);
  expect(calculateSubTotal(45, 4)).toBe(180);
});
