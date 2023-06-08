import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

const Home = () => {
	return (
		<div className='flex flex-col'>
			<Layout>
				<ProductList />
			</Layout>
		</div>
	);
};

export default Home;
