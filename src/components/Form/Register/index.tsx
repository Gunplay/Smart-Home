import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAccountUserData } from '../../../redux/AccountRegisterPostData/asycncActions';

import { AppDispatch } from '../../../redux/store.ts';
import ExitIconForm from '../ExitIconForm';
import styles from './RegisterForm.module.scss';

const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const baseUrl = window.location.origin;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    clientURI: `${baseUrl}/api/accounts/emailconfirm`,
  });

  console.log('formData', formData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Extract the base URL before '/register'

    // Include baseUrl in the formData
    const updatedFormData = { ...formData, clientURI: baseUrl };

    // Dispatch the action with the updated form data and baseUrl
    dispatch(postAccountUserData({ formData: updatedFormData, baseUrl }));
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
              Призвіще
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Призвіще"
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

          <div className={styles.submitButtonContainer}>
            <button type="submit" className={styles.submitButton}>
              Зареєструватися
            </button>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formCheckboxLabel}>
              <input
                type="checkbox"
                name="newsletter"
                onChange={handleChange}
                className={styles.formCheckbox}
              />
              <span className="ml-2 text-gray-700">
                Хочу отримувати повідомлення на електронну пошту з інформацією
                про новини та знижки
              </span>
            </label>
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
