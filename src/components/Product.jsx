import { Link } from 'react-router-dom';

const Product = ({ title, imageUrl, price, id }) => {
	return (
		<div>
			<img src={imageUrl} alt={title} />

			<div className='flex justify-between py-8'>
				<div>
					<h1>{title}</h1>
					<p>{price}</p>
				</div>
				<Link href={`/product/${id}`}>
					<button class='flex ml-auto text-white bg-red-500 border-0 py-3 px-6 focus:outline-none hover:bg-red-600 rounded'>
						View product
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Product;
