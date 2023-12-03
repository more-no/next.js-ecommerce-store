'use client';
import { useRouter } from 'next/navigation';

type Cart = {
  id: number;
  quantity: number;
};

type Props = {
  cart: Cart[] | [];
};

export default function CheckoutButton(props: Props) {
  const router = useRouter();

  if (props.cart.length) {
    return (
      <div className="flex flex-row flex-nowrap text-3xl font-bold mt-8 mr-24">
        <div className="flex-grow" />
        <button
          className="btn btn-secondary"
          data-test-id="cart-checkout"
          type="button"
          onClick={() => router.push('/checkout')}
        >
          Check Out
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row flex-nowrap text-3xl font-bold mt-8 mr-24">
        <div className="flex-grow" />
        <button
          className="btn btn-ghost"
          data-test-id="cart-checkout"
          type="button"
          disabled
          style={{ cursor: 'not-allowed' }}
        >
          Cart is Empty
        </button>
      </div>
    );
  }
}
