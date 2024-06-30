import React from 'react';
import slideOne from '/src/assets/slider-1.jpg'; // Assuming images are in 'src/assets' folder
import slideTwo from '/src/assets/slider-2.jpg';
import slideThree from '/src/assets/slider-3.jpg';

const Carousel = () => {
	const slides = [{ url: slideOne }, { url: slideTwo }, { url: slideThree }];

	// Choose an initial slide (optional)
	const [currentSlide, setCurrentSlide] = React.useState(1); // Set starting index

	// const handleSlideChange = (index) => {
	//   setCurrentSlide(index);
	// };

	return (
		<div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
			{/* Display the current slide image */}
			<div
				style={{
					backgroundImage: `url(${slides[currentSlide].url})`, // Use string interpolation for dynamic URLs
					width: '100%', // Optional: Set explicit width for responsiveness
					height: '100%', // Optional: Set explicit height for responsiveness
					backgroundSize: 'cover', // Ensure image covers the container
					backgroundPosition: 'center', // Center the image within the container
					borderRadius: '2xl', // Optional: Rounded corners
					transition: 'background-image 0.5s ease-in-out', // Optional: Add a smooth transition
				}}
				className='duration-500' // Optional: Remove if not needed for other animations
			/>

			{/* Add navigation controls here if desired (optional) */}
			{/* You can use buttons or other elements to call handleSlideChange() */}
		</div>
	);
};

export default Carousel;
