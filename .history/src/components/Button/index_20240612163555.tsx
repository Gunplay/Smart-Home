import { Button } from '@material-tailwind/react';

const MyComponent = () => {
	return (
		<Button
			variant='text'
			color='blue' // Пример необходимого пропса
			onClick={() => console.log('Button clicked')} // Пример необходимого обработчика события
		>
			Click Me
		</Button>
	);
};

export default MyComponent;
