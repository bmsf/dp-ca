import { Link } from 'react-router-dom';
import Cart from './Cart';

const Navbar = () => {
	return (
		<header className='flex justify-between p-6'>
			<nav>
				<ul>
					<li className='flex gap-6'>
						<Link to='/'>Home</Link>
						<Link to='/contact'>Contact us</Link>
					</li>
				</ul>
			</nav>
			<Cart />
		</header>
	);
};

export default Navbar;
