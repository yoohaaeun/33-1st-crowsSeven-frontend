import React from 'react';
import OrderItem from './OrderItem';

const TABLE_HEADER = [
  'Product',
  'Info',
  'Price',
  'Qty.',
  'Mileage',
  'Delivery',
  'Charge',
  'Total',
];

const OrderNotEmpty = ({ orderList }) => {
  const price = orderList.map(item => item.price).reduce((a, b) => a + b, 0);
  const shipping = price >= 50000 ? 0 : 3000;
  const total = price + shipping;
  return (
    <table>
      <thead>
        <tr>
          <th className="checkBox">
            <div>주문일자</div>
            <div>[주문번호]</div>
          </th>
          {TABLE_HEADER.map(row => (
            <th key={row}>{row}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orderList.map((item, i) => {
          return <OrderItem key={i} item={item} total={total} />;
        })}
      </tbody>
    </table>
  );
};

export default OrderNotEmpty;
