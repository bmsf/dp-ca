import { useState } from 'react';
import Layout from '../components/Layout';

const CheckoutPage = () => {
	const [formData, setFormData] = useState({
		paymentMethod: '',
		name: '',
		email: '',
		address: '',
	});

	const handleFormSubmit = (event) => {
		event.preventDefault();
		window.location.href = '/checkoutsuccess';
	};

	const handleFormChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	return (
		<Layout>
			<div className='container mx-auto py-8'>
				<h2 className='text-2xl font-semibold mb-4'>Checkout</h2>
				<form onSubmit={handleFormSubmit}>
					<div className='mb-4'>
						<label htmlFor='paymentMethod' className='mr-2 text-lg'>
							Payment Method:
						</label>
						<select
							id='paymentMethod'
							name='paymentMethod'
							onChange={handleFormChange}
							className='border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500'
							required
						>
							<option value=''>Select payment method</option>
							<option value='creditCard'>Credit Card</option>
							<option value='paypal'>PayPal</option>
							<option value='stripe'>Stripe</option>
						</select>
					</div>
					<div className='mb-4'>
						<label htmlFor='name' className='text-lg'>
							Name:
						</label>
						<input
							type='text'
							id='name'
							name='name'
							onChange={handleFormChange}
							className='border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500'
							required
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='email' className='text-lg'>
							Email:
						</label>
						<input
							type='email'
							id='email'
							name='email'
							onChange={handleFormChange}
							className='border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500'
							required
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='address' className='text-lg'>
							Address:
						</label>
						<input
							type='text'
							id='address'
							name='address'
							onChange={handleFormChange}
							className='border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500'
							required
						/>
					</div>
					<button
						type='submit'
						className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4'
					>
						Pay Now
					</button>
				</form>
			</div>
		</Layout>
	);
};

export default CheckoutPage;
