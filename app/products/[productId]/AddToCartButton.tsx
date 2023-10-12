'use client';
import { useState } from 'react';
import { handleCart } from './actions';

type Props = {
  productId: number;
};

export function AddToCartButton(props: Props) {
  const [quantity, setQuantity] = useState(0);

  return (
    <form>
      <input
        data-test-id="product-quantity"
        placeholder="1"
        type="number"
        min="1"
        onChange={(event) => {
          setQuantity(parseInt(event.currentTarget.value));
        }}
      />
      <button
        data-test-id="product-add-to-cart"
        formAction={async () => await handleCart(props.productId, quantity)}
      >
        Add to Cart
      </button>
    </form>
  );
}
