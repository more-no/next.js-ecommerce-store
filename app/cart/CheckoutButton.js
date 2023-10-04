'use client';
import { useRouter } from 'next/navigation';

// +++++ ◦ Clicking on the checkout button should navigate to the checkout page

export default function CheckoutButton({ cart }) {
  const router = useRouter();

  if (cart.length > 0) {
    return (
      <button type="button" onClick={() => router.push('/checkout')}>
        Check Out
      </button>
    );
  } else {
    return (
      <button type="button" disabled style={{ cursor: 'not-allowed' }}>
        Cart is Empty
      </button>
    );
  }
}
