import React from 'react';
import styles from './home.module.css';

const Home = () => (
  <section className={styles.home}>
    <div className="home_container">
      <img id="home" src="/imgs/fish/ship.jpg" alt="poto" className={styles.home__avatar} />
    </div>
    <h1 className={styles.home__title}>
      안녕하세요 <br />
      낚시예약
    </h1>
    <h2 className={styles.home__description}>경기도 화성시</h2>
    <button className={styles.home__contact}>네이버 예약</button>
  </section>
);

export default Home;
