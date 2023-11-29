import { getProductById } from '../../../database/products';
import { AddToCartButton } from './AddToCartButton';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    productId: string;
  };
};

export async function generateMetadata(props: Props) {
  const singleProduct = await getProductById(Number(props.params.productId));

  return {
    title: singleProduct ? singleProduct.name : '',
  };
}

export default async function SingleProductPage(props: Props) {
  const singleProduct = await getProductById(Number(props.params.productId));

  if (!singleProduct) {
    notFound();
  }

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div>
        <div className="card-body">
          <img
            data-test-id="product-image"
            src={`/images/${singleProduct.name}.jpg`}
            width={200}
            height={200}
            alt={singleProduct.name}
          />
          <h1 className="card-title"> {singleProduct.name} </h1>
          <p>{singleProduct.description}</p>
          <p>Price in €: </p>{' '}
          <div className="card-actions justify-start">
            <h3 data-test-id="product-price">{singleProduct.price}</h3>
            <AddToCartButton productId={singleProduct.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
