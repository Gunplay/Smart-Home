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
		<div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
			<div style={{ background: slides[0].url }}></div>
		</div>
	);
};

export default Carousel;
