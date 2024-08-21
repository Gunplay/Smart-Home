// src/components/NavigationBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.scss';

const NavigationBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <a href="/">
        <svg
          width="95"
          height="61"
          viewBox="0 0 95 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.9994 16.1185L31.8978 15.7911L31.9473 15.7757L31.9991 15.7757L31.9994 16.1185ZM22.292 19.1294L22.3935 19.4568L22.3441 19.4722L22.2923 19.4722L22.292 19.1294ZM48.6321 16.1085C48.628 15.0986 49.4433 14.2766 50.4532 14.2724C51.4631 14.2683 52.2851 15.0836 52.2892 16.0935C52.2934 17.1034 51.4781 17.9254 50.4682 17.9295C49.4583 17.9337 48.6363 17.1184 48.6321 16.1085ZM10.0405 18.7982L22.2917 18.7865L22.2923 19.4722L10.0412 19.4839L10.0405 18.7982ZM22.1904 18.8019L31.8978 15.7911L32.101 16.446L22.3935 19.4568L22.1904 18.8019ZM31.9991 15.7757L50.4604 15.7581L50.461 16.4438L31.9997 16.4614L31.9991 15.7757Z"
            fill="white"
          />
          <path
            d="M18.707 23.5464L18.6041 23.2193L18.6542 23.2036L18.7067 23.2036L18.707 23.5464ZM9.13527 26.5567L9.23813 26.8838L9.18791 26.8996L9.13527 26.8996L9.13527 26.5567ZM35.082 23.5374C35.0779 22.5275 35.8932 21.7055 36.9031 21.7014C37.913 21.6972 38.735 22.5125 38.7391 23.5224C38.7433 24.5323 37.928 25.3543 36.9181 25.3585C35.9082 25.3626 35.0862 24.5473 35.082 23.5374ZM2.01453 26.2138L9.13527 26.2138L9.13527 26.8996L2.01453 26.8996L2.01453 26.2138ZM9.03241 26.2296L18.6041 23.2193L18.8099 23.8735L9.23813 26.8838L9.03241 26.2296ZM18.7067 23.2036L36.9103 23.1871L36.9109 23.8728L18.7073 23.8893L18.7067 23.2036Z"
            fill="white"
          />
          <path
            d="M39.6713 43.0142C39.6713 44.0241 40.49 44.8427 41.4999 44.8427C42.5098 44.8427 43.3285 44.0241 43.3285 43.0142C43.3285 42.0043 42.5098 41.1856 41.4999 41.1856C40.49 41.1856 39.6713 42.0043 39.6713 43.0142ZM1.84277 43.357L41.4999 43.357V42.6713L1.84277 42.6713V43.357Z"
            fill="white"
          />
          <path
            d="M24.5591 13.5288L24.7956 13.777L24.6963 13.8717H24.5591V13.5288ZM27.4364 10.786L27.1998 10.5378L27.2991 10.4431H27.4364V10.786ZM34.0854 10.786V10.4431H34.2139L34.3107 10.5275L34.0854 10.786ZM37.231 13.5288V13.8717H37.1025L37.0057 13.7872L37.231 13.5288ZM46.3003 13.5288C46.3003 12.5189 47.119 11.7002 48.1289 11.7002C49.1388 11.7002 49.9574 12.5189 49.9574 13.5288C49.9574 14.5387 49.1388 15.3574 48.1289 15.3574C47.119 15.3574 46.3003 14.5387 46.3003 13.5288ZM16.2432 13.186H24.5591V13.8717H16.2432V13.186ZM24.3225 13.2806L27.1998 10.5378L27.6729 11.0341L24.7956 13.777L24.3225 13.2806ZM27.4364 10.4431H34.0854V11.1288H27.4364V10.4431ZM34.3107 10.5275L37.4563 13.2704L37.0057 13.7872L33.8601 11.0444L34.3107 10.5275ZM37.231 13.186H48.1289V13.8717H37.231V13.186Z"
            fill="white"
          />
          <path
            d="M17.0057 31.5859L17.2502 31.8263L17.1494 31.9288H17.0057V31.5859ZM21.949 26.5574L21.7045 26.317L21.8053 26.2145H21.949V26.5574ZM33.3724 26.5574V26.2145H33.5073L33.606 26.3064L33.3724 26.5574ZM38.7768 31.5859V31.9288H38.6419L38.5432 31.8369L38.7768 31.5859ZM55.6713 31.5859C55.6713 30.576 56.49 29.7574 57.4999 29.7574C58.5098 29.7574 59.3285 30.576 59.3285 31.5859C59.3285 32.5958 58.5098 33.4145 57.4999 33.4145C56.49 33.4145 55.6713 32.5958 55.6713 31.5859ZM1.84277 31.2431H17.0057V31.9288H1.84277V31.2431ZM16.7612 31.3456L21.7045 26.317L22.1935 26.7977L17.2502 31.8263L16.7612 31.3456ZM21.git check949 26.2145H33.3724V26.9002H21.949V26.2145ZM33.606 26.3064L39.0103 31.3349L38.5432 31.8369L33.1389 26.8084L33.606 26.3064ZM38.7768 31.2431H57.4999V31.9288H38.7768V31.2431Z"
            fill="white"
          />
          <path
            d="M26.4031 39.0144V39.3573H26.4829L26.5544 39.3221L26.4031 39.0144ZM36.8584 33.8716V33.5287H36.7786L36.7071 33.5639L36.8584 33.8716ZM43.5576 33.8716C43.5576 34.8815 44.3763 35.7002 45.3862 35.7002C46.3961 35.7002 47.2147 34.8815 47.2147 33.8716C47.2147 32.8617 46.3961 32.043 45.3862 32.043C44.3763 32.043 43.5576 32.8617 43.5576 33.8716ZM1.67188 39.3573H26.4031V38.6716H1.67188V39.3573ZM26.5544 39.3221L37.0097 34.1792L36.7071 33.5639L26.2518 38.7068L26.5544 39.3221ZM36.8584 34.2144H45.3862V33.5287H36.8584V34.2144Z"
            fill="white"
          />
          <path
            d="M24.8142 5.75732L25.0369 5.49667L24.8073 5.30046L24.5837 5.50349L24.8142 5.75732ZM1.84277 26.6145L1.6123 26.3606L1.49992 26.4627V26.6145H1.84277ZM1.84277 57.643H1.49992V57.9859H1.84277V57.643ZM89.8999 57.643C89.8999 58.6529 90.7186 59.4716 91.7285 59.4716C92.7384 59.4716 93.5571 58.6529 93.5571 57.643C93.5571 56.6331 92.7384 55.8145 91.7285 55.8145C90.7186 55.8145 89.8999 56.6331 89.8999 57.643ZM26.1285 8.44304C26.1285 9.45293 26.9472 10.2716 27.9571 10.2716C28.9669 10.2716 29.7856 9.45293 29.7856 8.44304C29.7856 7.43315 28.9669 6.61447 27.9571 6.61447C26.9472 6.61447 26.1285 7.43315 26.1285 8.44304ZM24.5837 5.50349L1.6123 26.3606L2.07325 26.8683L25.0447 6.01116L24.5837 5.50349ZM1.49992 26.6145V57.643H2.18563V26.6145H1.49992ZM1.84277 57.9859H91.7285V57.3002H1.84277V57.9859ZM24.5915 6.01798L27.7343 8.70369L28.1798 8.18239L25.0369 5.49667L24.5915 6.01798Z"
            fill="white"
          />
          <path
            d="M8.55008 54.2998V48.5855H9.97866V54.2998H8.55008ZM5.69294 47.8712V46.4427H12.8358V47.8712H5.69294ZM12.4787 54.2998V50.7284H13.9072V52.8712H18.1929V54.2998H12.4787ZM14.6215 52.1569V50.7284H18.1929V50.0141H12.4787V48.5855H18.1929C18.5873 48.5855 18.9221 48.7269 19.1974 49.0096C19.4801 49.2924 19.6215 49.6272 19.6215 50.0141V52.1569H14.6215ZM20.6929 54.2998V50.7284H22.1215V52.8712H27.8358V54.2998H20.6929ZM20.6929 50.0141V48.5855H27.8358V50.0141H20.6929ZM28.9072 54.2998V50.7284C29.3016 50.7284 29.6364 50.8697 29.9117 51.1525C30.1944 51.4352 30.3358 51.77 30.3358 52.1569V54.2998H28.9072ZM34.6215 54.2998V50.0141H28.9072V46.4427H30.3358V48.5855H34.6215C35.0159 48.5855 35.3507 48.7269 35.626 49.0096C35.9087 49.2924 36.0501 49.6272 36.0501 50.0141V54.2998H34.6215ZM37.1215 54.2998V50.0141H44.2644V54.2998H42.8358V51.4427H38.5501V54.2998H37.1215ZM37.1215 49.2998V46.4427H38.5501V49.2998H37.1215ZM42.8358 49.2998V46.4427H44.2644V49.2998H42.8358ZM45.3358 54.2998V52.1569C45.3358 51.7626 45.4734 51.4278 45.7487 51.1525C46.0315 50.8697 46.37 50.7284 46.7644 50.7284V52.8712H51.0501V50.0141H45.3358C45.3358 49.6197 45.4734 49.2849 45.7487 49.0096C46.0315 48.7269 46.37 48.5855 46.7644 48.5855H52.4787V52.8712C52.4787 53.273 52.3373 53.6116 52.0545 53.8869C51.7718 54.1622 51.437 54.2998 51.0501 54.2998H45.3358ZM54.9787 54.2998C54.5769 54.2998 54.2383 54.1622 53.963 53.8869C53.6877 53.6041 53.5501 53.2656 53.5501 52.8712V48.5855H54.9787V52.8712H59.2644V48.5855H60.6929V54.2998H54.9787ZM61.7644 54.2998V52.8712H67.4787V52.1569H61.7644V50.7284H67.4787C67.873 50.7284 68.2078 50.8697 68.4831 51.1525C68.7659 51.4352 68.9072 51.77 68.9072 52.1569V54.2998H61.7644ZM61.7644 50.0141V48.5855H67.4787C67.873 48.5855 68.2078 48.7269 68.4831 49.0096C68.7659 49.2924 68.9072 49.6272 68.9072 50.0141H61.7644ZM69.9787 54.2998V50.7284H71.4072V52.8712H75.6929V54.2998H69.9787ZM72.1215 52.1569V50.7284H75.6929V50.0141H69.9787V48.5855H75.6929C76.0873 48.5855 76.4221 48.7269 76.6974 49.0096C76.9801 49.2924 77.1215 49.6272 77.1215 50.0141V52.1569H72.1215Z"
            fill="white"
          />
        </svg>
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
            <Link to={'/sign-in'}>
              <button>Увійти</button>
            </Link>

            {/* Увійти/зареєструватися */}
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
