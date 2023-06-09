import { useContext } from 'react';
import { CartContext } from '../CartContext';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const CartPage = () => {
	const { cartItems, itemCount } = useContext(CartContext);

	return (
		<Layout>
			<div className='container mx-auto py-8'>
				{itemCount > 0 ? (
					<div>
						<h2>Your Cart</h2>
						{cartItems.map((item) => (
							<div key={item.id} className='flex items-center my-4'>
								<img
									src={item.imageUrl}
									alt={item.title}
									className='w-20 h-20 object-contain mr-4'
								/>
								<div>
									<p>{item.title}</p>
									<p>Quantity: {item.quantity}</p>
								</div>
							</div>
						))}
						<p>Total items: {itemCount}</p>
						<Link to='/checkout'>
							<button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4'>
								Proceed to Checkout
							</button>
						</Link>
					</div>
				) : (
					<div>
						<h2>Your Cart is Empty</h2>
						<p>Please find something to add to your cart.</p>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default CartPage;
