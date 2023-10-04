'use server';
import { setCookie } from '../../../utilities/cookies';
import { getCookie } from '../../../utilities/cookies';
import { parseJson } from '../../../utilities/json';

export async function handleCart(chosenProduct) {
  let newCart = [];

  // 1. get the current cookie
  const currentCartCookie = getCookie('cart');

  // 2. parse the cookie value
  const currentCart = currentCartCookie ? parseJson(currentCartCookie) : [];

  // 3. we edit the cookie value
  const itemToUpdateIndex = currentCart.findIndex(
    (item) => item.id === chosenProduct.id,
  );

  if (itemToUpdateIndex !== -1) {
    // If the product already exists in the cart, update its quantity
    newCart = currentCart.map((item, index) => {
      if (index === itemToUpdateIndex) {
        let parsedItemQuantity = parseInt(item.quantity);
        const parsedChosenProductQuantity = parseInt(chosenProduct.quantity);
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
        id: chosenProduct.id,
        quantity: chosenProduct.quantity,
      },
    ];
  }

  // 4. we override the cookie
  await setCookie(JSON.stringify(newCart));
}
