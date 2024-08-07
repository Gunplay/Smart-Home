import styles from './ProductPage.module.scss';
const ProductPage = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.WrapperProductPage}>
        <div>Product Image</div>
        <div>Product Option</div>
      </div>
    </div>
  );
};

export default ProductPage;
