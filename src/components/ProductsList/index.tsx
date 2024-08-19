//import { useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import buttonNextProducts from '../../assets/ButtonsSmartHome/buttonNextProducts.svg';
//import { fetchProducts } from '../../redux/products/asyncActions';
import { Product } from '../../redux/products/type';
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

  const {
    data: products = [],
    error,
    isLoading,
  } = productsApi.useFetchProductsQuery();

  const productsItem = products?.data;

  // let resultData: Product[] = [];
  // if ('result' in products) {
  //   resultData = products?.data;
  // } else {
  //   console.log("Doesn't result field in the object");
  // }

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }
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
        {productsItem.map((product: Product) => (
          <Link
            to={`/product-page/${product.productId}`}
            key={product.productId}
          >
            <div className={styles.productsContainer}>
              <ProductCard product={product} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
