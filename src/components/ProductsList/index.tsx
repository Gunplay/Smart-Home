import buttonNextProducts from '../../assets/ButtonsSmartHome/buttonNextProducts.svg';
import { Products } from '../../redux/products/type';
import { productsApi } from '../../redux/services/GetProducts';
import ProductCard from './Product';

import styles from './ProductsList.module.scss';

const ProductsList = () => {
  const {
    data: products,
    error,
    isLoading,
  } = productsApi.useFetchProductsQuery();

  console.log('Fetched Products:', products); // Debugging log

  if (isLoading) {
    console.log('Loading products...');
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error loading products:', error);
    return <div>Error loading products</div>;
  }

  if (!products || products.length === 0) {
    console.log('No products found');
    return <div>No products available</div>;
  }

  return (
    <>
      <div className={styles.ContainerButtonPanel}>
        <div className={styles.buttonNextProducts}>
          <img
            src={buttonNextProducts}
            className={styles.buttonNextProductsImage}
            alt="Next"
          />
        </div>
      </div>
      <div className={styles.productsListWrapper}>
        {products.map((item: Products) => (
          <div key={item.id} className={styles.productsContainer}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
