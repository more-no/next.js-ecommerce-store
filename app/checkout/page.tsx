import ConfirmOrderButton from './ConfirmOrderButton';

export function generateMetadata() {
  return {
    title: 'Checkout | My E-Commerce App',
  };
}

export default function CheckoutPage() {
  return (
    <form className="hero min-h-96 mt-24 text-xl">
      <fieldset>
        <legend className="font-bold">Shipping & Payment Information</legend>
        <br />
        <ul>
          <li>
            <label className="flex flex-row">
              {' '}
              First Name:
              <div className="flex-grow" />
              <input
                className="input input-bordered input-xs w-60"
                pattern="[A-Za-z]+"
                name="userFirstName"
                data-test-id="checkout-first-name"
                required
              />
            </label>
          </li>
          <li className="formElement">
            <label className="flex flex-row">
              {' '}
              Last Name:
              <div className="flex-grow" />
              <input
                className="input input-bordered input-xs w-60"
                pattern="[A-Za-z]+"
                name="userLastName"
                data-test-id="checkout-last-name"
                required
              />
            </label>
          </li>
          <li className="formElement">
            <label className="flex flex-row">
              {' '}
              Email:
              <div className="flex-grow" />
              <input
                className="input input-bordered input-xs w-60"
                type="email"
                name="userEmail"
                data-test-id="checkout-email"
                required
              />
            </label>
          </li>
          <li className="formElement">
            <label className="flex flex-row">
              {' '}
              Address:
              <div className="flex-grow" />
              <input
                className="input input-bordered input-xs w-60"
                name="userAddress"
                data-test-id="checkout-address"
                required
              />
            </label>
          </li>
          <li className="formElement">
            <label className="flex flex-row">
              {' '}
              City:
              <div className="flex-grow" />
              <input
                className="input input-bordered input-xs w-60"
                pattern="[A-Za-z]+"
                name="userCity"
                data-test-id="checkout-city"
                required
              />
            </label>
          </li>
          <li className="formElement">
            <label className="flex flex-row">
              {' '}
              Postal Code:
              <div className="flex-grow" />
              <input
                className="input input-bordered input-xs w-60"
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
            <label className="flex flex-row">
              {' '}
              Country:
              <div className="flex-grow" />
              <input
                className="input input-bordered input-xs w-60"
                pattern="[A-Za-z]+"
                name="userCountry"
                data-test-id="checkout-country"
                required
              />
            </label>
          </li>
          <li className="formElement">
            <label className="flex flex-row">
              {' '}
              Credit Card:
              <div className="flex-grow" />
              <input
                className="input input-bordered input-xs w-60"
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
            <label className="flex flex-row">
              {' '}
              Expiration Date:
              <div className="ml-8 flex-grow" />
              <input
                className="input input-bordered input-xs w-60"
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
            <label className="flex flex-row">
              {' '}
              Security Code:
              <div className="flex-grow" />
              <input
                className="input input-bordered input-xs w-60"
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
