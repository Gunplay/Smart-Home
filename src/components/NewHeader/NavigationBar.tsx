// src/components/NavigationBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.scss';

const NavigationBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <a href="/">
        <div className={styles.navbar_logo}>LOGO</div>
      </a>
      <div className={styles.navbar_links}>
        <div className={styles.warranty}>
          <a href="#">Гарантія</a>
        </div>
        <div className={styles.exchange}>
          <a href="#">Обмін</a>
        </div>
        <div className={styles.news}>
          <a href="#">Новини</a>
        </div>
        <div className={styles.support_service}>
          <a href="#">Служба Підтримки</a>
        </div>
        <div className={styles.blog}>
          <a href="#">Блог</a>
        </div>
      </div>
      <div className={styles.navbar_auth}>
        <div className={styles.auth}>
          {/* <button className={styles.auth_button}>
            <Link to={'/sign-in'}>Увійти</Link>/
            <Link to={'/register'}>зареєструватися</Link>
          </button> */}
          <p className={styles.text}>
            <Link to={'/sign-in'}>Увійти</Link>/
            <Link to={'/register'}>зареєструватися</Link>
          </p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.16797 18.849C6.41548 18.0252 6.92194 17.3032 7.61222 16.79C8.30249 16.2768 9.13982 15.9997 9.99997 16H14C14.8612 15.9997 15.6996 16.2774 16.3904 16.7918C17.0811 17.3062 17.5874 18.0298 17.834 18.855M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12ZM9 10C9 10.7956 9.31607 11.5587 9.87868 12.1213C10.4413 12.6839 11.2044 13 12 13C12.7956 13 13.5587 12.6839 14.1213 12.1213C14.6839 11.5587 15 10.7956 15 10C15 9.20435 14.6839 8.44129 14.1213 7.87868C13.5587 7.31607 12.7956 7 12 7C11.2044 7 10.4413 7.31607 9.87868 7.87868C9.31607 8.44129 9 9.20435 9 10Z"
              stroke="#A0A591"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
