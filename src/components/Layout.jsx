import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col justify-between min-h-screen'>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
