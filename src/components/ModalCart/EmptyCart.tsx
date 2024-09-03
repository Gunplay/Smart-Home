import { faFaceSadCry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.scss';

interface EmptyCartProps {
  onClose: () => void;
}

const EmptyCart: React.FC<EmptyCartProps> = ({ onClose }) => {
  return (
    <>
      <div className={styles.emptyContent}>
        <FontAwesomeIcon icon={faFaceSadCry} className={styles.iconCry} />
        <h3>Твій кошик порожній</h3>
        <h6>Але це ніколи не пізно виправити :)</h6>
        <button className={styles.emptyCartBtn} onClick={onClose}>
          Додати товари
        </button>
      </div>
      <Link to={'/'} className={styles.toDiscountsLink} onClick={onClose}>
        Ознайомтесь з нашими акціями
      </Link>
    </>
  );
};

export default EmptyCart;
