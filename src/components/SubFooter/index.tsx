import styles from './SubFooter.module.scss';

const SubFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <img src="/path-to-your-icon-1.svg" alt="Delivery Icon" />
        <p>Безкоштовна та швидка доставка</p>
      </div>
      <div className={styles.footerItem}>
        <img src="/path-to-your-icon-2.svg" alt="Warranty Icon" />
        <p>Гарантований обмін та повернення</p>
      </div>
      <div className={styles.footerItem}>
        <img src="/path-to-your-icon-3.svg" alt="Consultation Icon" />
        <p>Швидкі та якісні консультації</p>
      </div>
      <div className={styles.footerItem}>
        <img src="/path-to-your-icon-4.svg" alt="Setup Icon" />
        <p>Можливість замовити налаштування та монтаж</p>
      </div>
    </div>
  );
};

export default SubFooter;
