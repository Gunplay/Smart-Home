import { Link } from 'react-router-dom';
import buttonReg from '../../../assets/buttons/butttonReg.svg';
import exitIcon from '../../../assets/icons/tabler-icon-x.svg';

import Button from '../../Button';
import styles from './SignInForm.module.scss';

const SignIn = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.formExit}>
          <Link to="/">
            <img src={exitIcon}></img>
          </Link>
        </div>
        <h2 className={styles.formTitle}>Вхід</h2>
        <form>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="firstNameAndSurname"
              id="firstNameAndSurname"
              placeholder="Ім'я та призвіще"
              className={styles.formInput}
            ></input>
          </div>
          <div className={styles.formGroup}>
            <input
              placeholder="Eлектронна пошта"
              className={styles.formInput}
            ></input>
          </div>
          <div className={styles.formGroup}>
            <input placeholder="Пароль" className={styles.formInput}></input>
          </div>
          <div className={styles.formText}>Або</div>
          <div className={styles.formGroup}>
            <div className={styles.buttonRegContainer}>
              <Button className={styles.buttonRegisterPhone}>
                Увійти по номеру телефону
              </Button>
              <Button>
                <img src={buttonReg}></img>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
