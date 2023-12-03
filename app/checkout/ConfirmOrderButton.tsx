'use client';
import { deleteCookie } from './actions';

export default function ConfirmOrderButton() {
  return (
    <div className="flex justify-end">
      <button
        className="btn btn-neutral mt-8 ml-auto"
        data-test-id="checkout-confirm-order"
        formAction={async () => await deleteCookie()}
      >
        Confirm Order
      </button>
    </div>
  );
}
