import { FaRegFaceSadCry } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.scss';

interface EmptyCartProps {
  onClose: () => void;
}

const EmptyCart: React.FC<EmptyCartProps> = ({ onClose }) => {
  return (
    <>
      <div className={styles.emptyContent}>
        <FaRegFaceSadCry className={styles.iconCry}/>
        <h3>Твій кошик порожній</h3>
        <h6>Але це ніколи не пізно виправити :)</h6>
        <button className={styles.emptyCartBtn} onClick={onClose}>
          Додати товари
        </button>
      </div>
      <button className={styles.toDiscountsLink} onClick={onClose}>
        <Link to={'/'}> Ознайомтесь з нашими акціями </Link>
      </button>
    </>
  );
};

export default EmptyCart;
