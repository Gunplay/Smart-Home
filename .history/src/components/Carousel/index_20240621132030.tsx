import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import slideOne from '/src/assets/slider-1.jpg';
import slideTwo from '/src/assets/slider-2.jpg';
import slideThree from '/src/assets/slider-3.jpg';
import { useState } from 'react';
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
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div className='max-w-[1600px] h-[780px] w-full m-auto py-16 relative group'>
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className='w-full h-full bg-center bg-cover duration-500'
			></div>
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactLeft size={30} />
			</div>
			<div className='hidden group-hover:block absolute top-[50%] translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactRight size={30} />
			</div>
		</div>
	);
};

export default Carousel;
