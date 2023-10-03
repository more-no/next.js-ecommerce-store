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
    <header>
      <Link data-test-id="products-link" href="/">
        Our Products
      </Link>
      <br />
      <Link data-test-id="cart-link" href="/cart">
        To my Cart
        <br />
      </Link>
      <NumberOfItems data-test-id="cart-count">{NumberOfItems}</NumberOfItems>
      <br />
      <br />
    </header>
  );
}
