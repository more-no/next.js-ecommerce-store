import styles from './styles.module.scss';
import Link from 'next/link';
import NumberOfItems from './NumberOfItems';

// +++++ ◦ This header needs to appear on all pages
// +++++ ◦ The header needs to use the HTML <header> element

// +++++   ▪ The header (described below) needs to have a link to the products page with the HTML attribute data-test-id="products-link"

// +++++ • A header with a link to the Cart, showing the number of items in the cart
// +++++ ◦ The link needs to have an HTML attribute data-test-id="cart-link"

// +++++ ◦ The count needs to be contained in an element with the HTML attribute data-test-id="cart-count"

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className={styles.buttonHeader}>
        <div className={styles.elements}>
          <Link data-test-id="products-link" href="/">
            Our Products
          </Link>
        </div>
        <div className={styles.elements}>
          <Link data-test-id="cart-link" href="/cart">
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
