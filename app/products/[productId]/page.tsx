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
    <div className="flex mt-10 place-content-center">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div>
          <div className="card-body">
            <img
              data-test-id="product-image"
              src={`/images/${singleProduct.name}.jpg`}
              width={400}
              alt={singleProduct.name}
              className="rounded-3xl place-self-center"
            />
            <h1 className="card-title font-bold"> {singleProduct.name} </h1>
            <p>{singleProduct.description}</p>
            <div className="flex flex-row flex-nowrap text-xl">
              <h3 data-test-id="product-price" className="mr-6">
                {singleProduct.price}
              </h3>
              <div>€</div>
            </div>
            <div className="card-actions items-end">
              <AddToCartButton productId={singleProduct.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
