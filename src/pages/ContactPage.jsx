import Layout from '../components/Layout';

const ContactPage = () => {
	return (
		<div>
			<Layout>
				<section className='bg-gray-200 p-8'>
					<div className='container mx-auto'>
						<h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
						<form>
							<div className='mb-4'>
								<label
									className='block text-gray-700 font-semibold mb-2'
									htmlFor='fullName'
								>
									Full Name
								</label>
								<input
									type='text'
									id='fullName'
									className='w-full border border-gray-300 rounded py-2 px-3 text-gray-700'
								/>
							</div>
							<div className='mb-4'>
								<label
									className='block text-gray-700 font-semibold mb-2'
									htmlFor='subject'
								>
									Subject
								</label>
								<input
									type='text'
									id='subject'
									className='w-full border border-gray-300 rounded py-2 px-3 text-gray-700'
								/>
							</div>
							<div className='mb-4'>
								<label
									className='block text-gray-700 font-semibold mb-2'
									htmlFor='email'
								>
									Email
								</label>
								<input
									type='email'
									id='email'
									className='w-full border border-gray-300 rounded py-2 px-3 text-gray-700'
								/>
							</div>
							<div className='mb-4'>
								<label
									className='block text-gray-700 font-semibold mb-2'
									htmlFor='body'
								>
									Body
								</label>
								<textarea
									id='body'
									className='w-full border border-gray-300 rounded py-2 px-3 text-gray-700 h-32 resize-none'
								></textarea>
							</div>
							<button className='bg-blue-500 text-white px-4 py-2 rounded'>
								Send Message
							</button>
						</form>
					</div>
				</section>
			</Layout>
		</div>
	);
};

export default ContactPage;
