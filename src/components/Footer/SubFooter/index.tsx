import styles from './SubFooter.module.scss';
import delivery from '../../../assets/iImageSubFooter/delivery.svg';
import consultation from '../../../assets/iImageSubFooter/consultation.svg';
import garanty from '../../../assets/iImageSubFooter/garanty.svg';
import repair from '../../../assets/iImageSubFooter/repair.svg';

const SubFooter = () => {
  return (
    <div className={styles.WrapperSubFooter}>
      <div className={styles.SubFooter}>
        <div className={styles.SubFooterItem}>
          <img src={delivery} alt="Delivery Icon" />
          <p>Безкоштовна та швидка доставка</p>
        </div>
        <div className={styles.SubFooterItem}>
          <img src={garanty} alt="Warranty Icon" />
          <p>Гарантований обмін та повернення</p>
        </div>
        <div className={styles.SubFooterItem}>
          <img src={consultation} alt="Consultation Icon" />
          <p>Швидкі та якісні консультації</p>
        </div>
        <div className={styles.SubFooterItem}>
          <img src={repair} alt="Setup Icon" />
          <p>Можливість замовити налаштування та монтаж</p>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
