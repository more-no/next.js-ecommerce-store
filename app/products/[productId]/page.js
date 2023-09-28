import Image from 'next/image';
import { products } from '../../../database/products';
import { getProductById } from '../../../database/products';
import AddToCartButton from './AddToCartButton';

// import Descrizione del prodotto ?!?

// A page for each single product (when you click on the product it goes to this page) with ability to add a quantity to the cart
// ◦ The single product URL needs to contain the id (eg. /products/<product id>)
// +++++ ◦ The product name needs to be directly inside an h1 element (it should be the only h1)
// +++++ ◦ The product image needs to be in an img element with the HTML  attribute data-test-id="product-image"
// +++++ ◦ The product price (without any currency symbol or thousands separator) needs to be directly inside an element with the HTML attribute data-test-id="product-price"
// +++++ ◦ The quantity input needs to have the HTML attribute data-test-id="product-quantity"
//     +++++ ▪  an input field here with type=”number”
//     +++++ ▪  The starting quantity should be 1
// +++++ ◦ The add to cart button needs to have the HTML attribute data-test-id="product-add-to-cart"

export default function SingleProductPage(props) {
  const singleProduct = getProductById(Number(props.params.productId));

  // if (!singleProduct) {
  //   return notFound();
  // }

  const product1Price = 30;

  return (
    <div>
      <br />
      <h1> {singleProduct.name} </h1>
      <Image
        data-test-id="product-image"
        src={`/images/${singleProduct.name}.jpg`}
        width={200}
        height={200}
        alt={singleProduct.name}
      />
      <h3>Product price in €: </h3>
      <h3 data-test-id="product-price"> {product1Price} </h3>
      {/*     ▪ Clicking this button will add the amount from the product quantity input to any quantity of this product already in the cart
        • For example, if the amount in the product quantity input is 2 and the existing quantity of this product in the cart is 3, then after clicking the button, the quantity of this product in the cart will become 5
      ◦ Negative quantity values should not be possible */}
      <AddToCartButton
        id={singleProduct.id}
        data-test-id="product-add-to-cart"
      />
    </div>
  );
}
