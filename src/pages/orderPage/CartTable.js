import React, { useState, useEffect } from 'react';
import './CartTable.scss';

const tableHeader = [
  'Product',
  'Info',
  'Price',
  'Qty.',
  'Mileage',
  'Delivery',
  'Charge',
  'Total',
];

const OrderItem = ({ item }) => {
  return (
    <tr className="cartItem">
      <td className="checkBox">
        <input type="checkbox" />
      </td>
      <td>
        <img src={item.product} alt={item.info} />
      </td>
      <td>{item.info}</td>
      <td>￦{item.price}</td>
      <td>{item.qty}</td>
      <td>-</td>
      <td>기본배송</td>
      <td className="charge">
        3000원 <br />
        조건
        {/* {total > 50000 ? 무료배송 : 3000원 <br /> 조건} */}
      </td>
      <td>{item.price}</td>
    </tr>
  );
};

const CartTable = () => {
  const [orderItem, setOrderItem] = useState([]);

  useEffect(() => {
    fetch('/data/cartList.JSON')
      .then(res => res.json())
      .then(data => {
        setOrderItem(data);
      });
  }, []);

  return (
    <div className="cartTable">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            {tableHeader.map((header, idx) => {
              return <th key={idx}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {orderItem.map((item, idx) => {
            return <OrderItem key={idx} item={item} idx={idx} />;
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="9">
              [기본배송] 상품구매금액 42,000 + 배송비 3,000 = 합계 : 45,000원
              {/* 
              {total} > 50000 ? {`[기본배송] 상품구매금액 {total} + 배송비 3,000 = 합계 : {total+3000}원`} : {`[기본배송] 상품구매금액 {total} + 배송비 0 (무료) = 합계 : {total}원`}
              */}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartTable;
