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
  const {
    data: productsResponse,
    error,
    isLoading,
  } = productsApi.useFetchProductsQuery();

  console.log('productsResponse', productsResponse);
  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  if (!productsResponse || !productsResponse.data) {
    return <div>No products available</div>;
  }

  const products = productsResponse.data;

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
        {products.map((product: Product) => (
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
