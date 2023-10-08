'use client';
import styles from './styles.module.scss';
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
      <button
        className={styles.checkoutButton}
        type="button"
        onClick={() => router.push('/checkout')}
      >
        Check Out
      </button>
    );
  } else {
    return (
      <button
        className={styles.checkoutButton}
        type="button"
        disabled
        style={{ cursor: 'not-allowed' }}
      >
        Cart is Empty
      </button>
    );
  }
}
