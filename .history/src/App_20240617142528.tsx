// import { useState } from 'react';

// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import PageNotFound from './components/Page404';
import ProductsList from './components/ProductsList';

import { Carousel } from '@material-tailwind/react';

export function CarouselDefault() {
	return (
		<Carousel
			className='rounded-xl'
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
		>
			<img
				src='https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
				alt='image 1'
				className='h-full w-full object-cover'
			/>
			<img
				src='https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
				alt='image 2'
				className='h-full w-full object-cover'
			/>
			<img
				src='https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80'
				alt='image 3'
				className='h-full w-full object-cover'
			/>
		</Carousel>
	);
}

function App() {
	return (
		<>
			<div className='mr-[3.75rem] pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
				<Header />
				<CarouselDefault />
				<PageNotFound />
			</div>

			<ProductsList />
			<AboutUs />
		</>
	);
}

export default App;
