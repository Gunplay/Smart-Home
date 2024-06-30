import AboutUs from '../components/AboutUs';
import Carousel from '../components/Carousel';
import AppCart from '../components/Cart';
import Header from '../components/Header';
import ProductsList from '../components/ProductsList';
import RecommendProducts from '../components/RecommendProducts';

function Home() {
	return (
		<>
			<Header />
			<Carousel />
			<RecommendProducts />
			<ProductsList />
			<AboutUs />
			<AppCart />
		</>
	);
}

export default Home;
