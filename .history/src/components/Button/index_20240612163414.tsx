import { Button } from '@material-tailwind/react';

export function BtnSingIn() {
	return (
		<div className='flex w-max gap-4'>
			<Button variant='filled'>filled</Button>
			<Button variant='gradient'>gradient</Button>
			<Button variant='outlined'>outlined</Button>
			<Button variant='text'>Sing In</Button>
		</div>
	);
}
