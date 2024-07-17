// import AboutUs from '../components/AboutUs';
import AboutUs from '../components/AboutUs';
import Carousel from '../components/Carousel';

import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

import NavigationBar from '../components/NewHeader';
import ProductsList from '../components/ProductsList';
// import ProductsList from '../components/ProductsList';

function Home() {
  return (
    <>
      <NavigationBar />
      <Header />

      <Carousel />
      <ProductsList />
      {/* <RecommendProducts /> */}
      <ProductsList />
      <AboutUs />
      {/* <AppCart /> */}
    </>
  );
}

export default Home;
