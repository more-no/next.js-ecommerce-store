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
  // Ensure the quantity is not negative
  const nonNegativeQuantity = Math.max(quantity, 0);

  return price * nonNegativeQuantity;
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
      <ul>
        {props.products.map((product) => {
          const itemToInclude = props.cart.find(
            (item) => item.id === product.id,
          );

          if (itemToInclude) {
            const subtotal = calculateSubTotal(
              product.price,
              itemToInclude.quantity,
            );
            totalPrice = calculateTotal(totalPrice, subtotal);

            // If the product exists in the cart display it
            return (
              <li
                data-test-id={`cart-product-${product.id}`}
                key={`product-div-${product.id}`}
              >
                <img
                  src={`/images/${product.name}.jpg`}
                  alt={product.name}
                  width={300}
                  height={300}
                />
                <h1>{product.name}</h1>
                <p>Quantity: :</p>
                <p data-test-id={`cart-product-quantity-${product.id}`}>
                  {Math.max(itemToInclude.quantity, 0)}
                </p>
                <p>SubTotal in €: </p>
                <p>{subtotal}</p>
                <div>
                  <ChangeQuantityButton productId={product.id} />
                  <br />
                  <RemoveButton id={itemToInclude.id} />
                </div>
              </li>
            );
          }
          return null;
        })}
      </ul>
      <p> Total price in €: </p>
      <h3 data-test-id="cart-total">{totalPrice}</h3>
    </>
  );
}
