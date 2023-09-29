'use server';
import { cookies } from 'next/headers';

export async function setCookie(value) {
  await cookies().set('cart', value);
}

// nullish coalescing operator
export async function getCookie(name) {
  return await cookies().get(name)?.value;
}
