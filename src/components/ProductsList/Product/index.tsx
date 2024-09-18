import { FC } from 'react';
import { useDispatch } from 'react-redux';
import leftArrow from '../../../assets/arrowsCard/leftArrow.svg';
import rightArrow from '../../../assets/arrowsCard/rightArrow.svg';
import heart from '../../../assets/iconsSmartHome/heart.svg';
import { addCartItem } from '../../../redux/cart/operations';
import { Product } from '../../../redux/products/type';
import { AppDispatch } from '../../../redux/store';

import { nanoid } from 'nanoid';

import styles from './ProductCard.module.scss';


interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const {
    // categories,
    // characteristics,
    images,
    // imageUrl,
    // isAvailable,
    // priceWithDiscount,
    // productCode,
    // productDescription,
    productDiscount,
    productId,
    productName,
    productPrice,
    // productUrl,
    // quantityInStock,
  } = product;

  const dispatch: AppDispatch = useDispatch();
  const getCartId = ():string => {
    const storedCartId = localStorage.getItem('cartId');
    if (storedCartId) {
      return storedCartId;
    }
    const newCartId = nanoid();
    localStorage.setItem('cartId', newCartId);
    // console.log(newCartId);
    return newCartId;
  };

  const currentCartId = getCartId();

  //const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    // setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrl.length);
  };

  const handlePrevImage = () => {
    // setCurrentImageIndex(prevIndex =>
    //   prevIndex === 0 ? imageUrl.length - 1 : prevIndex - 1
    // );
  };

  const handleAddToCart = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    evt.stopPropagation();


    const cartData = {
      id: currentCartId,
      items: [
        {
          productId: productId,
          productName: productName,
          price: productPrice,
          quantity: 1,
          pictureUrl: images[0].imageUrl,
        },
      ],
      deliveryMethodId: 0,
      clientSecret: '',
      paymentIntentId: '',
    };
    console.log('Cart Data', cartData);
    dispatch(addCartItem(cartData));
    // const cartData = {
    //   id: 'cartId123', // Use a proper cart ID here, for now it's hardcoded
    //   items: [
    //     {
    //       productId: productId,
    //       productName: productName,
    //       price: productPrice,
    //       quantity: 1,
    //       pictureUrl: images[0].imageUrl,
    //     },
    //   ],
    // };

    // TODO: //if created or existing product  get or post!  if existing product, you should create body request  with POST

    dispatch(addCartItem({ productId }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.arrowContainer}>
          <button onClick={handlePrevImage}>
            <img src={leftArrow} className={styles.arrowLeft}></img>
          </button>
          <div>
            <img src={heart} className={styles.iconHeart} alt="heart icon" />
            {/* <img
              src={productUrl}
              //     src={imageUrl[currentImageIndex]}
              //alt={'product'}
              className={styles.productImage}
            /> */}
            {images.map(item => {
              return (
                <img
                  key={item.productId}
                  src={item.imageUrl}
                  //     src={imageUrl[currentImageIndex]}
                  //alt={'product'}
                  className={styles.productImage}
                />
              );
            })}
          </div>
          <button onClick={handleNextImage}>
            <img src={rightArrow} className={styles.arrowRight}></img>
          </button>
        </div>
      </div>
      <div className={styles.productName}>
        <h3>{productName.substring(0, 25)}</h3>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.ratingContainer}>
          <span className={styles.rating}>★★★★☆</span>
          <span className={styles.reviews}></span>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.oldPrice}>{productDiscount}</span>
          <span className={styles.newPrice}>{productPrice}</span>
        </div>
      </div>
      <button onClick={ handleAddToCart} className={styles.button}>
        До кошика
      </button>
    </div>
  );
};

export default ProductCard;
