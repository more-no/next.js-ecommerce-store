'use client';
import CheckoutButton from './CheckoutButton';
import { useState } from 'react';
import { products } from '../../database/products';
import AddToCart from '../products/[productId]/AddToCartButton';

// • A Cart page (containing a list where products appear when you click on the "Add to cart" button on the single product page), which also shows the total price of all products
// ◦ Each product needs to be contained in an element with the HTML attribute data-test-id="cart-product-<product id>"
//     ▪ Inside the product element:
//         • the product name needs to be be visible
//         • the quantity needs to be visible, as the only content inside an element with the HTML attribute data-test-id="cart-product-quantity-<product id>"
//         • the product subtotal needs to be visible (price × quantity)
//         • the remove button needs to have the HTML attribute data-test-id="cart-product-remove-<product id>"
// +++++ ◦ The total price (the number without any currency symbol) needs to be directly inside an element with the HTML attribute data-test-id="cart-total"
// +++++ ◦ The checkout button needs to have the HTML attribute data-test-id="cart-checkout"
// +++++ ◦ Negative quantity values should not be possible
// ◦ Clicking on the checkout button should navigate to the checkout page
//    create an useEffect to handle initial state of the Cart
// useEffect ==> const [currentCart, setCurrentCart] = useState([]);
//    do i need to connect the current state of the cart to the cookies
//    where i store the user inputs ??

export default function Cart(id, quantity) {
  // const [userOrder, setUserOrder] = useState([]);

  // const newOrder = {
  //   name:
  // }

  return (
    <div>
      <ul>
        {/* here will go a function to put all the selected elements in a    list  */}
      </ul>
      {/* <h3 data-test-id="cart-total"> {totalPrice} </h3> */}
      <CheckoutButton data-test-id="cart-checkout" />
    </div>
  );
}
