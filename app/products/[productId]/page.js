'use client';
import Image from 'next/image';
import { useState } from 'react';
import { products } from '../../../database/products';
import { getProductById } from '../../../database/products';

// A page for each single product (when you click on the product it goes to this page) with ability to add a quantity to the cart
// ◦ The single product URL needs to contain the id (eg. /products/<product id>)
// +++++ ◦ The product name needs to be directly inside an h1 element (it should be the only h1)
// +++++ ◦ The product image needs to be in an img element with the HTML  attribute data-test-id="product-image"
// +++++ ◦ The product price (without any currency symbol or thousands separator) needs to be directly inside an element with the HTML attribute data-test-id="product-price"
// +++++ ◦ The quantity input needs to have the HTML attribute data-test-id="product-quantity"
//     +++++ ▪  an input field here with type=”number”
//     +++++ ▪  The starting quantity should be 1
// +++++ ◦ The add to cart button needs to have the HTML attribute data-test-id="product-add-to-cart"
// +++++ ◦ Negative quantity values should not be possible

export function AddToCartButton(props) {
  const [userInput, setUserInput] = useState();
  const [quantity, setQuantity] = useState(0);

  const chosenProduct = {
    Id: props.id,
    Price: props.price,
    Quantity: quantity,
  };
  console.log(chosenProduct);

  const handleAddToCart = () => {
    // Update the quantity with the user input
    setQuantity(Number(userInput));
  };

  return (
    <>
      <input
        data-test-id="product-quantity"
        onChange={(event) => {
          setUserInput(event.currentTarget.value);
        }}
        type="number"
        min="1"
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
      <div> Quantity: {userInput}</div>
    </>
  );
}

export default function SingleProductPage(props) {
  const singleProduct = getProductById(Number(props.params.productId));

  console.log(singleProduct);

  // if (!singleProduct) {
  //   return notFound();
  // }

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
      <h3 data-test-id="product-price"> {singleProduct.price} </h3>
      <AddToCartButton
        price={singleProduct.price}
        id={singleProduct.id}
        data-test-id="product-add-to-cart"
      />
    </div>
  );
}
