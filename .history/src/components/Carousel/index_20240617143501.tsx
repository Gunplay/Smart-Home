import { useState } from 'react';
import { TECarousel, TECarouselItem } from 'tw-elements-react';

// eslint-disable-next-line react-hooks/rules-of-hooks
const [activeSlide, setActiveSlide] = useState(1); // Initial active slide

export default function Carousel(): JSX.Element {
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
					className={`relative float-left ${
						activeSlide === 1 ? '' : 'hidden'
					} w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
				>
					{/* ... your slide content */}
				</TECarouselItem>
				<TECarouselItem
					itemID={2}
					className={`relative float-left ${
						activeSlide === 2 ? '' : 'hidden'
					} w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
				>
					{/* ... your slide content */}
				</TECarouselItem>
				{/* ... other slides */}
			</TECarousel>
		</>
	);
}
