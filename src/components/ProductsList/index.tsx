import buttonNextProducts from '../../assets/ButtonsSmartHome/buttonNextProducts.svg';
import { productsApi } from '../../redux/services/GetProducts';
import ProductCard from './Product';
import styles from './ProductsList.module.scss';

const ProductsList = () => {
  const { data: products } = productsApi.useFetchProductsQuery(5);

  return (
    <div className={styles.productsListWrapper}>
      {products &&
        products.map(items => (
          <div key={category} className={styles.categorySection}>
            <img
              src={buttonNextProducts}
              className={styles.buttonNextProducts}
              alt="Next"
            />
            {/* ... other elements ... */}
            <div className={styles.productsContainer}>
              {items.map(product => (
                <ProductCard key={product.id} product={product} /> // Pass individual product
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductsList;
