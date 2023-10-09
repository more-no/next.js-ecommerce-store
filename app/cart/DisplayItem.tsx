import styles from './styles.module.scss';
import Image from 'next/image';
import RemoveButton from './RemoveButton';
import { ChangeQuantityButton } from './ChangeQuantityButton';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string | null;
};

type Cart = {
  id: number;
  quantity: number;
};

type Props = {
  products: Product[] | [];
  cart: Cart[] | [];
};

export function calculateSubTotal(price: number, quantity: number) {
  return price * quantity;
}

export function calculateTotal(totalPrice: number, subTotal: number) {
  return (totalPrice += subTotal);
}

export default function DisplayItem(props: Props) {
  let totalPrice = 0;

  // map through the cart and display the items inside
  // comparing the ID of each product with the IDs in the cart
  return (
    <>
      <ul className={styles.cartList}>
        {props.products.map((product) => {
          const itemToInclude = props.cart.find(
            (item) => item.id === product.id,
          );

          if (itemToInclude) {
            const subTotal = calculateSubTotal(
              product.price,
              itemToInclude.quantity,
            );
            totalPrice = calculateTotal(totalPrice, subTotal);

            // If the product exists in the cart display it
            return (
              <li
                data-test-id="cart-product-<product id>"
                key={`product-div-${product.id}`}
              >
                <div>
                  <Image
                    src={`/images/${product.name}.jpg`}
                    alt={product.name}
                    width={300}
                    height={300}
                    priority={true}
                  />
                  <h1>{product.name}</h1>
                  <p
                    className={styles.cartText}
                    data-test-id="cart-product-quantity-<product id>"
                  >
                    {' '}
                    Quantity: {itemToInclude.quantity}{' '}
                  </p>
                  <p className={styles.cartText}> Subtotal: {subTotal} €</p>
                  <ChangeQuantityButton productId={product.id} />
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
