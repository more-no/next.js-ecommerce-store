'use client';
import { useRouter } from 'next/navigation';
import handleRemoveSingleItem from './HandleRemoveItem';

export default function RemoveButton({ id }) {
  const router = useRouter();

  const handleButtonClick = async () => {
    await handleRemoveSingleItem({ id });
    console.log('item removed successfully');

    router.reload();
  };

  return (
    <form>
      <button onClick={handleButtonClick}>Remove Item</button>
    </form>
  );
}
