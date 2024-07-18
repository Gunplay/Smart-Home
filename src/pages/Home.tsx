// import AboutUs from '../components/AboutUs';
import AboutUs from '../components/AboutUs';
import Carousel from '../components/Carousel';

import Header from '../components/Header';

import NavigationBar from '../components/NewHeader';
import ProductsList from '../components/ProductsList';

function Home() {
  return (
    <>
      <NavigationBar />
      <Header />

      <Carousel />
      <ProductsList />
      {/* <RecommendProducts /> */}

      <AboutUs />
      {/* <AppCart /> */}
    </>
  );
}

export default Home;
