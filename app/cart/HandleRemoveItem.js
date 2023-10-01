'use server';
import { getCookie } from '../../utilities/cookies';
import { setCookie } from '../../utilities/cookies';
import { parseJson } from '../../utilities/json';

export default async function handleRemoveItem({ id }) {
  console.log('Removing item with id:', id);

  const currentCartCookie = getCookie('cart');
  const currentCart = currentCartCookie ? parseJson(currentCartCookie) : [];

  const updatedCart = currentCart.filter((item) => item.id !== id);
  console.log('Updated cart:', updatedCart);

  await setCookie(JSON.stringify(updatedCart));
}
