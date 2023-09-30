'use server';
import { cookies } from 'next/headers';

export async function deleteCookie(value) {
  await cookies().set('cart', value);
}
