import styles from './styles.module.scss';
import Link from 'next/link';
import { getCookie } from '../utilities/cookies';
import { parseJson } from '../utilities/json';

export default function Header() {
  let count = 0;

  const currentCartCookie = getCookie('cart');

  const currentCart = currentCartCookie ? parseJson(currentCartCookie) : [];

  console.log(currentCart);

  currentCart.forEach((item) => {
    count += item.quantity;
  });

  console.log(count);

  return (
    <header className={styles.header}>
      <div className={styles.elements}>
        <Link className={styles.links} href="/">
          Home
        </Link>
      </div>
      <div className={styles.buttonHeader}>
        <div className={styles.elements}>
          <Link className={styles.links} data-test-id="products-link" href="/">
            Our Products
          </Link>
        </div>
        <div className={styles.elements}>
          <Link className={styles.links} data-test-id="cart-link" href="/cart">
            To my Cart
          </Link>
        </div>
        <div className={styles.itemsCount}>
          <span> Your Items: {count}</span>;
        </div>
      </div>
    </header>
  );
}
