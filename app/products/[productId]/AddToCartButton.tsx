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
        value={quantity}
        onChange={(event) => {
          setQuantity(parseInt(event.currentTarget.value));
        }}
        type="number"
        min="1"
      />
      <button
        formAction={async () => await handleCart(props.productId, quantity)}
      >
        Add to Cart
      </button>
    </form>
  );
}
