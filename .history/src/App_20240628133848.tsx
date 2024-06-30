import AboutUs from './components/AboutUs';
import Carousel from './components/Carousel';
import Register from './components/Form/Register';
import SignIn from './components/Form/SignIn';
import Header from './components/Header';
import PageNotFound from './components/Page404';
import ProductsList from './components/ProductsList';
import RecommendProducts from './components/RecommendProducts';
import Router from './components/Router/Router';

function App() {
	return (
		<>
			<Router
				routes={[
					{ path: '/', component: Home },
					{ path: '/about', component: AboutUs },
					{ path: '/sign-in', component: SignIn },
					{ path: '/register', component: Register },
				]}
			/>
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
