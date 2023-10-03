'use client';
import { deleteCookie } from './actions';

export default function DeleteCookie() {
  return (
    <button formAction={async () => await deleteCookie()}>
      {' '}
      Confirm Order{' '}
    </button>
  );
}
