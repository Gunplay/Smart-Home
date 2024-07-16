import { Link } from 'react-router-dom';
import exitIcon from '../../../assets/iconsSmartHome/exitIcon.svg';
import styles from './ExiticonForm.module.scss';
const ExitIconForm = () => {
  return (
    <Link to="/">
      <img src={exitIcon} className={styles.iconPosition}></img>
    </Link>
  );
};

export default ExitIconForm;
