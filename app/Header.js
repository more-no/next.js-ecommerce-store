import styles from './styles.module.scss';
import Link from 'next/link';
import NumberOfItems from './NumberOfItems';

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
            {NumberOfItems}
          </NumberOfItems>
        </div>
      </div>
    </header>
  );
}
