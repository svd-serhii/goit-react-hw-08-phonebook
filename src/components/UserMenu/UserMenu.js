import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import styles from './userMenu.module.css';

// import defaultAvatar from './default-avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUsername);
  console.log(user);

  return (
    <div className={styles.menuContainer}>
      <span className={styles.userName}>Welcome, {user.name}</span>
      <button
        className={styles.userMenuBtn}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </button>
    </div>
  );
}
