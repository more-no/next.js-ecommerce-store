import Link from 'next/link';
import { getCookie } from '../utilities/cookies';
import { parseJson } from '../utilities/json';

export default function Header() {
  let count = 0;

  const currentCartCookie = getCookie('cart');

  const currentCart = currentCartCookie ? parseJson(currentCartCookie) : [];

  currentCart.forEach((item: { quantity: number }) => {
    // Ensure the quantity is not negative
    const nonNegativeQuantity = Math.max(item.quantity, 0);

    count += nonNegativeQuantity;
  });

  return (
    <header className="navbar bg-cyan-800 shadow-lg">
      <div className="navbar-start">
        <Link className="normal-case text-xl m-2" href="/">
          <img src="/images/logo.jpg" width="120" alt="home page" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <div className="btn btn-ghost normal-case text-xl text-white">
          <Link data-test-id="products-link" href="/">
            Our Products
          </Link>
        </div>
        <div className="btn btn-ghost normal-case text-xl text-white">
          <Link data-test-id="cart-link" href="/cart">
            To Your Cart
          </Link>
        </div>
        <div className="font-semibold normal-case text-xl text-white mx-4">
          <span>Your Items: </span>
          <span data-test-id="cart-count">{count}</span>
        </div>
      </div>
    </header>
  );
}
