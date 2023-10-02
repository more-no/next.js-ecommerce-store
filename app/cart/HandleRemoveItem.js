'use server';
import { getCookie } from '../../utilities/cookies';
import { setCookie } from '../../utilities/cookies';
import { parseJson } from '../../utilities/json';

export default async function handleRemoveItem({ id }) {
  const currentCartCookie = getCookie('cart');
  const currentCart = currentCartCookie ? parseJson(currentCartCookie) : [];

  const updatedCart = currentCart.filter((item) => item.id !== id);

  await setCookie(JSON.stringify(updatedCart));
}
