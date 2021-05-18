import React from 'react';
import styles from './header.module.css';
import { useHistory } from 'react-router';

const Header = ({ onLogout }) => (
  <nav className={styles.navbar}>
    <div className={styles.navbar_logo}>
      <i className="fas fa-battery-full"></i>
      <a href="#">SeungWoo</a>
    </div>
    <div className={styles.box}></div>

    <ul className={styles.navbar_item}>
      <li className={styles.navbar_item}>
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      </li>
      <li className={styles.navbar_item}>Home</li>
      <li className={styles.navbar_item}>About</li>
      <li className={styles.navbar_item}>Skill</li>
      <li className={styles.navbar_item}>My work</li>
      <li className={styles.navbar_item}>Testimonial</li>
      <li className={styles.navbar_item}>Contact</li>
    </ul>
    <button className={styles.navbar_toggle_btn}>
      <i class="fas fa-bars"></i>
    </button>
  </nav>
);

export default Header;
