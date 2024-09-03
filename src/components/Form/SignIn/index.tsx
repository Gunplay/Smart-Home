import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ButtonReg from '../../../assets/ButtonsSmartHome/buttonReg.svg';
import { postLoginUserData } from '../../../redux/LogInPost/asyncLoginAct';
import { AppDispatch } from '../../../redux/store';
import Button from '../../Button';
import styles from './SignInForm.module.scss';
const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  //const { errorMessage } = useSelector((state: RootState) => state.auth);
  // useEffect(() => {
  //   const token = !!localStorage.getItem('token');
  //   if (token) {
  //     console.log('Token found, navigating to /');
  //     navigate('/');
  //   } else {
  //     console.log('No token found, staying on the page');
  //   }
  // }, [navigate]);

  const Login = () => {
    const token = !!localStorage.getItem('token');
    token && navigate('/');
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      postLoginUserData({
        formData: { email, password, clientURI: window.location.origin },
      })
    );
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="Email"
              className={styles.formInput}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              placeholder="Password"
              className={styles.formInput}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <button
              type="submit"
              className={styles.buttonRegisterPhone}
              onClick={Login}
            >
              Увійти
            </button>
          </div>
          <div>
            <Link to={'/register'}>
              <Button>
                <img src={ButtonReg}></img>
              </Button>
            </Link>
          </div>

          {/* <div>
            <Link to="/register">
              <img src={ButtonReg} alt="Register" />
            </Link>
            <div className={styles.formText}>Або увійти через</div>
            <div className={styles.WrapperIcons}>
              <div className={styles.FaceBookIcon}>
                <img src={FaceBook} alt="FaceBook" />
              </div>
              <div className={styles.GoogleIcon}>
                <img src={insta} alt="Google" />
              </div>
            </div>
            <Link to={'/register'}>
              {/* <Button>
                  <img src={buttonReg}></img>
                </Button> 
            </Link>
            <div>Забули пароль? Відновити</div>
          </div> */}
        </form>
        {/* {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>} */}
      </div>
    </div>
  );
};

export default SignIn;
