import { useState } from 'react';
import styles from './AdditionalOptions.module.scss';
import { RiArrowDownSLine } from 'react-icons/ri';

export function AdditionalOptions() {
  const [isOpen, setIsOpen] = useState(false);
  // const [checkedItems, setCheckedItems] = useState({
  //   option1: false,
  //   option2: false,
  //   option3: false,
  // });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const handleCheckboxChange = (event) => {
  //   setCheckedItems({
  //     ...checkedItems,
  //     [event.target.name]: event.target.checked,
  //   });
  // };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropBtn} onClick={toggleDropdown}>
        Додаткові послуги(3)
        <RiArrowDownSLine
          className={`${styles.iconArrow} ${isOpen ? styles.rotate : ''}`}
        />
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <label>
            <input type="checkbox" />
            Сервіси гарантії
            <RiArrowDownSLine className={styles.iconArrow} />
          </label>
          <label>
            <input type="checkbox" />
            Сервіси не гарантійних випадків
            <RiArrowDownSLine className={styles.iconArrow} />
          </label>
          <label>
            <input type="checkbox" />
            Сервіс встановлення
            <RiArrowDownSLine className={styles.iconArrow} />
          </label>
        </div>
      )}
    </div>
  );
}
