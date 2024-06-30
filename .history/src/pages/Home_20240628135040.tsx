import AboutUs from './components/AboutUs';
import Carousel from './components/Carousel';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import RecommendProducts from './components/RecommendProducts';

function App() {
	return (
		<>
			<Header />
			<Carousel />
			<RecommendProducts />
			<ProductsList />
			<AboutUs />
		</>
	);
}

export default App;
