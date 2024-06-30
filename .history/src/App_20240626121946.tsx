// import { useState } from 'react';

// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import AboutUs from './components/AboutUs';
import Carousel from './components/Carousel';
import Header from './components/Header';
import PageNotFound from './components/Page404';
import ProductsList from './components/ProductsList';
import RecommendProducts from './components/RecommendProducts';

function App() {
	return (
		<>
			<Carousel />
			<Header />
			<RecommendProducts />

			<PageNotFound />

			<ProductsList />
			<AboutUs />
		</>
	);
}

export default App;
