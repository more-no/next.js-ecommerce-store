import Cart from './Cart';
import styles from './page.module.css';

// +++++ • A header with a link to the Cart, showing the number of items in the cart
// ◦ This header needs to appear on all pages
// +++++ ◦ The header needs to use the HTML <header> element
// ◦ The number of items is the sum of the quantity of all products (eg. if you have 2 apples and 3 bananas in your cart, the number of items is 5)
// ◦ The number of items needs to update when you add or remove items from the cart
// ◦ The link needs to have an HTML attribute data-test-id="cart-link"
// +++++ ◦ The count needs to be contained in an element with the HTML attribute data-test-id="cart-count"

export default function Header() {
  return (
    <header>
      <Cart />
      {/* <NumberOfitems /> */}
      ??? what Link ???styles
      {/* <Count data-test-id="cart-count" /> */}
    </header>
  );
}
