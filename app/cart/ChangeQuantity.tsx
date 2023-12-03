'use client';
import { useState } from 'react';
import { handleChangeCart } from './actions';

type Props = {
  productId: number;
};

export function ChangeQuantity(props: Props) {
  const [newQuantity, setNewQuantity] = useState(1);

  return (
    <form className="text-xl mt-4">
      <button
        className="pr-4"
        formAction={async () =>
          await handleChangeCart(props.productId, newQuantity)
        }
      >
        Change Quantity:
      </button>
      <input
        data-test-id="product-quantity"
        className="w-16"
        value={newQuantity}
        onChange={(event) => {
          setNewQuantity(parseInt(event.currentTarget.value));
        }}
        type="number"
        min="1"
      />
    </form>
  );
}
