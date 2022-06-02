import React from 'react';
import './OrderModal.scss';

const result = { date: '2022-05-29', orderNumber: 221630713 };

const Ordermodal = ({ setOpenModal }) => {
  return (
    <div className="orderModalBackground">
      <div className="modalContainer">
        <h1 className="title">Thank you for your order!</h1>
        <p className="body">주문일자 : {result.date}</p>
        <p className="body">주문번호 : {result.orderNumber}</p>
        <button onClick={() => setOpenModal(false)}>Go to Main</button>
      </div>
    </div>
  );
};

export default Ordermodal;
