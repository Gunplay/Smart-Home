import { useState } from 'react';
import { TECarousel, TECarouselItem } from 'tw-elements-react';

export default function Carousel(): JSX.Element {
	const [activeSlide, setActiveSlide] = useState(1); // State to track active slide

	// Function to handle slide change when clicking controls
	// const handleSlideChange = (newSlide: number) => {
	// 	setActiveSlide(newSlide);
	// };

	// Function to handle previous slide
	const handlePreviousSlide = () => {
		if (activeSlide === 1) {
			setActiveSlide(3); // Wrap around to last slide
		} else {
			setActiveSlide(activeSlide - 1);
		}
	};

	// Function to handle next slide
	const handleNextSlide = () => {
		if (activeSlide === 3) {
			setActiveSlide(1); // Wrap around to first slide
		} else {
			setActiveSlide(activeSlide + 1);
		}
	};

	return (
		<div className='carousel-container'>
			<TECarousel
				showControls
				showIndicators
				crossfade
				ride='carousel'
				className='w-full md:h-[400px]'
			>
				<TECarouselItem
					itemID={1}
					className={`relative block w-full transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${
						activeSlide === 1 ? '' : 'opacity-0'
					}`}
				>
					<img
						src='https://picsum.photos/200/300' // Replace with your image sources
						className='block w-full h-full object-cover'
						alt='Slide 1'
					/>
				</TECarouselItem>
				<TECarouselItem
					itemID={2}
					className={`relative block w-full transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none opacity-0 ${
						activeSlide === 2 ? '' : 'opacity-0'
					}`}
				>
					<img
						src='https://picsum.photos/200/300?image=100' // Replace with your image sources
						className='block w-full h-full object-cover'
						alt='Slide 2'
					/>
				</TECarouselItem>
				<TECarouselItem
					itemID={3}
					className={`relative block w-full transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none opacity-0 ${
						activeSlide === 3 ? '' : 'opacity-0'
					}`}
				>
					<img
						src='https://picsum.photos/200/300?image=200' // Replace with your image sources
						className='block w-full h-full object-cover'
						alt='Slide 3'
					/>
				</TECarouselItem>
			</TECarousel>

			<div className='controls-container'>
				<button className='prev-btn' onClick={handlePreviousSlide}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='w-6 h-6'
					>
						<path d='M15 12a3 3 0 0 1 0 6l-9 9-3-3 9-9a3 3 0 0 1 0-6z' />
					</svg>
				</button>
				<button className='next-btn' onClick={handleNextSlide}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='w-6 h-6'
					>
						<path d='M9 12a3 3 0 0 0 0 6l9 9-3 3-9-9a3 3 0 0 0 0-6z' />
					</svg>
				</button>
			</div>
		</div>
	);
}
