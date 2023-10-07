import styles from './styles.module.scss';
import Image from 'next/image';
import { getProducts } from '../../database/products';
import { getCookie } from '../../utilities/cookies';
import { parseJson } from '../../utilities/json';
import RemoveButton from './RemoveButton';

export default async function DisplayItem() {
  const products = await getProducts();

  const currentCartCookie = getCookie('cart');

  const currentCart = await (currentCartCookie
    ? parseJson(currentCartCookie)
    : []);

  let totalPrice = 0;

  // map through the cart and display the items inside
  // comparing the ID of each product with the IDs in the cart
  return (
    <>
      <ul className={styles.cartList}>
        {products.map((product) => {
          const itemToInclude = currentCart.find(
            (item) => item.id === product.id,
          );

          if (itemToInclude) {
            const subTotal = product.price * itemToInclude.quantity;
            totalPrice += subTotal;

            // If the product exists in the cart display it
            return (
              <li
                data-test-id="cart-product-<product id>"
                key={`product-div-${product.id}`}
              >
                <div>
                  <Image
                    className={styles.productsImages}
                    src={`/images/${product.name}.jpg`}
                    alt={product.name}
                    width={300}
                    height={300}
                    priority={true}
                  />
                  <p
                    className={styles.cartText}
                    data-test-id="cart-product-quantity-<product id>"
                  >
                    {' '}
                    Quantity: {itemToInclude.quantity}{' '}
                  </p>
                  <p className={styles.cartText}> Subtotal: {subTotal} €</p>
                  <RemoveButton
                    id={itemToInclude.id}
                    data-test-id="cart-product-remove-<product id>"
                  />
                </div>
              </li>
            );
          }
          return null;
        })}
      </ul>
      <h3 className={styles.total} data-test-id="cart-total">
        {' '}
        Total price: {totalPrice} €{' '}
      </h3>
    </>
  );
}
