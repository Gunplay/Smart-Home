import Button from '../../Button';
import styles from './SignInForm.module.scss';
const SignIn = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
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
          <div className={styles.formGroup}>Або</div>
          <div className={styles.formGroup}>
            <Button>Зареєструватися</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
