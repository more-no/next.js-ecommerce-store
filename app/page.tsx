import Link from 'next/link';
import { getProducts } from '../database/products';

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main>
      <div className="grid grid-flow-row items-center">
        <div className="flex flex-wrap place-content-center mt-24">
          {products.map((product) => {
            return (
              <div key={`product-div-${product.id}`}>
                <h2 className="card-title text-4xl font-bold pt-20">
                  {product.name}
                </h2>
                <div className="card-body">
                  <img
                    src={`/images/${product.name}.jpg`}
                    alt={product.name}
                    width={450}
                    height={450}
                    className="rounded-full"
                  />
                  <div className="card-actions justify-center pt-6">
                    <Link
                      data-test-id={`product-${product.id}`}
                      href={`/products/${product.id}`}
                      className="btn btn-primary"
                    >
                      See more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
