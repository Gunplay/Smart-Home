import facebook from '../../assets/footerSocialIcons/facebook.svg';
import instagram from '../../assets/footerSocialIcons/instagram.svg';
import telegram from '../../assets/footerSocialIcons/telegram.svg';
import ticTock from '../../assets/footerSocialIcons/ticTock.svg';
import youTube from '../../assets/footerSocialIcons/youTube.svg';
import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <div className={styles.WrapperFooter}>
      <div className={`${styles.section} ${styles.Logo}`}>
        Logo
        <div className="div">Кар’єра</div>
        <div className="div">Про компанію</div>
        <div className="div">Новини</div>
      </div>
      <div className={`${styles.section} ${styles.Clients}`}>
        Клієнтам
        <div className="div">Оплата</div>
        <div className="div">Доставка</div>
        <div className="div">Умови гарантії</div>
        <div className="div">Умови повернення</div>
        <div className="div">Служба підтримки клієнтів</div>
      </div>
      <div className={`${styles.section} ${styles.Categories}`}>
        Категорії
        <div className="div">Послуги</div>
        <div className="div">Розумні пристрої</div>
        <div className="div">Системи автоматизації</div>
        <div className="div">Аксесуари та компоненти</div>
        <div className="div">Програмне забезпечення та додатки</div>
        <div className="div">Інше</div>
      </div>
      <div className={`${styles.section} ${styles.OurSecSocialMedia}`}>
        Наші соціальні мережі{' '}
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
  );
};

export default Footer;
