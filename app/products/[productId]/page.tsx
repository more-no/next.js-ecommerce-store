import styles from './styles.module.scss';
import Image from 'next/image';
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
    <div className={styles.singleProduct}>
      <h1> {singleProduct.name} </h1>
      <Image
        data-test-id="product-image"
        className={styles.product}
        src={`/images/${singleProduct.name}.jpg`}
        width={200}
        height={200}
        priority={true}
        alt={singleProduct.name}
      />
      <h3 data-test-id="product-price">{singleProduct.price}</h3>
      <h3>€</h3>
      <AddToCartButton
        productId={singleProduct.id}
        data-test-id="product-add-to-cart"
      />
    </div>
  );
}
