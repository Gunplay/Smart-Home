// import AboutUs from '../components/AboutUs';
import AboutUs from '../components/AboutUs';
import Carousel from '../components/Carousel';
import AppCart from '../components/Cart';

import Header from '../components/Header';
import NavigationBar from '../components/NewHeader';
import ProductsList from '../components/ProductsList';
// import ProductsList from '../components/ProductsList';
import RecommendProducts from '../components/RecommendProducts/RecommendProducts';

function Home() {
  return (
    <>
      <NavigationBar />
      {/* <Header /> */}
      <Carousel />
      <RecommendProducts />
      <ProductsList />
      <AboutUs />
      <AppCart />
    </>
  );
}

export default Home;
