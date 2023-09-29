import { useRouter } from 'next/navigation';

// +++++ ◦ Clicking on the checkout button should navigate to the checkout page
//    create an useEffect to handle initial state of the Cart
// useEffect ==> const [currentCart, setCurrentCart] = useState([]);

// useEffect

export default function CheckoutButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/checkout')}>
      Check Out
    </button>
  );
}
