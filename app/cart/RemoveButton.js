'use client';
import handleRemoveSingleItem from './HandleRemoveItem';

export default function RemoveButton({ id }) {
  const handleButtonClick = async () => {
    await handleRemoveSingleItem({ id });

    // setTimeout(() => {
    //   router.reload();
    // }, 1000);
  };

  return (
    <form>
      <button onClick={handleButtonClick}>Remove Item</button>
    </form>
  );
}
