import AboutUs from '../components/AboutUs';
import Carousel from '../components/Carousel';
import Register from '../components/Form/Register';
import SignIn from '../components/Form/SignIn';

import Header from '../components/Header';
import ProductsList from '../components/ProductsList';
import RecommendProducts from '../components/RecommendProducts';

function Home() {
	return (
		<>
			<Header />
			{/* <Register /> */}
			<SignIn />
			<Carousel />
			<RecommendProducts />
			<ProductsList />
			<AboutUs />
		</>
	);
}

export default Home;
