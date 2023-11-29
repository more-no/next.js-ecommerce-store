import Link from 'next/link';
import { getProducts } from '../database/products';

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main>
      <h1>These are our Products: </h1>
      <div>
        {products.map((product) => {
          return (
            <div key={`product-div-${product.id}`}>
              <Link
                data-test-id={`product-${product.id}`}
                href={`/products/${product.id}`}
              >
                <h1>{product.name}</h1>
                <img
                  src={`/images/${product.name}.jpg`}
                  alt={product.name}
                  width={450}
                  height={450}
                />
              </Link>
              <br />
            </div>
          );
        })}
      </div>
    </main>
  );
}
