import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalBody = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className='fw-bold'>Connect your wallet</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-evenly mb-5'>
          <div className='text-center'>
            <img src={require("../image/MetaMask.png")} style={{ height: '100px', width: '100px' }} alt=" " />
            <h4 style={{ color: '#9B1FE9' }} className='fw-bold'>MetaMask</h4>
          </div>
          <div className='text-center'>
            <img src={require("../image/wallet.png")} style={{ height: '100px', width: '100px' }} alt=" " />
            <h4 style={{ color: '#9B1FE9' }} className='fw-bold'>WalletConnect</h4>
          </div>
        </div>
      </Modal.Body>

    </Modal>
  );
};

export default ModalBody;