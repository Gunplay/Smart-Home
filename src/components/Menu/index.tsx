// Menu.tsx
import React from 'react';

type MenuItem = {
  title: string;
  subItems?: string[];
};

type MenuProps = {
  items: MenuItem[];
};

const MenuG: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className="box">
      <div className="menu">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.title}
              {item.subItems && (
                <ul>
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuG;
