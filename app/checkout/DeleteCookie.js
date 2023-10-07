'use client';
import { deleteCookie } from './actions';

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
