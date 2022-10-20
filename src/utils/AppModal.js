import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

function AppModal(props) {
  return (
    <>
      <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            <h5 className='modal-heading'>{props.title}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
}

export default AppModal;
