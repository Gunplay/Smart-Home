import slideOne from '/src/assets/slider-1.jpg';
import slideTwo from '/src/assets/slider-2.jpg';
import slideThree from '/src/assets/slider-3.jpg';

const slides = [
	{
		url: slideOne,
	},
	{
		url: slideTwo,
	},
	{
		url: slideThree,
	},
];
const Carousel = () => {
	return (
		<div className='max-w-[1700px] h-[780px] w-full m-auto py-16 relative'>
			<div
				style={{ backgroundImage: `url(${slides[2].url})` }}
				className='w-full h-full bg-center bg-cover duration-500'
			></div>
		</div>
	);
};

export default Carousel;
