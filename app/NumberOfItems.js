// import { getCookie } from '../utilities/cookies';
// import { parseJson } from '../utilities/json';

// export default async function NumberOfItems() {
//   const currentCartCookie = getCookie('cart');
//   let count = 0;

//   const currentCart = await (currentCartCookie
//     ? parseJson(currentCartCookie)
//     : []);

//   console.log(currentCart);

//   for (let i = 0; i < currentCart.length; i++) {
//     count += currentCart[i].quantity || 0;
//   }

//   return <span> Your Items: {count}</span>;
// }
