import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from './adminModal.module.css';

const adminModal = ({ open, onClose }) => {
  return (
    // <!-- Modal -->

    <Modal show={open} onHide={onClose}>
      {console.log(open)}
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default adminModal;
