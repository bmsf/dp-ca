import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartContext';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const ProductPage = () => {
	const { id } = useParams();

	const [product, setProduct] = useState(null);

	const { addToCart } = useContext(CartContext);
	const [isAddedToCart, setIsAddedToCart] = useState(false);

	useEffect(() => {
		const fetchProduct = async () => {
			const response = await fetch(
				`https://api.noroff.dev/api/v1/online-shop/${id}`
			);
			const data = await response.json();
			setProduct(data);
		};

		fetchProduct();
	}, [id]);

	const handleAddToCart = () => {
		addToCart(product);
		setIsAddedToCart(true);

		// Reset the state after a brief delay (e.g., 2 seconds)
		setTimeout(() => {
			setIsAddedToCart(false);
		}, 2000);
	};

	const calculateDiscountedPrice = () => {
		if (
			product &&
			product.discountedPrice &&
			product.discountedPrice < product.price
		) {
			return product.discountedPrice;
		}
		return null;
	};

	const discountedPriceToShow = calculateDiscountedPrice();
	const discountAmount = product ? product.price - discountedPriceToShow : 0;

	// console.log(product);
	return (
		<Layout>
			<div className='container mx-auto py-8'>
				{product && (
					<div className='flex flex-col md:flex-row'>
						<div className='md:w-1/2'>
							<img
								src={product.imageUrl}
								alt={product.title}
								className='w-full'
							/>
						</div>
						<div className='md:w-1/2 md:pl-8'>
							<h2 className='text-2xl font-bold mb-4'>{product.title}</h2>
							<p className='text-gray-600 mb-4'>{product.description}</p>
							{discountedPriceToShow ? (
								<div className='flex items-center mb-4'>
									<span className='text-xl font-bold line-through text-gray-500 mr-2'>
										${product.price}
									</span>
									<span className='text-xl font-bold text-red-500'>
										${discountedPriceToShow}
									</span>
									<span className='text-sm text-gray-500 ml-2'>
										Save ${discountAmount}
									</span>
								</div>
							) : (
								<p className='text-xl font-bold mb-4'>${product.price}</p>
							)}

							<button
								className='bg-blue-500 text-white px-4 py-2 rounded'
								onClick={handleAddToCart}
								disabled={isAddedToCart} // Disable the button while the confirmation is displayed
							>
								{isAddedToCart ? 'Added to Cart!' : 'Add to Cart'}
							</button>

							{product.reviews && product.reviews.length > 0 && (
								<div className='mt-8'>
									<h3 className='text-xl font-bold mb-2'>Reviews</h3>
									{product.reviews.map((review) => (
										<div key={review.id} className='mb-4'>
											<p className='text-gray-600 mb-1'>{review.description}</p>
											<div className='flex items-center'>
												<span className='text-yellow-500 text-xl mr-1'>
													&#9733;
												</span>
												<span className='text-gray-700'>{review.rating}</span>
												<span className='text-gray-500 ml-2'>
													- {review.username}
												</span>
											</div>
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default ProductPage;
