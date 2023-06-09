import Layout from '../components/Layout';

const ContactPage = () => {
	const handleFormSubmit = (event) => {
		const [formData, setFormData] = useState({
			fullName: '',
			subject: '',
			email: '',
			body: '',
		});

		event.preventDefault();
		console.log(formData);
	};
	return (
		<Layout>
			<div className='container mx-auto py-8'>
				<h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
				<form onSubmit={handleFormSubmit}>
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
							name='fullName'
							className='w-full border border-gray-300 rounded py-2 px-3 text-gray-700'
							minLength='3'
							required
						/>
						<div className='text-red-500'>
							<span>*</span> Required field
						</div>
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
							name='subject'
							className='w-full border border-gray-300 rounded py-2 px-3 text-gray-700'
							minLength='3'
							required
						/>
						<div className='text-red-500'>
							<span>*</span> Required field
						</div>
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
							name='email'
							className='w-full border border-gray-300 rounded py-2 px-3 text-gray-700'
							required
						/>
						<div className='text-red-500'>
							<span>*</span> Required field
						</div>
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
							name='body'
							className='w-full border border-gray-300 rounded py-2 px-3 text-gray-700 h-32 resize-none'
							minLength='3'
							required
						></textarea>
						<div className='text-red-500'>
							<span>*</span> Required field
						</div>
					</div>
					<button
						className='bg-blue-500 text-white px-4 py-2 rounded'
						type='submit'
					>
						Submit
					</button>
				</form>
			</div>
		</Layout>
	);
};

export default ContactPage;
