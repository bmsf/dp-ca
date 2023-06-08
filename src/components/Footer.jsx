import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-white py-6'>
			<div className='container mx-auto'>
				<div className='flex flex-col md:flex-row items-center justify-between'>
					<div className='flex items-center mb-4 md:mb-0'>
						<span className='text-lg font-semibold'>Ecommerce Store</span>
					</div>
					<div className='flex items-center'>
						<nav className='mr-4'>
							<a
								href='#'
								className='text-gray-400 hover:text-white hover:underline transition-colors duration-300'
							>
								Home
							</a>

							<a
								href='#'
								className='ml-4 text-gray-400 hover:text-white hover:underline transition-colors duration-300'
							>
								Contact
							</a>
						</nav>
					</div>
				</div>
				<hr className='my-4 border-gray-800' />
				<p className='text-center text-gray-400 text-sm'>
					&copy; {new Date().getFullYear()} Ecommerce Store. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
