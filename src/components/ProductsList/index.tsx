import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import buttonNextProducts from '../../assets/ButtonsSmartHome/buttonNextProducts.svg';
import { fetchProducts } from '../../redux/products/asyncActions';
import { Products } from '../../redux/products/type';
import { useAppSelector } from '../../redux/store';
import ProductCard from './Product';
import styles from './ProductsList.module.scss';
const ProductsList = () => {
  //const dispatch = useAppDispatch()

  const dispatch = useDispatch();
  const { data: products, status } = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Failed to load products</div>;
  }
  // const {
  //   data: products,
  //   error,
  //   isLoading,
  // } = productsApi.useFetchProductsQuery();

  // console.log('Fetched Products:', data); // Debugging log

  // if (isLoading) {
  //   console.log('Loading products...');
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   console.error('Error loading products:', error);
  //   return <div>Error loading products</div>;
  // }

  // if (!products || products.length === 0) {
  //   console.log('No products found');
  //   return <div>No products available</div>;
  // }

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
