// src/components/NavigationBar.tsx
import React from 'react';
import './index.css';
import 
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
          Увійти/зареєструватися
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
