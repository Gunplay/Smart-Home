import styles from './ModalCart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface ModalProps {
  openCart: boolean;
  onClose: () => void;
}

const ModalCart: React.FC<ModalProps> = ({ openCart, onClose }) => {
  if (!openCart) return null;
  const { totalPrice } = useSelector(
    (state: RootState) => state.cartReducer
  );

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h1 className={styles.title}>Кошик</h1>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.cartFooter}>
          <h3 className={styles.totalPrice}>Підсумок: {totalPrice} &#8372;</h3>
          <div className={styles.buttons}>
            <button onClick={onClose} className={styles.continueBtn}>
              Продовжити покупки
            </button>
            <button onClick={onClose} className={styles.orderBtn}>
              Оформити замовлення
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
