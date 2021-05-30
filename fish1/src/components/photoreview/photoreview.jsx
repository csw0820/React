import React, { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from './photoreview.module.css';

const Photoreview = () => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    console.log(open);
    setOpen(true);
  };
  const onClose = () => setOpen(false);

  const [content, setContent] = useState('');
  const handleContent = (e) => setContent(e.target.value);

  const [file, setFile] = useState(null);

  const [fileUrl, setFileUrl] = useState(null);

  const handleFileOnchange = (e) => {
    const imageFile = e.target.files;
    setFileUrl(imageFile);
  };

  const handleSubmit = () => {
    console.log(content);
  };
  // category box

  const box = ['All', '우럭', '광어', '농어', '쭈꾸미'];
  const boxList = box.map((item) => (
    <button className={styles.category_btn}>
      {item}
      <span className={styles.category_count}>8</span>
    </button>
  ));

  const reviewCategory = [1, 2, 3, 4, 5, 6, 7, 8];
  const reviewCategoryBox = reviewCategory.map(() => (
    <div className={styles.review_box}>
      <img className={styles.review_img} src="/imgs/fish/rock.jpg" alt="rock" />
      <div className={styles.review_description}>
        <h3>2021.01.01</h3>
        <span>풍도 우럭낚시</span>
      </div>
    </div>
  ));

  //

  const photoBtnContainer = useRef();

  return (
    <>
      <section id="photo" className={styles.photo_review}>
        <div className={styles.photo_review_categories}>
          <div className={styles.uploadBox}>
            <h1>후기사진</h1>
          </div>
          {/* category box*/}
          <div className={styles.photo_btn_categories} ref={photoBtnContainer}>
            {boxList}
          </div>
        </div>
        <div className={styles.box_container}>{reviewCategoryBox}</div>
        <div>
          <Button className={styles.upBtn} onClick={onOpen}>
            Upload
          </Button>
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <Modal className={styles.modalContainer} show={open} onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>업로드 파일선택</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input defaultValue={content} className={styles.uploadtext} type="text" onChange={handleContent} />
            <input
              type="file"
              name="file"
              accept=".jpg, .gif, .png, .bnp, .heif"
              multiple
              required
              onChange={handleFileOnchange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              닫기
            </Button>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              업로드
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
};

export default Photoreview;
