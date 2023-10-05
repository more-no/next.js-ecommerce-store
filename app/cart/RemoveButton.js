'use client';
import styles from './styles.module.scss';
import { handleButtonClick } from './actions';

export default function RemoveButton({ id }) {
  return (
    <form>
      <button
        className={styles.removeButton}
        formAction={async () => await handleButtonClick(id)}
      >
        Remove Item
      </button>
    </form>
  );
}
