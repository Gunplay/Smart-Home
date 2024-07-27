import { useState } from 'react';
import styles from './SideMenu.module.scss';

const categories = [
  {
    name: 'Послуги',
    subcategories: [
      {
        name: 'Послуги',
        items: ['В розробці ...'],
      },
    ],
  },
  {
    name: 'Розумні пристрої',
    subcategories: [
      {
        name: 'Освітлювальні прилади',
        items: [
          'Лампи та світильники',
          'Світлодіодні стрічки',
          'Перемикачі та димери',
        ],
      },
      {
        name: 'Безпекові системи',
        items: [
          'Відеокамери',
          'Сигналізації',
          'Датчики руху',
          'Замки та дверні дзвінки',
        ],
      },
      {
        name: 'Аудіо- та відеопристрої',
        items: [
          'Телевізори',
          'Аудіосистеми',
          'Мультимедійні приставки',
          'Проектори та екрани',
        ],
      },
      {
        name: 'Термостати та кліматичні системи',
        items: [
          'Зволожувачі та осушувачі повітря',
          'Термостати',
          'Клімат-контролери',
        ],
      },
      {
        name: 'Побутові прилади',
        items: [
          'Пральні машини та сушарки',
          'Холодильники',
          'Пилососи',
          'Кавоварки',
        ],
      },
    ],
  },
  {
    name: 'Системи автоматизації',
    subcategories: [
      {
        name: 'Системи автоматизації',
        items: ['В розробці ...'],
      },
    ],
  },
  {
    name: 'Аксесуари та компоненти',
    subcategories: [
      {
        name: 'Аксесуари та компоненти',
        items: ['В розробці ...'],
      },
    ],
  },
  {
    name: 'Програмне забезпечення та додатки',
    subcategories: [
      {
        name: 'Програмне забезпечення та додатки',
        items: ['В розробці ...'],
      },
    ],
  },
  {
    name: 'Інше',
    subcategories: [
      {
        name: 'Інше',
        items: ['В розробці ...'],
      },
    ],
  },
];

const SideMenu = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const handleMouseEnter = (category: string) => {
    setActiveCategory(category);
    setIsSubmenuVisible(true);
  };

  const handleMouseLeaveSubmenu = () => {
    setIsSubmenuVisible(false);
    setActiveCategory(null);
  };

  const handleToggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
    setActiveCategory(null);
  };

  return (
    <div className={styles.sideMenuContainer}>
      <div className={styles.menuToggle} onClick={handleToggleMenu}>
        <div className={styles.menuBox}>
          <div className={styles.menuTitle}>Каталог</div>
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
      </div>
      {isMenuVisible && (
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${styles.category} ${
                activeCategory === category.name ? styles.active : ''
              }`}
              onMouseEnter={() => handleMouseEnter(category.name)}
            >
              <span>{category.name}</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#A0A591"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>
      )}
      {isSubmenuVisible && activeCategory && (
        <div
          className={styles.subcategoriesContainer}
          onMouseLeave={handleMouseLeaveSubmenu}
        >
          {categories
            .find(category => category.name === activeCategory)
            ?.subcategories.map((subcategory, subIndex) => (
              <div key={subIndex} className={styles.subcategory}>
                <h4>{subcategory.name}</h4>
                <ul>
                  {subcategory.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SideMenu;
