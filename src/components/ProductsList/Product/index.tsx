import { FC } from 'react';
import leftArrow from '../../../assets/arrowsCard/leftArrow.svg';
import rightArrow from '../../../assets/arrowsCard/rightArrow.svg';
import heart from '../../../assets/iconsSmartHome/heart.svg';
import { Products } from '../../../redux/products/type';
import styles from './ProductCard.module.scss';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/cart/cartSlice';

interface ProductCardProps {
  product: Products;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const {
    id,
    name,
    //description,
    // id,
    imageUrl,
    //internalCode,
    //isAvalible,
    price,
    //quantitty,
  } = product;

  //const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    // setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrl.length);
  };

  const handlePrevImage = () => {
    // setCurrentImageIndex(prevIndex =>
    //   prevIndex === 0 ? imageUrl.length - 1 : prevIndex - 1
    // );
  };

  const handleAddtoCart = () => {
    const cartItem = {
      id,
      name,
      price,
      quantity: 1,
    };
    dispatch(addItem(cartItem));
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
      <div className={styles.productName}>
        <h3>{name.substring(0, 25)}</h3>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.ratingContainer}>
          <span className={styles.rating}>★★★★☆</span>
          <span className={styles.reviews}></span>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.oldPrice}>{price}</span>
          <span className={styles.newPrice}>{price}</span>
        </div>
      </div>
      <div className={styles.button}>
        <button onClick={handleAddtoCart}>До кошика</button>
      </div>
    </div>
  );
};

export default ProductCard;
