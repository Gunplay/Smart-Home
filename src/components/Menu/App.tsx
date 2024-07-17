import React from 'react';
import DropdownMenu from './DropdownMenu';

const AppD: React.FC = () => {
  return (
    <div className="App">
      <DropdownMenu
        title="Каталог"
        items={[
          'Послуги',
          'Розумні пристрої',
          'Системи автоматизації',
          'Аксесуари та компоненти',
          'Програмне забезпечення та додатки',
          'Інше',
        ]}
      />
    </div>
  );
};

export default AppD;
