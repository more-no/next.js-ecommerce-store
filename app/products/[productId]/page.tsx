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
    <div>
      <h1> {singleProduct.name} </h1>
      <img
        data-test-id="product-image"
        src={`/images/${singleProduct.name}.jpg`}
        width={200}
        height={200}
        alt={singleProduct.name}
      />
      <h4>{singleProduct.description}</h4>
      <h3 data-test-id="product-price">{singleProduct.price}</h3>
      <AddToCartButton productId={singleProduct.id} />
    </div>
  );
}
