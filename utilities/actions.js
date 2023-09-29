'use server';
import { cookies } from 'next/headers';

export async function setCookie(value) {
  await cookies().set('cart', value);
}
