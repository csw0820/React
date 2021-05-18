import React from 'react';
import styles from './poto.module.css';

const Poto = () => (
  <section className={styles.poto_review}>
    <div className={styles.review_box}>
      <img src="./imgs/rock.jpg" alt="rock" />
      <div className={styles.review_description}>
        <h3>날짜</h3>
        <span>설명</span>
      </div>
    </div>
  </section>
);

export default Poto;
