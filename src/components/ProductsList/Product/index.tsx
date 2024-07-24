import { FC, useState } from 'react';
import leftArrow from '../../../assets/arrowsCard/leftArrow.svg';
import rightArrow from '../../../assets/arrowsCard/rightArrow.svg';
import heart from '../../../assets/iconsSmartHome/heart.svg';
import styles from './ProductCard.module.scss';
interface Product {
  name: string;
  images: string[];
  oldPrice: string;
  newPrice: string;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
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
              src={product.images[currentImageIndex]}
              alt={product.name}
              className={styles.productImage}
            />
          </div>
          <button onClick={handleNextImage}>
            <img src={rightArrow} className={styles.arrowRight}></img>
          </button>
        </div>
      </div>
      <h3 className={styles.productName}>{product.name}</h3>
      <div className={styles.gridContainer}>
        <div className={styles.ratingContainer}>
          {/* Добавьте столько звезд, сколько нужно */}
          <span className={styles.rating}>★★★★☆</span>
          <span className={styles.reviews}></span>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.oldPrice}>{product.oldPrice}</span>
          <span className={styles.newPrice}>{product.newPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
