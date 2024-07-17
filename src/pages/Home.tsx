// import AboutUs from '../components/AboutUs';
import AboutUs from '../components/AboutUs';
import Carousel from '../components/Carousel';

import Header from '../components/Header';
import Menu from '../components/Menu/menu';

import NavigationBar from '../components/NewHeader';
import ProductsList from '../components/ProductsList';
// import ProductsList from '../components/ProductsList';

function Home() {
  return (
    <>
      <NavigationBar />
      <Header />
      <Menu />
      <Carousel />
      {/* <RecommendProducts /> */}
      <ProductsList />
      <AboutUs />
      {/* <AppCart /> */}
    </>
  );
}

export default Home;
