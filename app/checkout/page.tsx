import ConfirmOrderButton from './ConfirmOrderButton';

export function generateMetadata() {
  return {
    title: 'Checkout | My E-Commerce App',
  };
}

export default function CheckoutPage() {
  return (
    <form>
      <fieldset>
        <legend>Shipping & Payment Information</legend>
        <br />
        <ul>
          <li>
            <label>
              {' '}
              First Name:
              <input
                pattern="[A-Za-z]+"
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
                pattern="[A-Za-z]+"
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
              <input
                pattern="[A-Za-z]+"
                name="userCity"
                data-test-id="checkout-city"
                required
              />
            </label>
          </li>
          <li className="formElement">
            <label>
              {' '}
              Postal Code:
              <input
                placeholder="xxxx"
                pattern="[0-9]+"
                maxLength={4}
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
                pattern="[A-Za-z]+"
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
                placeholder="xxxx-xxxx-xxxx-xxxx"
                maxLength={16}
                pattern="[0-9\s]{13,19}"
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
                pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$"
                placeholder="MM/YY"
                maxLength={5}
                name="userExpirationDate"
                autoComplete="cc-exp"
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
                type="tel"
                maxLength={3}
                pattern="[0-9]+"
                placeholder="CVC"
                name="userSecurityCode"
                data-test-id="checkout-security-code"
                required
              />
            </label>
          </li>
        </ul>
        <ConfirmOrderButton />
      </fieldset>
    </form>
  );
}
