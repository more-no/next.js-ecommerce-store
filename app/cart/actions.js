import { getProducts } from '../../database/products';
import { getCookie } from '../../utilities/cookies';
import { parseJson } from '../../utilities/json';
import RemoveButton from './RemoveButton';

// +++++ ◦ Each product needs to be contained in an element with the HTML attribute data-test-id="cart-product-<product id>"
// +++++    ▪ Inside the product element:
// +++++        • the product name needs to be be visible
// +++++        • the quantity needs to be visible, as the only content inside an element with the HTML attribute data-test-id="cart-product-quantity-<product id>"
// +++++        • the product subtotal needs to be visible (price × quantity)

// +++++ ◦ The total price (the number without any currency symbol) needs to be directly inside an element with the HTML attribute data-test-id="cart-total"

//         • the remove button needs to have the HTML attribute data-test-id="cart-product-remove-<product id>"

export default function DisplayItem() {
  const products = getProducts();
  const currentCartCookie = getCookie('cart');
  const currentCart = currentCartCookie ? parseJson(currentCartCookie) : [];

  let totalPrice = 0;

  console.log(currentCart);

  return (
    <>
      <ul>
        {products.map((product) => {
          const itemToInclude = currentCart.find(
            (item) => item.id === product.id,
          );

          console.log(itemToInclude);

          if (itemToInclude) {
            const subTotal = itemToInclude.price * itemToInclude.quantity;
            totalPrice += subTotal;

            // If the product already in the cart display it
            return (
              <li
                data-test-id="cart-product-<product id>"
                key={`product-div-${product.id}`}
              >
                <div>
                  <p> Product: {product.name} </p>
                  <p data-test-id="cart-product-quantity-<product id>">
                    {' '}
                    Quantity: {itemToInclude.quantity}{' '}
                  </p>
                  <p> Subtotal: {subTotal} €</p>
                  <br />
                  <RemoveButton />
                </div>
              </li>
            );
          }
          return null;
        })}
      </ul>
      <h3 data-test-id="cart-total"> {totalPrice} </h3>
    </>
  );
}
