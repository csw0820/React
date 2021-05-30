import React from 'react';
import styles from './first.module.css';

const First = ({ onLogout }) => (
  <header className={styles.header}>
    {/* {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )} */}
    <img className={styles.logo} src="/imgs/fish/ship.jpg" />
    <h1 className={styles.title}>fishing reservation</h1>
  </header>
);

export default First;
