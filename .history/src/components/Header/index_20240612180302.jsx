import Button from '../Button';
export default function Header() {
	return (
		<>
			<div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
				<Button>Something</Button>
			</div>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
		</>
	);
}
