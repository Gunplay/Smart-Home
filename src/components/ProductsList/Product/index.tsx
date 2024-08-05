import { FC } from 'react';
import leftArrow from '../../../assets/arrowsCard/leftArrow.svg';
import rightArrow from '../../../assets/arrowsCard/rightArrow.svg';
import heart from '../../../assets/iconsSmartHome/heart.svg';
import styles from './ProductCard.module.scss';
import { Products } from '../../../redux/products/type';

interface ProductCardProps {
  product: Products;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const {
    name,
    //description,
    // id,
    imageUrl,
    //internalCode,
    //isAvalible,
    price,
    //quantitty,
  } = product;

  console.log('prod', product);
  //const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    // setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrl.length);
  };

  const handlePrevImage = () => {
    // setCurrentImageIndex(prevIndex =>
    //   prevIndex === 0 ? imageUrl.length - 1 : prevIndex - 1
    // );
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.arrowContainer}>
          <button onClick={handlePrevImage}>
            <img src={leftArrow} className={styles.arrowLeft}></img>
          </button>
          <div>
            <img src={heart} className={styles.iconHeart} alt="heart icon" />
            <img
              src={imageUrl}
              //     src={imageUrl[currentImageIndex]}
              //alt={'product'}
              className={styles.productImage}
            />
          </div>
          <button onClick={handleNextImage}>
            <img src={rightArrow} className={styles.arrowRight}></img>
          </button>
        </div>
      </div>
      <h3 className={styles.productName}>{name.substring(0, 25)}</h3>
      <div className={styles.gridContainer}>
        <div className={styles.ratingContainer}>
<<<<<<< HEAD
=======
       
>>>>>>> 28ad562b774232979423d216cfce9e3c9bc7c528
          <span className={styles.rating}>★★★★☆</span>
          <span className={styles.reviews}></span>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.oldPrice}>{price}</span>
          <span className={styles.newPrice}>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
