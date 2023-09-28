'use client';

import { useRouter } from 'next/navigation';

export default function ConfirmButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/thankyou')}>
      Confirm Order
    </button>
  );
}
