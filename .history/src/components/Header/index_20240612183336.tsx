import Button from '../Button';
export default function Header() {
	return (
		<div className='fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm color'>
			<div className='flex items-center px-5 lg:px-7.5 xl:px10 max-lg:py-4'></div>
			Header
			<Button className='mt-100 bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded'>
				Something
			</Button>
		</div>
	);
}
