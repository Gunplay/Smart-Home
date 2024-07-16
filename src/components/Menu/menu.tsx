// App.tsx
import React from 'react';
import MenuG from '.';
import './index.css';

const menuItems = [
  {
    title: 'Послуги',
  },
  {
    title: 'Розумні пристрої',
    subItems: [
      'Освітлювальні прилади',
      'Термостати та кліматичні системи',
      'Безпекові системи',
      'Аудіо- та відеопристрої',
      'Побутові прилади',
    ],
  },
  {
    title: 'Системи автоматизації',
  },
  {
    title: 'Аксесуари та компоненти',
  },
  {
    title: 'Програмне забезпечення та додатки',
  },
  {
    title: 'Інше',
  },
];

const Menu: React.FC = () => {
  return (
    <div className="App">
      <MenuG items={menuItems} />
    </div>
  );
};

export default Menu;
