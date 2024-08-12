import buttonReg from '../../../assets/ButtonsSmartHome/buttonReg.svg';

import { Link } from 'react-router-dom';
import FaceBook from '../../../assets/iconsRegister/faceboock.svg';
import Google from '../../../assets/iconsRegister/google.svg';
import Button from '../../Button';
import ExitIconForm from '../ExitIconForm';
import styles from './SignInForm.module.scss';

const SignIn = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.formExit}>
          <ExitIconForm />
        </div>
        <h2 className={styles.formTitle}>Вхід</h2>
        <form>
          {/* <div className={styles.formGroup}>
            <input
              type="text"
              name="firstNameAndSurname"
              id="firstNameAndSurname"
              placeholder="Ім'я та призвіще"
              className={styles.formInput}
            ></input>
          </div> */}
          <div className={styles.formGroup}>
            <input
              placeholder="Eлектронна пошта"
              className={styles.formInput}
            ></input>
          </div>
          <div className={styles.formGroup}>
            <input placeholder="Пароль" className={styles.formInput}></input>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.buttonRegContainer}>
              <Button className={styles.buttonRegisterPhone}>Увійти</Button>
              <div className={styles.formText}>Або увійти через</div>
              <div className={styles.WrapperIcons}>
                <div className={styles.FaceBookIcon}>
                  <img src={FaceBook} alt="FaceBook" />
                </div>
                <div className={styles.GoogleIcon}>
                  <img src={Google} alt="Google" />
                </div>
              </div>
              <Link to={'/register'}>
                <Button>
                  <img src={buttonReg}></img>
                </Button>
              </Link>
              <div>Забули пароль? Відновити</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
