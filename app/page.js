import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../database/products';

// +++++ A Products page (where all the products are listed)
// +++++ ▪  Minimum of 4 different products
// +++++   ▪ The page should have a relevant h1 element
// +++++   ▪ Each product (incl. product name and image) needs to be contained in an anchor element (a link) with an attribute of data-test-id="product-<product id>"
// +++++   ▪ This link will lead to its single product page

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main>
      <h1>These are our Products: </h1>
      <div className={styles.productsContainer}>
        {products.map((product) => {
          return (
            <div key={`product-div-${product.id}`}>
              <Link
                data-test-id="product-<product id>"
                href={`/products/${product.id}`}
                rel="preload"
              >
                {/* {product.name} */}
                <Image
                  className={styles.productsImages}
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
      </div>
    </main>
  );
}
