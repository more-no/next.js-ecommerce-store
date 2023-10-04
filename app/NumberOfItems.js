import { getCookie } from '../utilities/cookies';
import { parseJson } from '../utilities/json';

// +++++ ◦ The number of items is the sum of the quantity of all products (eg. if you have 2 apples and 3 bananas in your cart, the number of items is 5)
// +++++ ◦ The number of items needs to update when you add or remove items from the cart

export default async function NumberOfItems() {
  const currentCartCookie = getCookie('cart');
  let count = 0;

  const currentCart = await (currentCartCookie
    ? parseJson(currentCartCookie)
    : []);

  console.log(currentCart);

  for (let i = 0; i < currentCart.length; i++) {
    count += currentCart[i].quantity || 0;
  }

  return <span> Your Items: {count}</span>;
}
