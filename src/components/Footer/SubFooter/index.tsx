import { FC } from 'react';
import consultation from '../../../assets/iImageSubFooter/consultation.svg';
import delivery from '../../../assets/iImageSubFooter/delivery.svg';
import garanty from '../../../assets/iImageSubFooter/garanty.svg';
import repair from '../../../assets/iImageSubFooter/repair.svg';
import styles from './SubFooter.module.scss';

interface SubFooterItem {
  icon: string;
  text: string;
}

const subFooterItems: SubFooterItem[] = [
  { icon: delivery, text: 'Безкоштовна та швидка доставка' },
  { icon: garanty, text: 'Гарантований обмін та повернення' },
  { icon: consultation, text: 'Швидкі та якісні консультації' },
  { icon: repair, text: 'Можливість замовити налаштування та монтаж' },
];

const SubFooter: FC = () => {
  return (
    <div className={styles.WrapperSubFooter}>
      <div className={styles.SubFooter}>
        {subFooterItems.map(({ icon, text }) => (
          <div key={text} className={styles.SubFooterItem}>
            <img src={icon} alt={text} />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubFooter;
