'use client';
import { useRouter } from 'next/navigation';
import handleRemoveItem from './HandleRemoveItem';

export default function RemoveButton({ id }) {
  const router = useRouter();

  const handleButtonClick = async () => {
    await handleRemoveItem({ id });
    console.log('item removed successfully');

    router.reload();
  };

  return (
    <form>
      <button onClick={handleButtonClick}>Remove Item</button>
    </form>
  );
}
