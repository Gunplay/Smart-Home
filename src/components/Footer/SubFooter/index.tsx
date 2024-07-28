import styles from './SubFooter.module.scss';
import delivery from '../../../assets/iImageSubFooter/delivery.svg';
import consultation from '../../../assets/iImageSubFooter/consultation.svg';
import garanty from '../../../assets/iImageSubFooter/garanty.svg';
import repair from '../../../assets/iImageSubFooter/repair.svg';

const SubFooter = () => {
  return (
    <div className={styles.WrapperFooter}>
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <img src={delivery} alt="Delivery Icon" />
          <p>Безкоштовна та швидка доставка</p>
        </div>
        <div className={styles.footerItem}>
          <img src={garanty} alt="Warranty Icon" />
          <p>Гарантований обмін та повернення</p>
        </div>
        <div className={styles.footerItem}>
          <img src={consultation} alt="Consultation Icon" />
          <p>Швидкі та якісні консультації</p>
        </div>
        <div className={styles.footerItem}>
          <img src={repair} alt="Setup Icon" />
          <p>Можливість замовити налаштування та монтаж</p>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
