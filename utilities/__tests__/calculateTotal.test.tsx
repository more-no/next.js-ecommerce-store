import { expect, test } from '@jest/globals';
import { calculateTotal } from '../../app/cart/DisplayItem';

test('Sum the subTotals to calculate the Total', () => {
  expect(calculateTotal(135, 240)).toBe(375);
  expect(calculateTotal(0, 120)).toBe(120);
  expect(calculateTotal(240, 45)).toBe(285);
});
