'use client';
import { useState } from 'react';
import { handleCart } from './actions';

export function AddToCartButton({ id }) {
  const [quantity, setQuantity] = useState(0);

  const chosenProduct = {
    id: id,
    quantity: quantity,
  };

  console.log(quantity);

  return (
    <form>
      <input
        data-test-id="product-quantity"
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
        type="number"
        min="1"
      />
      <button formAction={async () => await handleCart(chosenProduct)}>
        Add to Cart
      </button>
      <div> Quantity: {chosenProduct.quantity}</div>
    </form>
  );
}
