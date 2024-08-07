//import { useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import buttonNextProducts from '../../assets/ButtonsSmartHome/buttonNextProducts.svg';
//import { fetchProducts } from '../../redux/products/asyncActions';
import { Products } from '../../redux/products/type';
//import { AppDispatch } from '../../redux/store';
import { productsApi } from '../../redux/services/GetProducts';
import ProductCard from './Product';
import styles from './ProductsList.module.scss';
const ProductsList = () => {
  //const dispatch = useAppDispatch()

  //const dispatch = useDispatch<AppDispatch>();
  // const products = useSelector(
  //   (state: { products: { items: Products } }) => state.products.items
  // );
  const { data: products } = productsApi.useFetchProductsQuery(
    'https://dev.smarthome-team.store'
  );
  console.log('products', products);
  //console.log('productsRTK', products);
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

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
        {products?.map((item: Products) => (
          <div key={item.id} className={styles.productsContainer}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
