import React, { useState, useEffect } from 'react';
import CartTable from './CartTable';
import './OrderPage.scss';

const OrderInfo = () => {
  return (
    <div className="orderInfo">
      <h1>orderInfo</h1>
    </div>
  );
};

const Payment = () => {
  return (
    <div className="payment">
      <h1>payment</h1>
    </div>
  );
};

const OrderPage = () => {
  return (
    <div className="orderPage">
      <h1>주문서작성</h1>
      <CartTable />
      <OrderInfo />
      <Payment />
    </div>
  );
};

export default OrderPage;
