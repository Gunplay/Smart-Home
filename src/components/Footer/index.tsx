import facebook from '../../assets/footerSocialIcons/facebook.svg';
import instagram from '../../assets/footerSocialIcons/instagram.svg';
import telegram from '../../assets/footerSocialIcons/telegram.svg';
import ticTock from '../../assets/footerSocialIcons/ticTock.svg';
import youTube from '../../assets/footerSocialIcons/youTube.svg';
import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <div className={styles.WrapperFooter}>
      <div className={styles.Footer}>
        <div className={`${styles.section} ${styles.Logo}`}>
          <div className={styles.styleCategories}>Logo</div>
          <div className={styles.oneCategory}>Кар’єра</div>
          <div className={styles.oneCategory}>Про компанію</div>
          <div className={styles.oneCategory}>Новини</div>
        </div>
        <div className={`${styles.section} ${styles.Clients}`}>
          <div className={styles.styleCategories}>Клієнтам</div>
          <div className={styles.oneCategory}>Оплата</div>
          <div className={styles.oneCategory}>Доставка</div>
          <div className={styles.oneCategory}>Умови гарантії</div>
          <div className={styles.oneCategory}>Умови повернення</div>
          <div className={styles.oneCategory}>Служба підтримки клієнтів</div>
        </div>
        <div className={`${styles.section} ${styles.Categories}`}>
          <div className={styles.styleCategories}>Категорії</div>
          <div className={styles.oneCategory}>Послуги</div>
          <div className={styles.oneCategory}>Розумні пристрої</div>
          <div className={styles.oneCategory}>Системи автоматизації</div>
          <div className={styles.oneCategory}>Аксесуари та компоненти</div>
          <div className={styles.oneCategory}>
            Програмне забезпечення та додатки
          </div>
          <div className={styles.oneCategory}>Інше</div>
        </div>
        <div className={`${styles.section} ${styles.WrapperOurSecSocialMedia}`}>
          <div className={styles.styleCategories}>Наші соціальні мережі </div>
          <div className={styles.OurSecSocialMedia}>
            <div className="div">
              <img src={facebook} alt="soical medeia" />
            </div>
            <div className="div">
              <img src={instagram} alt="soical medeia" />
            </div>
            <div className="div">
              <img src={telegram} alt="soical medeia" />
            </div>
            <div className="div">
              <img src={ticTock} alt="soical medeia" />
            </div>
            <div className="div">
              <img src={youTube} alt="soical medeia" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
