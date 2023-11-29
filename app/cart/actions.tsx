'use server';
import { getCookie } from '../../utilities/cookies';
import { setCookie } from '../../utilities/cookies';
import { parseJson } from '../../utilities/json';

type CartItem = {
  id: number;
  quantity: number;
};

type Item = {
  id: number;
  quantity: string;
};

type Index = {
  index: number;
};

export async function handleButtonClick(id: number) {
  const currentCartCookie = getCookie('cart');

  const currentCart = currentCartCookie ? parseJson(currentCartCookie) : [];

  const updatedCart = currentCart.filter((item: CartItem) => item.id !== id);

  await setCookie(JSON.stringify(updatedCart));
}

export async function handleChangeCart(productId: number, quantityId: number) {
  let newCart = [];

  // 1. get the current cookie
  const currentCartCookie = getCookie('cart');

  // 2. parse the cookie value
  const currentCart = currentCartCookie ? parseJson(currentCartCookie) : [];

  // 3. we edit the cookie value
  const itemToUpdateIndex = currentCart.findIndex(
    (item: Item) => item.id === productId,
  );

  if (itemToUpdateIndex !== -1) {
    // If the product already exists in the cart, update its quantity
    newCart = currentCart.map((item: Item, index: Index) => {
      if (index === itemToUpdateIndex) {
        const updatedQuantity = Math.max(quantityId, 0);

        // update its quantity
        return {
          ...item,
          quantity: updatedQuantity,
        };
      }
      // return the update cart
      return item;
    });
  }
  // 4. we override the cookie
  await setCookie(JSON.stringify(newCart));
}
