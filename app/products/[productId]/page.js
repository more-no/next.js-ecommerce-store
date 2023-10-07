import styles from './styles.module.scss';
import Image from 'next/image';
import { getProductById } from '../../../database/products';
import { AddToCartButton } from './AddToCartButton';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const singleProduct = await getProductById(Number(params.productId));

  return {
    title: singleProduct ? singleProduct.name : '',
  };
}

export default async function SingleProductPage(props) {
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
        width={100}
        height={100}
        priority={true}
        alt={singleProduct.name}
      />
      <h3 data-test-id="product-price">
        {' '}
        Product price: {singleProduct.price} €{' '}
      </h3>
      <AddToCartButton
        id={singleProduct.id}
        data-test-id="product-add-to-cart"
      />
    </div>
  );
}
