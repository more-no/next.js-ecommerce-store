import { cookies } from 'next/headers';

// nullish coalescing operator
// this one must not be async
export function getCookie(name) {
  return cookies().get(name)?.value;
}

export async function setCookie(value) {
  await cookies().set('cart', value);
}
