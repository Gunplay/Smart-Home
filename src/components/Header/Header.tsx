import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faSearch,
//   faBalanceScale,
//   faHeart,
//   faShoppingBag,
// } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import SideMenu from '../SideMenu/SideMenu';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.box}>
        <div className={styles.menu}>
          <SideMenu />
          {/* <div className="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div> */}
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <div className={styles.iconBox}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L15 15M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z"
                  stroke="#A0A591"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className={styles.icon}>
            <div className={styles.iconBox}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21H17M6 7L12 6L18 7M6 7L9 13C9 13.7956 8.68393 14.5587 8.12132 15.1213C7.55871 15.6839 6.79565 16 6 16C5.20435 16 4.44129 15.6839 3.87868 15.1213C3.31607 14.5587 3 13.7956 3 13L6 7ZM18 7L21 13C21 13.7956 20.6839 14.5587 20.1213 15.1213C19.5587 15.6839 18.7956 16 18 16C17.2044 16 16.4413 15.6839 15.8787 15.1213C15.3161 14.5587 15 13.7956 15 13L18 7ZM12 4V21"
                  stroke="#A0A591"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className={styles.icon}>
            <div className={styles.iconBox}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5003 12.5719L12.0003 19.9999L4.5003 12.5719C4.00561 12.0905 3.61594 11.5119 3.35585 10.8726C3.09575 10.2332 2.97086 9.54688 2.98904 8.85687C3.00721 8.16685 3.16806 7.48807 3.46146 6.86327C3.75485 6.23847 4.17444 5.68119 4.69379 5.22651C5.21314 4.77184 5.82101 4.42962 6.47911 4.22141C7.13722 4.01321 7.83131 3.94352 8.51767 4.01673C9.20403 4.08995 9.8678 4.30449 10.4672 4.64684C11.0666 4.98919 11.5885 5.45193 12.0003 6.00593C12.4138 5.45595 12.9364 4.99725 13.5354 4.65854C14.1344 4.31982 14.7968 4.10838 15.4812 4.03745C16.1657 3.96652 16.8574 4.03763 17.5131 4.24632C18.1688 4.45502 18.7743 4.79681 19.2919 5.2503C19.8094 5.70379 20.2277 6.25922 20.5207 6.88182C20.8137 7.50443 20.975 8.18082 20.9946 8.86864C21.0142 9.55647 20.8916 10.2409 20.6344 10.8792C20.3773 11.5174 19.9912 12.0958 19.5003 12.5779"
                  stroke="#A0A591"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className={styles.icon}>
            <div className={styles.iconBox}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00024 11V6C9.00024 5.20435 9.31631 4.44129 9.87892 3.87868C10.4415 3.31607 11.2046 3 12.0002 3C12.7959 3 13.559 3.31607 14.1216 3.87868C14.6842 4.44129 15.0002 5.20435 15.0002 6V11M6.33129 8H17.6703C17.9587 7.99997 18.2436 8.06229 18.5057 8.1827C18.7677 8.30311 19.0006 8.47876 19.1883 8.6976C19.3761 8.91645 19.5144 9.17331 19.5936 9.45059C19.6728 9.72786 19.6911 10.019 19.6473 10.304L18.3923 18.456C18.2833 19.1644 17.9243 19.8105 17.3803 20.2771C16.8362 20.7438 16.1431 21.0002 15.4263 21H8.57429C7.85769 21 7.16477 20.7434 6.62092 20.2768C6.07707 19.8102 5.71822 19.1643 5.60929 18.456L4.35429 10.304C4.31046 10.019 4.32878 9.72786 4.408 9.45059C4.48722 9.17331 4.62545 8.91645 4.81324 8.6976C5.00102 8.47876 5.23391 8.30311 5.49594 8.1827C5.75796 8.06229 6.04293 7.99997 6.33129 8Z"
                  stroke="#A0A591"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* <FontAwesomeIcon className={styles.icon} icon={faSearch} />
          <FontAwesomeIcon className={styles.icon} icon={faBalanceScale} />
          <FontAwesomeIcon className={styles.icon} icon={faHeart} />
          <FontAwesomeIcon className={styles.icon} icon={faShoppingBag} /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
