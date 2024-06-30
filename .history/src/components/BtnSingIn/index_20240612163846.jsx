import { Button } from '@material-tailwind/react';

const BtnSingIn = () => {
	return (
		<Button
			variant='text'
			color='blue'
			onClick={() => console.log('Button clicked')}
		>
			Click Me
		</Button>
	);
};

export default BtnSingIn;
