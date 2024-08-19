import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NewHeader/NavigationBar';
import { productsApi } from '../../redux/services/GetProducts';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const { id } = useParams();
  const {
    data: productResponse,
    error,
    isLoading,
  } = productsApi.useFetchProductByIdQuery(id || '');

  if (isLoading) {
    return <div>Loading product...</div>;
  }

  if (error) {
    return <div>Error loading product</div>;
  }

  if (!productResponse || !productResponse.data) {
    return <div>Product not found</div>;
  }

  const product = productResponse.data;
  console.log('resProduct', product);
  const {
    productName,
    productDescription,
    productPrice,
    priceWithDiscount,
    images,
    categories,
    characteristics,
    isAvailable,
    productCode,
    productDiscount,
    quantityInStock,
  } = product;

  return (
    <>
      <NavigationBar />
      <Header />
      <div className={styles.Container}>
        <div className={styles.WrapperProductPage}>
          <div className={styles.ProductImage}>
            {/* Main Image */}
            {images && images.length > 0 && (
              <img
                src={images[0].imageUrl}
                alt={productName}
                className={styles.MainImage}
              />
            )}
          </div>
          <div className={styles.ProductDetails}>
            <div className={styles.wrapperBoard}>
              <h1 className={styles.ProductName}>{productName}</h1>
              <div className={styles.wrapperOption}>
                <div className={styles.Availability}>
                  {isAvailable ? 'Є в наявності' : 'немає в наявності'}
                </div>
                <span className={styles.rating}>★★★★☆</span>
                <div className={styles.Code}>Продукт код: {productCode}</div>
              </div>
            </div>
            <div className={styles.Stock}>Кількість: {quantityInStock}</div>
            <div className={styles.Price}>
              {productDiscount ? (
                <>
                  <span className={styles.OldPrice}>{productPrice}</span>
                  <span className={styles.NewPrice}>{priceWithDiscount}</span>
                </>
              ) : (
                <span className={styles.NewPrice}>{`${productPrice} ₴`}</span>
              )}
            </div>
          </div>
        </div>

        {/* Sub Images */}
        <div className={styles.SubImageWrapper}>
          {images &&
            images.slice(1, 5).map((image, index) => (
              <div className={styles.WrapperSubImage} key={index}>
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className={styles.SubImage}
                />
              </div>
            ))}
        </div>

        {/* Characteristics and Categories */}
        <div className={styles.Characteristics}>
          <h3>Characteristics:</h3>
          <ul>
            {characteristics.map(char => (
              <li key={char.characteristicId}>
                <strong>{char.productCharacteristicName}:</strong>{' '}
                {char.productCharacteristicDescription}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.Categories}>
          <h3>Categories:</h3>
          <ul>
            {categories.map(category => (
              <li key={category.categoryId}>{category.categoryName}</li>
            ))}
          </ul>
        </div>
        <p className={styles.ProductDescription}>{productDescription}</p>
      </div>
    </>
  );
};

export default ProductPage;
