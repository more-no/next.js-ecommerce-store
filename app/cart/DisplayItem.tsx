import RemoveButton from './RemoveButton';
import { ChangeQuantity } from './ChangeQuantity';

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
      <ul className="flex h-96 place-content-center mt-16">
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
                className="w-100"
              >
                <div className="mx-16">
                  <img
                    src={`/images/${product.name}.jpg`}
                    alt={product.name}
                    width={400}
                    className="rounded-3xl place-self-center"
                  />
                  <h1 className="text-2xl font-bold my-4"> {product.name} </h1>

                  <div className="flex flex-row flex-nowrap text-xl">
                    <h3 className="mr-6">Quantity:</h3>
                    <p data-test-id={`cart-product-quantity-${product.id}`}>
                      {Math.max(itemToInclude.quantity, 0)}
                    </p>
                  </div>

                  <div className="flex flex-row flex-nowrap text-xl">
                    <h3 className="mr-6">SubTotal: </h3>
                    <span>{subtotal}</span>
                    <h3 className="mr-6">€</h3>
                  </div>

                  <ChangeQuantity productId={product.id} />
                  <div className="flex justify-between items-center">
                    <div className="flex-grow" />
                    <RemoveButton id={itemToInclude.id} />
                  </div>
                </div>
              </li>
            );
          }
          return null;
        })}
      </ul>
      <div className="flex flex-row flex-nowrap text-3xl font-bold mt-24 mr-24">
        <div className="flex-grow" />
        <h3 className="mr-6">Total price: </h3>
        <span data-test-id="cart-total">{totalPrice}</span>
        <h3 className="mr-6">€</h3>
      </div>
    </>
  );
}
