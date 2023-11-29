'use client';
import { handleButtonClick } from './actions';

type Props = {
  id: number;
};

export default function RemoveButton(props: Props) {
  return (
    <form>
      <button
        data-test-id={`cart-product-remove-${props.id}`}
        formAction={async () => await handleButtonClick(props.id)}
      >
        Remove Item
      </button>
    </form>
  );
}
