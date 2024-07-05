// import AboutUs from '../components/AboutUs';
import { AboutUs } from '.';
import Carousel from '../components/Carousel';

import Header from '../components/Header';
import ProductsList from '../components/ProductsList';
// import ProductsList from '../components/ProductsList';
import RecommendProducts from '../components/RecommendProducts/RecommendProducts';

function Home() {
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

export default Home;
