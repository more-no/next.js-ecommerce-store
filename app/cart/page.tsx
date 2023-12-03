import DisplayItem from './DisplayItem';
import { getProducts } from '../../database/products';
import { getCookie } from '../../utilities/cookies';
import { parseJson } from '../../utilities/json';

export function generateMetadata() {
  return {
    title: 'Your Cart',
  };
}

export default async function CartPage() {
  const products = await getProducts();

  const currentCartCookie = getCookie('cart');

  const currentCart = await (currentCartCookie
    ? parseJson(currentCartCookie)
    : []);

  return (
    <div>
      <DisplayItem products={products} cart={currentCart} />
    </div>
  );
}
