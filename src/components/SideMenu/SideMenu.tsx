import { useState } from 'react';
import styles from './SideMenu.module.scss';

const categories = [
  {
    name: 'Послуги',
    subcategories: [
      {
        name: 'Послуги встановлення',
        items: [
          'Встановлення розумного освітлення',
          'Встановлення розумних термостатів',
          'Встановлення безпекових систем',
        ],
      },
      {
        name: 'Технічне обслуговування',
        items: ['Діагностика та ремонт', 'Оновлення програмного забезпечення'],
      },
      {
        name: 'Консультації та проектування',
        items: [
          'Проектування систем розумного дому',
          'Консультації по вибору обладнання',
        ],
      },
      {
        name: 'Навчання та підтримка',
        items: ['Навчання користуванню системою', 'Технічна підтримка 24/7'],
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
        name: 'Термостати та кліматичні системи',
        items: [
          'Зволожувачі та осушувачі повітря',
          'Термостати',
          'Клімат-контролери',
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
        name: 'Побутові прилади',
        items: [
          'Пральні машини та сушарки',
          'Холодильники',
          'Пилососи',
          'Кавоварки',
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
    ],
  },
  {
    name: 'Системи автоматизації',
    subcategories: [
      {
        name: 'Центральні хаби та контролери',
        items: ['Хаби', 'Контролери'],
      },
      {
        name: 'Системи безпеки та моніторингу',
        items: [
          'Центральні панелі управління',
          'Датчики витоку води, газу',
          'Датчики відкриття дверей та вікон',
        ],
      },
      {
        name: 'Системи управління освітленням',
        items: [
          'Сценарії та таймери',
          'Датчики освітлення',
          'Датчики руху',
          'Замки та дверні дзвінки',
        ],
      },
      {
        name: 'Енергоефективність та управління',
        items: [
          'Системи управління енергією',
          'Інтелектуальні розетки та подовжувачі',
        ],
      },
      {
        name: 'Розумні системи для саду та двору',
        items: ['Системи поливу', 'Датчики вологості та погодні станції'],
      },
    ],
  },
  {
    name: 'Аксесуари та компоненти',
    subcategories: [
      {
        name: 'Кабелі та адаптери',
        items: ['USB кабелі', 'Адаптери живлення'],
      },
      {
        name: 'Розподільні панелі та комутатори',
        items: ['Ethernet комутатори', 'Розподільні коробки'],
      },
      {
        name: 'Кріплення та стійки',
        items: [
          'Кріплення для телевізорів',
          'Полиці для аудіо- та відеопристроїв',
        ],
      },
      {
        name: 'Батареї та акумулятори',
        items: ['Перезаряджувані батареї', 'Акумулятори для камер'],
      },
    ],
  },
  {
    name: 'Програмне забезпечення та додатки',
    subcategories: [
      {
        name: 'Додатки для управління',
        items: ['Мобільні додатки', 'Веб-додатки'],
      },
      {
        name: 'Оновлення та безпека',
        items: ['Оновлення прошивки, Захист даних'],
      },
      {
        name: 'Інтеграції з іншими системами',
        items: [
          'Інтеграція з голосовими асистентами (Alexa, Google Home)',
          'Інтеграція з розумними колонками',
        ],
      },
    ],
  },
  {
    name: 'Інше',
    subcategories: [
      {
        name: 'Іграшки та гаджети',
        items: ['Дрони', 'Роботи', 'Інтерактивні іграшки'],
      },
      {
        name: 'Товари для тварин',
        items: [
          'Розумні іграшки',
          'Годівниці/Поїлки',
          'Догляд та гігієна',
          'Безпека',
        ],
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
                <a href="#">
                  <h4>{subcategory.name}</h4>
                </a>
                <ul>
                  {subcategory.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#">{item}</a>
                    </li>
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
