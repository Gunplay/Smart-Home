import { FC, useState } from 'react';
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
        <button className={styles.arrowLeft} onClick={handlePrevImage}>
          &lt;
        </button>
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className={styles.productImage}
        />
        <button className={styles.arrowRight} onClick={handleNextImage}>
          &gt;
        </button>
      </div>
      <h3 className={styles.productName}>{product.name}</h3>
      <div className={styles.priceContainer}>
        <span className={styles.oldPrice}>{product.oldPrice}</span>
        <span className={styles.newPrice}>{product.newPrice}</span>
      </div>
      <div className={styles.ratingContainer}>
        <span className={styles.rating}>★★★★☆</span>
        <span className={styles.reviews}>{product.reviews}</span>
      </div>
    </div>
  );
};

export default ProductCard;
