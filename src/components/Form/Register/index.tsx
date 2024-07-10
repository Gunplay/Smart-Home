import { useState } from 'react';
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

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>Реєстрація</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName" className={styles.formLabel}>
              Ім'я
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Ім'я"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName" className={styles.formLabel}>
              Прізвище
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Прізвище"
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
            <label htmlFor="confirmPassword" className={styles.formLabel}>
              Підтвердіть пароль
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Підтвердіть пароль"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="clientURI" className={styles.formLabel}>
              Client URI
            </label>
            <input
              type="text"
              name="clientURI"
              id="clientURI"
              value={formData.clientURI}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Client URI"
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
