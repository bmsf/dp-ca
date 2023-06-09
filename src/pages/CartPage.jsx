import { CartContext } from '../CartContext';

const CartPage = () => {
	const { cartItems, itemCount } = useContext(CartContext);

	if (cartItems.length === 0) {
		return <p>Your cart is empty.</p>;
	}
};

export default CartPage;
