import { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import { CartContext } from '../CartContext';

const CheckoutSuccessPage = () => {
	const { clearCart } = useContext(CartContext);

	useEffect(() => {
		clearCart(); // Clear the cart items on component mount
	}, [clearCart]);

	const handleGoHome = () => {
		window.location.href = '/';
	};

	return (
		<Layout>
			<div className='container mx-auto py-8'>
				<div
					className='bg-green-100 border border-green-500 text-green-800 px-4 py-3 rounded relative'
					role='alert'
				>
					<strong className='font-bold'>Order Successful!</strong>
					<span className='block sm:inline'>Your order will arrive soon.</span>
				</div>
				<button
					onClick={handleGoHome}
					className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4'
				>
					Go Back to Home
				</button>
			</div>
		</Layout>
	);
};

export default CheckoutSuccessPage;
