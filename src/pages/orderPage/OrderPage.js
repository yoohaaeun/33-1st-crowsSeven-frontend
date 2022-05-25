import React from 'react';
import CartTable from './CartTable';
import Orderinfo from './OrderInfo';
import './OrderPage.scss';
import Payment from './Payment';

// const Payment = () => {
//   return (
//     <div className="payment">
//       <h1>payment</h1>
//     </div>
//   );
// };

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
