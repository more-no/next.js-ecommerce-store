import { cookies } from 'next/headers';

export function getCookie(name) {
  return cookies().get(name)?.value;
}

export async function setCookie(value) {
  await cookies().set('cart', value);
}
