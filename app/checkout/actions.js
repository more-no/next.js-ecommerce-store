'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// ◦ Clicking on the Confirm Order button should empty the cart and navigate to the Thank You page

export async function deleteCookie(value) {
  await cookies().set('cart', value);
}

export default async function ConfirmButton() {
  const response = await deleteCookie;

  if (response.ok) {
    redirect('/thankyou');
  }

  return <button> Confirm Order </button>;
}
