// src/components/NavigationBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const NavigationBar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">LOGO</div>
      <div className="navbar-links">
        <a href="#">Гарантія</a>
        <a href="#">Обмін</a>
        <a href="#">Новини</a>
        <a href="#">Служба Підтримки</a>
        <a href="#">Блог</a>
      </div>
      <div className="navbar-auth">
        <button className="auth-button">
          <Link to={'/sign-in'}>Увійти</Link>/
          <Link to={'/register'}>зареєструватися</Link>
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
