// src/components/Header.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBalanceScale,
  faHeart,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import SideMenu from '../SideMenu';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="catalog">
        <SideMenu />
        {/* <div className="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div> */}
      </div>
      <div className="icons">
        <FontAwesomeIcon className="icon" icon={faSearch} />
        <FontAwesomeIcon className="icon" icon={faBalanceScale} />
        <FontAwesomeIcon className="icon" icon={faHeart} />
        <FontAwesomeIcon className="icon" icon={faShoppingBag} />
      </div>
    </div>
  );
};

export default Header;
