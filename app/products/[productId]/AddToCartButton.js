'use client';
import { useState } from 'react';
import { AddToCart } from './AddToCart';

export function AddToCartButton(props) {
  const [userInput, setUserInput] = useState();
  const [quantity, setQuantity] = useState(0);

  const chosenProduct = {
    Id: props.id,
    Price: props.price,
    Quantity: quantity,
  };
  console.log(chosenProduct);

  const handleAddToCart = () => {
    // Update the quantity with the user input
    setQuantity(Number(userInput));
  };

  return (
    <>
      <input
        data-test-id="product-quantity"
        onChange={(event) => {
          setUserInput(event.currentTarget.value);
        }}
        type="number"
        min="1"
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
      <div> Quantity: {userInput}</div>
      <AddToCart toCart={chosenProduct} />
    </>
  );
}
