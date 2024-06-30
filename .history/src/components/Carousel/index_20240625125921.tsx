import { SetStateAction, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import slideOne from '/src/assets/slider-1.jpg';
import slideTwo from '/src/assets/slider-2.jpg';
import slideThree from '/src/assets/slider-3.jpg';
const slides = [
	{
		url: slideOne,
		id: 0,
	},
	{
		url: slideTwo,
		id: 1,
	},
	{
		url: slideThree,
		id: 2,
	},
];
const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex: SetStateAction<number>) => {
		console.log(slideIndex);
		setCurrentIndex(slideIndex);
	};
	return (
		<div className='h-[780px] w-full m-auto py-4 relative group'>
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className='w-full h-full bg-center bg-cover duration-500'
			></div>
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactLeft size={30} onClick={prevSlide} />
			</div>
			<div className='hidden group-hover:block absolute top-[50%] translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactRight size={30} onClick={nextSlide} />
			</div>
			<div className='flex bottom-4 justify-center py-2'>
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						className='text-2xl cursor-pointer'
						onClick={() => goToSlide(slideIndex)}
					>
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
