import React, { useState } from 'react';
import styles from './dropdownMenu.module.scss'

interface DropdownMenuProps {
  title: string;
  items: string[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.dropdown_button}>
        {title}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 20H20M4 12H20M4 4H20"
            stroke="#A0A591"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {isOpen && (
        <div className={styles.dropdown_content}>
          {items.map((item, index) => (
            <div className={styles.dropdown_gap}>
              <a key={index} href="#">
                {item}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
