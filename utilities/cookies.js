import { cookies } from 'next/headers';

// nullish coalescing operator
export function getCookie(name) {
  return cookies().get(name)?.value;
}

export async function setCookie(value) {
  await cookies().set('cart', value);
}
