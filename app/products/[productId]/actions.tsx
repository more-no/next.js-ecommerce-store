'use server';
import { setCookie } from '../../../utilities/cookies';
import { getCookie } from '../../../utilities/cookies';
import { parseJson } from '../../../utilities/json';

type Item = {
  id: number;
  quantity: string;
};

type Index = {
  index: number;
};

export async function handleCart(productId: number, quantityId: number) {
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
        let parsedItemQuantity = parseInt(item.quantity);
        const parsedChosenProductQuantity = quantityId;
        const updatedQuantity = (parsedItemQuantity +=
          parsedChosenProductQuantity);
        // update its quantity
        return {
          ...item,
          quantity: updatedQuantity,
        };
      }
      // return the update cart
      return item;
    });
  } else {
    // If the product doesn't exist in the cart, add it
    newCart = [
      ...currentCart,
      {
        id: productId,
        quantity: quantityId,
      },
    ];
  }

  // 4. we override the cookie
  await setCookie(JSON.stringify(newCart));
}
