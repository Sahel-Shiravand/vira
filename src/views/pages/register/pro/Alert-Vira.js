
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Alert-Vira.css';
function AlertVira(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (


    <>
      {/* <Button className="btn btn-primary btn-lg my-3" variant="primary" onClick={handleShow}>
        ثبت نام
      </Button> */}

      <Modal show={props.open} onHide={!props.open}>
        <Modal.Header className="header-modal" closeButton>
          <Modal.Title className="title-message">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-message">{props.body}</Modal.Body>
        <Modal.Footer>


          <Button variant="secondary" onClick={handleClose}>
            انصراف
          </Button>
          <Button variant="primary" onClick={handleClose}>
            تایید
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AlertVira
