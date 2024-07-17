import pixel from '../../assets/productsCardPicture/GooglePixel9Pro16128GBObsidian0.jpg';
import styles from './ProductsList.module.scss';
import ProductCard from './Product';

const products = [
  {
    name: 'Розумний дверний замок Aqara Smart D...',
    images: [pixel, pixel],
    oldPrice: '11 100 ₴',
    newPrice: '9 990 ₴',
    reviews: 115,
  },
  {
    name: 'Розумний дверний замок Aqara Smart D...',
    images: [pixel, pixel],
    oldPrice: '11 100 ₴',
    newPrice: '9 990 ₴',
    reviews: 115,
  },
  {
    name: 'Розумний дверний замок Aqara Smart D...',
    images: [pixel, pixel],
    oldPrice: '11 100 ₴',
    newPrice: '9 990 ₴',
    reviews: 115,
  },
  {
    name: 'Розумний дверний замок Aqara Smart D...',
    images: [pixel, pixel],
    oldPrice: '11 100 ₴',
    newPrice: '9 990 ₴',
    reviews: 115,
  },
];

const ProductsList = () => {
  return (
    <div className={styles.productsListWrapper}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
