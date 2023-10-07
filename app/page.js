import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../database/products';

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main>
      <h1>These are our Products: </h1>
      <div className={styles.productsContainer}>
        {products.map((product) => {
          return (
            <div key={`product-div-${product.id}`}>
              <h1>{product.name}</h1>
              <Link
                data-test-id="product-<product id>"
                href={`/products/${product.id}`}
                rel="preload"
              >
                <Image
                  className={styles.productsImages}
                  src={`/images/${product.name}.jpg`}
                  alt={product.name}
                  width={300}
                  height={300}
                  priority={true}
                />
              </Link>
              <div>{product.description}</div>
              <br />
            </div>
          );
        })}
      </div>
    </main>
  );
}
