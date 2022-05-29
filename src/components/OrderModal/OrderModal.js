import React from 'react';
import './OrderModal.scss';

const Ordermodal = ({ closeModal }) => {
  return (
    <div className="orderModalBackground">
      <div className="modalContainer">
        <h1 className="title">Thank you for your order!</h1>
        <p className="body">주문일자 : 2022-05-29</p>
        <p className="body">주문번호 : [221630713]</p>
        <button onClick={() => closeModal(false)}>Go to Main</button>
      </div>
    </div>
  );
};

export default Ordermodal;
