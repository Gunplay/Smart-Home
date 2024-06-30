import { useState } from 'react';
import { TECarousel, TECarouselItem } from 'tw-elements-react';
import slider from '/src/assets/slider-1.jpg';
export default function Carousel(): JSX.Element {
	const [activeSlide, setActiveSlide] = useState(1); // Initial active slide

	const handleSlideChange = (newSlide: number) => {
		setActiveSlide(newSlide);
	};

	return (
		<>
			<TECarousel
				showControls
				showIndicators
				ride='carousel'
				onSlideChange={handleSlideChange}
			>
				<TECarouselItem
					itemID={1}
					className={`relative block w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
						activeSlide === 1 ? '' : 'hidden'
					}`}
				>
					{' '}
					{/* Show active slide, hide others */}
					<img
						src={slider}
						className='block w-full h-full object-cover'
						alt='...'
					/>
					<div className='absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block'>
						<h5 className='text-xl'>First slide label</h5>
						<p>Some representative placeholder content for the first slide.</p>
					</div>
				</TECarouselItem>
				<TECarouselItem
					itemID={2}
					className={`relative block w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
						activeSlide === 2 ? '' : 'hidden'
					}`}
				>
					<img
						src='https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg'
						className='block w-full h-full object-cover'
						alt='...'
					/>
					<div className='absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block'>
						<h5 className='text-xl'>Second slide label</h5>
						<p>Some representative placeholder content for the second slide.</p>
					</div>
				</TECarouselItem>
				{/* Add more slides with similar conditional classes */}
			</TECarousel>
		</>
	);
}
