// import { useState } from 'react';

// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import AboutUs from './components/AboutUs';
import Carousel from './components/Carousel';
import Header from './components/Header';
import PageNotFound from './components/Page404';
import ProductsList from './components/ProductsList';

function App() {
	return (
		<>
			<div className='mr-[3.75rem] pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
				<Header />
				<Carousel />
			</div>
			<PageNotFound />

			<ProductsList />
			<AboutUs />
		</>
	);
}

export default App;
