import React, { useContext, useRef, useState } from 'react';
import styles from './header.module.css';
import { Context } from '../../Context';
import { Button, Modal } from 'react-bootstrap';

const Header = ({ onLogout }) => {
  const { name } = useContext(Context);
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    console.log(open);
    setOpen(true);
  };
  const onClose = () => setOpen(false);
  const [email, setEmail] = useState('');
  const handleEmail = (e) => setEmail(e.target.value);
  const [password, setPassword] = useState('');
  const handlePassword = (e) => setPassword(e.target.value);
  const handleSubmit = () => {
    console.log(email);
    console.log(password);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <i className="fas fa-battery-full"></i>
          {/* //context 연습 */}
          <a href="#">{name}</a>
        </div>
        <div className={styles.box}></div>

        <ul className={styles.itemContainer}>
          <li className={styles.navbar_item}>
            <Button onClick={onOpen}>login</Button>
          </li>
          {/* <li className={styles.navbar_item}>
            <button className={styles.logout}>Admin Login</button>
          </li> */}
          <li className={styles.navbar_item}>
            <a href="#home">Home</a>
          </li>
          <li className={styles.navbar_item}>
            <a href="#info">Information</a>
          </li>
          <li className={styles.navbar_item}>
            <a href="#photo">Photo</a>
          </li>
          <li className={styles.navbar_item}>
            <a href="#weather">wheather</a>
          </li>
          <li className={styles.navbar_item}>
            <a href="#license">License</a>
          </li>
        </ul>
        {/* <button className={styles.navbar_toggle_btn}>
      <i class="fas fa-bars"></i>
    </button> */}
      </nav>
      <Modal className={styles.modalContainer} show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>관리자 로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <label>
              Email
              <input type="email" value={email} onChnge={handleEmail} />
            </label>
            <label>
              password
              <input type="password" value={password} onChange={handlePassword} />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            닫기
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            로그인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
