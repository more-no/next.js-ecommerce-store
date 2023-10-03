'use client';
import { deleteCookie } from './actions';

// +++++ ◦ The Confirm Order button needs to have the HTML attribute data-test-id="checkout-confirm-order"

export default function DeleteCookie() {
  return (
    <button
      data-test-id="checkout-confirm-order"
      formAction={async () => await deleteCookie()}
    >
      {' '}
      Confirm Order{' '}
    </button>
  );
}
