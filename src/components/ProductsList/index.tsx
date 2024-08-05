import buttonNextProducts from '../../assets/ButtonsSmartHome/buttonNextProducts.svg';
import { productsApi } from '../../redux/services/GetProducts';
import ProductCard from './Product';
import styles from './ProductsList.module.scss';

const ProductsList = () => {
  const { data: products } = productsApi.useFetchProductsQuery(5);

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
        {products &&
          products.map(item => (
            // <div className={styles.categorySection}>
            //   </div>
            <div className={styles.productsContainer}>
              <ProductCard product={item} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductsList;
