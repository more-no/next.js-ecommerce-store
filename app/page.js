import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { getProducts } from '../database/products';

// A Products page (where all the products are listed)
// Minimum of 4 different products
// +++++ ▪ The page should have a relevant h1 element
// +++++ ▪ Each product (incl. product name and image) needs to be contained in an anchor element (a link) with an attribute of data-test-id="product-<product id>"
// ▪ This link will lead to its single product page
// +++++ ▪ The header (described below) needs to have a link to the products page with the HTML attribute data-test-id="products-link"

export default function HomePage() {
  const products = getProducts();

  return (
    <main>
      <header data-test-id="products-link"></header>
      <h1>These are our Products: </h1>
      {products.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            <Link data-test-id="product-<product id>" href={`/${product.id}`}>
              {product.name}
              <Image
                src={`/images/${product.name}.png`}
                alt={product.name}
                width={200}
                height={200}
              />
            </Link>
          </div>
        );
      })}
    </main>
  );
}
