import Button from '../Button';
export default function Header() {
	return (
		<div className='fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm'>
			<Button className='mt-100 bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded'>
				Something
			</Button>
		</div>
	);
}
