import CheckoutButton from './CheckoutButton';
import DisplayItem from './DisplayItem';
import { getCookie } from '../../utilities/cookies';
import { parseJson } from '../../utilities/json';

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
    <div>
      <DisplayItem />
      <CheckoutButton cart={currentCart} data-test-id="cart-checkout" />
    </div>
  );
}
