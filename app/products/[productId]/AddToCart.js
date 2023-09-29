import Cart from '../../cart/page';
import { setCookie } from '../../../utilities/actions';
import { getCookie } from '../../../utilities/cookies';
import { parseJson } from '../../../utilities/json';
import { cart } from '../../page';

// ▪ Clicking this button will add the amount from the product quantity input to any quantity of this product already in the cart
//     • For example, if the amount in the product quantity input is 2 and the existing quantity of this product in the cart is 3, then after clicking the button, the quantity of this product in the cart will become 5
// +++++ ◦ Negative quantity values should not be possible

export function AddToCart(props) {
  console.log(props);
}
