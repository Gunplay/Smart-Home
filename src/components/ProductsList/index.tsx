import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import buttonNextProducts from '../../assets/ButtonsSmartHome/buttonNextProducts.svg';
import { fetchProducts } from '../../redux/products/asyncActions';
import { Products } from '../../redux/products/type';
import { useAppSelector } from '../../redux/store';
import ProductCard from './Product';
import styles from './ProductsList.module.scss';

const ProductsList = () => {
  const dispatch = useDispatch();
  const data = useAppSelector(state => state.products.items);

  console.log('prod', data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!Array.isArray(data)) {
    console.error('Data is not an array:', data);
    return <div>Loading...</div>;
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
        {data.map((item: Products) => (
          <div key={item.id} className={styles.productsContainer}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
