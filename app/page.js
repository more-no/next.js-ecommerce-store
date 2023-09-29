// import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { setCookie } from '../utilities/actions';
import { getProducts } from '../database/products';

// +++++ A Products page (where all the products are listed)
// +++++ ▪  Minimum of 4 different products
// +++++   ▪ The page should have a relevant h1 element
// +++++   ▪ Each product (incl. product name and image) needs to be contained in an anchor element (a link) with an attribute of data-test-id="product-<product id>"
// +++++   ▪ This link will lead to its single product page
// +++++   ▪ The header (described below) needs to have a link to the products page with the HTML attribute data-test-id="products-link"

export const cart = setCookie([]);

export default function HomePage() {
  const products = getProducts();

  return (
    <main>
      <h1>These are our Products: </h1>
      <br />
      <br />
      {products.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            <Link
              data-test-id="product-<product id>"
              href={`/products/${product.id}`}
              rel="preload"
            >
              ' {product.name} '
              <Image
                src={`/images/${product.name}.jpg`}
                alt={product.name}
                width={300}
                height={300}
                priority={true}
              />
            </Link>
          </div>
        );
      })}
    </main>
  );
}
