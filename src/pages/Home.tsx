// import AboutUs from '../components/AboutUs';

import Carousel from '../components/Carousel';

import Header from '../components/Header/Header';

import Footer from '../components/Footer';
import SubFooter from '../components/Footer/SubFooter';
import NavigationBar from '../components/NewHeader/NavigationBar';
import ProductsList from '../components/ProductsList';

function Home() {
  return (
    <>
      <NavigationBar />
      <Header />

      <Carousel />
      <ProductsList />
      {/* <RecommendProducts /> */}
      <SubFooter />
      <Footer />
      {/* <AboutUs /> */}
      {/* <AppCart /> */}
    </>
  );
}

export default Home;
