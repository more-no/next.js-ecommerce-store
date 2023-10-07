'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const deleteCookie = async () => {
  await cookies().delete('cart');
  redirect('/thankyou');
};
// this will be imported like this:
// import { deleteCookie } from './actions';

// export default async function deleteCookie() {
//   await cookies().delete('cart');
// }
// this would be imported like this instead:
// import deleteCookie from './actions';
