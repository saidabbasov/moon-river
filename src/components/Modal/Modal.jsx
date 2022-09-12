import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from '../Card/Card';
import author from "./../../images/author.png"

export function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
      <span onClick={() => setShow(true)}>
      <img src={author} alt='' />  Login
      </span>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Card/>
        </Modal.Body>
      </Modal>
    </>
  );
}

