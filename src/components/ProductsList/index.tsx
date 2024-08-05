import buttonNextProducts from '../../assets/ButtonsSmartHome/buttonNextProducts.svg';
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

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
        {products?.map(item => (
          <div key={item.id} className={styles.productsContainer}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
