// import AboutUs from '../components/AboutUs';

import Carousel from '../components/Carousel';

import Header from '../components/Header/Header';

import Footer from '../components/Footer';
import SubFooter from '../components/Footer/SubFooter';
import NavigationBar from '../components/NewHeader/NavigationBar';
import ProductsList from '../components/ProductsList';

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Header />
      <Carousel />
      <ProductsList />
      <SubFooter />
      <Footer />
    </>
  );
};

export default Home;
