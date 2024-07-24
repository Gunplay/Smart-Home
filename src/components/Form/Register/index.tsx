import { useState } from 'react';
import ExitIconForm from '../ExitIconForm';
import styles from './RegisterForm.module.scss';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    clientURI: '',
    newsletter: false,
  });

  const handleChange = (e: {
    target: { name: string; value: string; type: string; checked: boolean };
  }) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here
  
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.formExit}>
          <ExitIconForm />
        </div>
        <h2 className={styles.formTitle}>Реєстрація</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName" className={styles.formLabel}>
              Ім'я та призвіще
            </label>
            <input
              type="text"
              name="firstNameAndSurname"
              id="firstNameAndSurname"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Ім'я"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Електронна пошта
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Електронна пошта"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.formLabel}>
              Пароль
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Пароль"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formCheckboxLabel}>
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className={styles.formCheckbox}
              />
              <span className="ml-2 text-gray-700">
                Хочу отримувати повідомлення на електронну пошту з інформацією
                про новини та знижки
              </span>
            </label>
          </div>
          <div className={styles.submitButtonContainer}>
            <button type="submit" className={styles.submitButton}>
              Зареєструватися
            </button>
          </div>
        </form>
        <p className={styles.formFooter}>
          Реєструючись, ви погоджуєтесь з ліцензійною угодою
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
