import styles from './styles.module.scss';
import Link from 'next/link';
import NumberOfItems from './NumberOfItems';
import { getCookie } from '../utilities/cookies';
import { parseJson } from '../utilities/json';

export async function numberOfItems() {
  const currentCartCookie = getCookie('cart');
  let count = 0;

  const currentCart = await (currentCartCookie
    ? parseJson(currentCartCookie)
    : []);

  console.log(currentCart);

  for (let i = 0; i < currentCart.length; i++) {
    count += currentCart[i].quantity || 0;
  }

  return <span> Your Items: {count}</span>;
}

export default function Header() {
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
          <NumberOfItems data-test-id="cart-count">
            {numberOfItems}
            console.log({numberOfItems})
          </NumberOfItems>
        </div>
      </div>
    </header>
  );
}
