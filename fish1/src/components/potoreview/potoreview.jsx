import React from 'react';
import styles from './potoreview.module.css';

const Potoreview = () => (
  <section className={styles.poto_review}>
    <div className={styles.poto_review_categories}>
      <h1>후기사진</h1>
      <h3>2021</h3>
      <div className={styles.poto_btn_categories}>
        <button className={styles.category_btn} data-filter="*">
          All
          <span className={styles.category_count}>8</span>
        </button>
        <button className={styles.category_btn} data-filter="rockfish">
          우럭낚시
          <span className={styles.category_count}>4</span>
        </button>
        <button className={styles.category_btn} data-filter="bass">
          농어낚시
          <span className={styles.category_count}>2</span>
        </button>
        <button className={styles.category_btn} data-filter="octopus">
          쭈꾸미 낚시
          <span className={styles.category_count}>2</span>
        </button>
      </div>
      <div className={styles.review_box}>
        <img src="./imgs/rock.jpg" alt="rock" />
        <div className={styles.review_description}>
          <h3>2021.01.01</h3>
          <span>풍도 우럭낚시</span>
        </div>
        <div className={styles.review_box}>
          <img src="./imgs/rock.jpg" alt="rock" />
          <div className={styles.review_description}>
            <h3>2021.01.01</h3>
            <span>풍도 우럭낚시</span>
          </div>
        </div>
        <div className={styles.review_box}>
          <img src="./imgs/rock.jpg" alt="rock" />
          <div className={styles.review_description}>
            <h3>2021.01.01</h3>
            <span>풍도 우럭낚시</span>
          </div>
        </div>
        <div className={styles.review_box}>
          <img src="./imgs/rock.jpg" alt="rock" />
          <div className={styles.review_description}>
            <h3>2021.01.01</h3>
            <span>풍도 우럭낚시</span>
          </div>
        </div>
        <div className={styles.review_box}>
          <img src="./imgs/fish.bass.jpg" alt="rock" />
          <div className={styles.review_description}>
            <h3>2021.01.01</h3>
            <span>농어 낚시</span>
          </div>
        </div>
        <div className={styles.review_box}>
          <img src="./imgs/bass" alt="rock" />
          <div className={styles.review_description}>
            <h3>2021.01.01</h3>
            <span>농어 낚시</span>
          </div>
        </div>
        <div className={styles.review_box}>
          <img src="./imgs/octo.jpg" alt="rock" />
          <div className={styles.review_description}>
            <h3>2021.01.01</h3>
            <span>풍도 쭈꾸미낚시</span>
          </div>
        </div>
        <div className={styles.review_box}>
          <img src="./imgs/octo.jpg" alt="rock" />
          <div className={styles.review_description}>
            <h3>2021.01.01</h3>
            <span>풍도 쭈꾸미낚시</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Potoreview;
