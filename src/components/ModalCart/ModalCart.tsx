// import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../redux/store';
// import styles from './ModalCart.module.scss';

// interface ModalProps {
//   openCart: boolean;
//   onClose: () => void;
// }

// const ModalCart: React.FC<ModalProps> = ({ openCart, onClose }) => {
//   const { totalPrice } = useSelector((state: RootState) => state.cart); // You had to import instead cartSlice -  .cart from store!!!

//   if (!openCart) return null;

//   return (
//     <div className={styles.overlay} onClick={onClose}>
//       <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
//         <div className={styles.modalHeader}>
//           <h1 className={styles.title}>Кошик</h1>
//           <button onClick={onClose}>
//             <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
//           </button>
//         </div>

//         <div className={styles.cartFooter}>
//           <h3 className={styles.totalPrice}>Підсумок: {totalPrice} &#8372;</h3>
//           <div className={styles.buttons}>
//             <button onClick={onClose} className={styles.continueBtn}>
//               Продовжити покупки
//             </button>
//             <button onClick={onClose} className={styles.orderBtn}>
//               Оформити замовлення
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalCart;

import {
  faMinus,
  faPlus,
  faTrash,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from '../../redux/cart/cartSlice.ts';
import { RootState } from '../../redux/store';
import styles from './ModalCart.module.scss';

interface ModalProps {
  openCart: boolean;
  onClose: () => void;
}

const ModalCart: React.FC<ModalProps> = ({ openCart, onClose }) => {
  const dispatch = useDispatch();
  const { totalPrice, cartItems } = useSelector(
    (state: RootState) => state.cart
  );

  if (!openCart) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h1 className={styles.title}>Кошик</h1>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
          </button>
        </div>

        <div className={styles.cartItems}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img
                src={item.imageURL}
                alt={item.name}
                className={styles.itemImage}
              />
              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <div className={styles.quantityControl}>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <button
                  onClick={() => dispatch(deleteItem(item.id))}
                  className={styles.deleteItem}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <span className={styles.itemPrice}>
                {item.price * item.quantity} &#8372;
              </span>
            </div>
          ))}
        </div>

        <div className={styles.cartFooter}>
          <h3 className={styles.totalPrice}>
            Підсумок: {totalPrice.toFixed(2)} &#8372;
          </h3>
          <div className={styles.buttons}>
            <button onClick={onClose} className={styles.continueBtn}>
              Продовжити покупки
            </button>
            <button onClick={onClose} className={styles.orderBtn}>
              Оформити замовлення
            </button>
            <button
              onClick={() => dispatch(clearCart())}
              className={styles.clearCartBtn}
            >
              Очистити кошик
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
