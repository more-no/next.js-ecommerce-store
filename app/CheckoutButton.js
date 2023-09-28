'use client';

import CheckoutPage from './CheckoutPage';

// ◦ Clicking on the checkout button should navigate to the checkout page
//    create an useEffect to handle initial state of the Cart
// useEffect ==> const [currentCart, setCurrentCart] = useState([]);
//    do i need to connect the current state of the cart to the cookies
//    where i store the user inputs ??

export default function CheckoutButton() {
  return <button>Check Out</button>;
}
