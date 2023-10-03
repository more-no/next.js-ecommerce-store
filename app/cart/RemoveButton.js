'use client';
import handleRemoveSingleItem from './HandleRemoveItem';
import { useRouter } from 'next/navigation';

export default function RemoveButton({ id }) {
  const router = useRouter();

  const handleButtonClick = async () => {
    await handleRemoveSingleItem({ id });

    console.log('item removed successfully');

    setTimeout(() => {
      router.reload();
    }, 1000);
  };

  return (
    <form>
      <button onClick={handleButtonClick}>Remove Item</button>
    </form>
  );
}
