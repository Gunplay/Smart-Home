import Button from '../Button';
export default function Header() {
	return (
		<>
			<div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
				<Button className='mt-10 bg-black' href='#login'>
					Something
				</Button>
			</div>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
		</>
	);
}
