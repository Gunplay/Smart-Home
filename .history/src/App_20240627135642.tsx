// import { useState } from 'react';

// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import AboutUs from './components/AboutUs';
import Carousel from './components/Carousel';
import Register from './components/Form/Register';
import SignIn from './components/Form/SignIn';
import Header from './components/Header';
import PageNotFound from './components/Page404';
import ProductsList from './components/ProductsList';
import RecommendProducts from './components/RecommendProducts';

function App() {
	return (
		<>
			<Header />
			<Carousel />
			<RecommendProducts />
			<SignIn />
			<Register />
			<PageNotFound />

			<ProductsList />
			<AboutUs />
		</>
	);
}

export default App;
