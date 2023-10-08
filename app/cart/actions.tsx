'use server';
import { getCookie } from '../../utilities/cookies';
import { setCookie } from '../../utilities/cookies';
import { parseJson } from '../../utilities/json';

type Cart = {
  id: number;
  quantity: number;
};

export async function handleButtonClick(id: number) {
  const currentCartCookie = getCookie('cart');

  const currentCart = currentCartCookie ? parseJson(currentCartCookie) : [];

  const updatedCart = currentCart.filter((item: Cart) => item.id !== id);

  await setCookie(JSON.stringify(updatedCart));
}
