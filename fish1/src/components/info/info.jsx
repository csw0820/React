import styles from './info.module.css';

import React from 'react';

const Info = (props) => (
  <div id="info" className={styles.info}>
    <img className={styles.info_img} src="/imgs/fish/poto.jpg" alt="소개" />
    <h1>안녕하세요</h1>
  </div>
);

export default Info;
