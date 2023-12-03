'use client';
import { useState } from 'react';
import { handleCart } from './actions';

type Props = {
  productId: number;
};

export function AddToCartButton(props: Props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <form className="mt-6">
      <input
        className="text-xl"
        data-test-id="product-quantity"
        value={quantity}
        type="number"
        min="1"
        onChange={(event) => {
          setQuantity(parseInt(event.currentTarget.value));
        }}
      />
      <button
        className="btn btn-secondary"
        data-test-id="product-add-to-cart"
        formAction={async () => await handleCart(props.productId, quantity)}
      >
        Add to Cart
      </button>
    </form>
  );
}
