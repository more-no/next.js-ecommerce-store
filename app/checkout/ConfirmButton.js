'use server';

// import { useRouter } from 'next/navigation';
import { deleteCookie } from './DeleteCookie';

// ◦ Clicking on the Confirm Order button should empty the cart and navigate to the Thank You page
//        empty the cart – delete the cookie

export default async function ConfirmButton() {
  await deleteCookie('');

  // const router = useRouter();

  return (
    <button
      type="button"
      // onClick={() => {
      //   router.push('/thankyou');
      // }}
    >
      Confirm Order
    </button>
  );
}
