'use client';
import { useState } from 'react';
import { handleChangeCart } from './actions';

type Props = {
  productId: number;
};

export function ChangeQuantityButton(props: Props) {
  const [newQuantity, setNewQuantity] = useState(1);

  return (
    <form>
      <input
        data-test-id="product-quantity"
        value={newQuantity}
        onChange={(event) => {
          setNewQuantity(parseInt(event.currentTarget.value));
        }}
        type="number"
        min="1"
      />
      <button
        formAction={async () =>
          await handleChangeCart(props.productId, newQuantity)
        }
      >
        Change Quantity
      </button>
    </form>
  );
}
