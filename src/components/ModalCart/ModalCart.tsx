import {
  faMinus,
  faPlus,
  faTrashCan,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from '../../redux/cart/cartSlice.ts';
import { RootState } from '../../redux/store';
import styles from './ModalCart.module.scss';
import EmptyCart from './EmptyCart.tsx';

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
        {cartItems.length ? (
          <>
            <div className={styles.cartItems}>
              {cartItems.map(item => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemWrap}>
                    <img
                      src={item.imageURL}
                      alt={item.name}
                      className={styles.itemImage}
                    />
                    <div className={styles.itemDetails}>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      <button
                        onClick={() => dispatch(deleteItem(item.id))}
                        className={styles.deleteItem}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                      <div className={styles.quantityControl}>
                        <button
                          className={styles.quantityBtn}
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className={styles.quantityBtn}
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <span className={styles.itemPrice}>
                          {item.price * item.quantity} &#8372;
                        </span>
                      </div>
                    </div>
                  </div>
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
              </div>
            </div>
          </>
        ) : (
          <EmptyCart onClose={onClose} />
        )}
      </div>
    </div>
  );
};

export default ModalCart;
