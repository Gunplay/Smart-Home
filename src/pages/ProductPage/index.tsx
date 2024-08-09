import { useParams } from 'react-router-dom';
import { productsApi } from '../../redux/services/GetProducts';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const { id } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = productsApi.useFetchProductByIdQuery(id || '');
  console.log('product', product);
  if (isLoading) {
    return <div>Loading product...</div>;
  }

  if (error) {
    return <div>Error loading product</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.Container}>
      <div className={styles.WrapperProductPage}>
        <div className={styles.ProductImage}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={styles.MainImage}
          />
        </div>
        <div className={styles.ProductDetails}>
          <h1 className={styles.ProductName}>{product.name}</h1>
          <p className={styles.ProductDescription}>{product.description}</p>
        </div>
      </div>
      <div className={styles.SubImageWrapper}>
        <div className={styles.WrapperSubImage}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={styles.SubImage}
          />
        </div>
        <div className={styles.WrapperSubImage}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={styles.SubImage}
          />
        </div>
        <div className={styles.WrapperSubImage}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={styles.SubImage}
          />
        </div>
        <div className={styles.WrapperSubImage}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={styles.SubImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
