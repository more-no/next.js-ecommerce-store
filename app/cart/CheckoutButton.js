'use client';
import { useRouter } from 'next/navigation';

// +++++ ◦ Clicking on the checkout button should navigate to the checkout page

export default function CheckoutButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/checkout')}>
      Check Out
    </button>
  );
}
