import React from 'react';
import CartTable from './CartTable';
import Orderinfo from './OrderInfo';
import './OrderPage.scss';
import Payment from './Payment';

const OrderPage = () => {
  return (
    <div className="orderPage">
      <h1>주문서작성</h1>
      <CartTable />
      <Orderinfo />
      <Payment />
    </div>
  );
};

export default OrderPage;
