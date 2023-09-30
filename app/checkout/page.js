import ConfirmButton from './ConfirmButton';

// +++++ • A Checkout page which shows the total and asks for shipping and payment information
// +++++ ◦ The first name input needs to have the HTML attribute data-test-id="checkout-first-name"
// +++++ ◦ The last name input needs to have the HTML attribute data-test-id="checkout-last-name"
// +++++ ◦ The email input needs to have the HTML attribute data-test-id="checkout-email"
// +++++ ◦ The address input needs to have the HTML attribute data-test-id="checkout-address"
// +++++ ◦ The city input needs to have the HTML attribute data-test-id="checkout-city"
// +++++ ◦ The postal code input needs to have the HTML attribute data-test-id="checkout-postal-code"
// +++++ ◦ The country input needs to have the HTML attribute data-test-id="checkout-country"
// +++++ ◦ The credit card input needs to have the HTML attribute data-test-id="checkout-credit-card"
// +++++ ◦ The expiration date input needs to have the HTML attribute data-test-id="checkout-expiration-date"
// +++++ ◦ The security code input needs to have the HTML attribute data-test-id="checkout-security-code"
// +++++ ◦ The form should prevent submission with any of the above fields being empty
// +++++ ◦ The Confirm Order button needs to have the HTML attribute data-test-id="checkout-confirm-order"
// ◦ Privacy: don't save user information (payment or other personal information) anywhere (unless you have a privacy policy and are creating a real e-commerce store)
// ◦ Clicking on the Confirm Order button should empty the cart and navigate to the Thank You page

export default function CheckoutPage() {
  // connect to the CheckoutButton ???

  return (
    <>
      {/* <div> {totalCost} </div> */}
      <fieldset>
        <legend>Shipping & Payment Information</legend>
        <br />
        <form>
          <ul>
            <li className="formElement">
              <label>
                {' '}
                First Name:
                <input
                  name="userFirstName"
                  data-test-id="checkout-first-name"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Last Name:
                <input
                  name="userLastName"
                  data-test-id="checkout-last-name"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Email:
                <input
                  type="email"
                  name="userEmail"
                  data-test-id="checkout-email"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Address:
                <input
                  name="userAddress"
                  data-test-id="checkout-address"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                City:
                <input name="userCity" data-test-id="checkout-city" required />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Postal Code:
                <input
                  type="number"
                  name="userPostalCode"
                  data-test-id="checkout-postal-code"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Country:
                <input
                  name="userCountry"
                  data-test-id="checkout-country"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Credit Card:
                <input
                  type="number"
                  name="userCreditCard"
                  data-test-id="checkout-credit-card"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Expiration Date:
                <input
                  type="number"
                  name="userExpirationDate"
                  data-test-id="checkout-expiration-date"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Security Code:
                <input
                  type="number"
                  name="userSecurityCode"
                  data-test-id="checkout-security-code"
                  required
                />
              </label>
            </li>
          </ul>
          {/* <ConfirmButton /> */}
        </form>
      </fieldset>
    </>
  );
}

// (https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#redirecting)
