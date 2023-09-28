'use client';
import { useState } from 'react';
import { getProductById } from '../../../database/products';
import SingleProductPage from './page';
import Cart from '../../cart/page';

// ▪ Clicking this button will add the amount from the product quantity input to any quantity of this product already in the cart
//     • For example, if the amount in the product quantity input is 2 and the existing quantity of this product in the cart is 3, then after clicking the button, the quantity of this product in the cart will become 5
// +++++ ◦ Negative quantity values should not be possible

export default function AddToCartButton(id) {
  const [userInput, setUserInput] = useState();

  // const product = getProductById(id);

  const cartElement = {
    name: id.name,
    quantity: userInput,
  };

  console.log(cartElement);

  return (
    <>
      <button onClick={() => {}}>
        <input
          data-test-id="product-quantity"
          onChange={(event) => {
            setUserInput(event.currentTarget.value);
            Cart(id, userInput);
          }}
          type="number"
          min="1"
        />
        Add to Cart
      </button>
      <div> Quantity: {userInput}</div>
    </>
  );
}
