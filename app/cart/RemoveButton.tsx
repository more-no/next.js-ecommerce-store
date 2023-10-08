'use client';
import styles from './styles.module.scss';
import { handleButtonClick } from './actions';

type Props = {
  id: number;
};

export default function RemoveButton(props: Props) {
  return (
    <form>
      <button
        className={styles.removeButton}
        formAction={async () => await handleButtonClick(props.id)}
      >
        Remove Item
      </button>
    </form>
  );
}
