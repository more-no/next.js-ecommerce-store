import Link from 'next/link';
import { getCookie } from '../utilities/cookies';
import { parseJson } from '../utilities/json';

export default function Header() {
  let count = 0;

  const currentCartCookie = getCookie('cart');

  const currentCart = currentCartCookie ? parseJson(currentCartCookie) : [];

  currentCart.forEach((item) => {
    // Ensure the quantity is not negative
    const nonNegativeQuantity = Math.max(item.quantity, 0);

    count += nonNegativeQuantity;
  });

  return (
    <header className="navbar bg-base-100 mb-60 rounded-box">
      <div className="navbar-start">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          Logo
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <div className="btn btn-ghost normal-case text-xl">
          <Link data-test-id="products-link" href="/">
            Our Products
          </Link>
        </div>
        <div className="btn btn-ghost normal-case text-xl">
          <Link data-test-id="cart-link" href="/cart">
            To Your Cart
          </Link>
        </div>
        <div className="btn">
          <span>Your Items: </span>
          <span data-test-id="cart-count">{count}</span>
        </div>
      </div>
    </header>
  );
}
