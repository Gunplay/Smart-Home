// import AboutUs from '../components/AboutUs';

import Carousel from '../components/Carousel';

import Header from '../components/Header/Header';

import NavigationBar from '../components/NewHeader/NavigationBar';
import ProductsList from '../components/ProductsList';
import SubFooter from '../components/SubFooter';

function Home() {
  return (
    <>
      <NavigationBar />
      <Header />

      <Carousel />
      <ProductsList />
      {/* <RecommendProducts /> */}
      <SubFooter />
      {/* <AboutUs /> */}
      {/* <AppCart /> */}
    </>
  );
}

export default Home;
