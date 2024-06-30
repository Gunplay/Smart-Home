const Button = () => {
	return (
		<button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md flex items-center'>
			<svg
				className='w-4 h-4 mr-2'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
			>
				<path d='M9 11l-4 4 4 4M19 12l-4-4 4-4' />
			</svg>
			Войти
		</button>
	);
};

export default Button;
