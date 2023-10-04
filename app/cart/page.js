import CheckoutButton from './CheckoutButton';
import DisplayItem from './actions';
import { getCookie } from '../../utilities/cookies';
import { parseJson } from '../../utilities/json';

// +++++ • A Cart page (containing a list where products appear when you click on the "Add to cart" button on the single product page), which also shows the total price of all products
// ...
// +++++ ◦ The checkout button needs to have the HTML attribute data-test-id="cart-checkout"
// +++++ ◦ Negative quantity values should not be possible
// +++++ ◦ Clicking on the checkout button should navigate to the checkout page

// +++++ • the remove button needs to have the HTML attribute data-test-id="cart-product-remove-<product id>"

export function generateMetadata() {
  return {
    title: 'Your Cart | My E-Commerce App',
  };
}

export default async function CartPage() {
  const currentCartCookie = getCookie('cart');

  const currentCart = await (currentCartCookie
    ? parseJson(currentCartCookie)
    : []);

  return (
    <>
      <h1>This is your Order: </h1>
      <br />
      <br />
      <div>
        <DisplayItem />
        <CheckoutButton cart={currentCart} data-test-id="cart-checkout" />
      </div>
    </>
  );
}
