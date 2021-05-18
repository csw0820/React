import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import First from './first/first';
import Last from './last/last';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMain = (userId) => {
    history.push({
      pathname: '/main',
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMain(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMain(user.uid);
    });
  });
  return (
    <section>
      <First />
      <section>
        <h1 className={styles.login}>Logoin</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Last />
    </section>
  );
};

export default Login;
