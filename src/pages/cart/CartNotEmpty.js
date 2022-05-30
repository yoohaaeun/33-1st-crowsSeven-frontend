import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

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

const CartNotEmpty = ({
  cartList,
  setCartList,
  checkedList,
  setCheckedList,
}) => {
  const price = cartList
    .map(item => item.price * item.qty)
    .reduce((a, b) => a + b, 0);
  const shipping = price >= 50000 ? 0 : 3000;
  const total = price + shipping;

  const tableFooter = [
    { title: 'Price', amount: price },
    { title: 'Shipping', amount: shipping },
    { title: 'Total', amount: total },
  ];

  const onChecked = e => {
    if (e.target.checked) {
      setCheckedList(cartList);
    } else {
      setCheckedList([]);
    }
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="checkBox">
              <input type="checkbox" onChange={onChecked} />
            </th>
            {TABLE_HEADER.map(row => (
              <th key={row} className={row.toLowerCase()}>
                {row}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cartList.map(item => {
            return (
              <CartItem
                key={cartList.id}
                item={item}
                total={total}
                cartList={cartList}
                setCartList={setCartList}
                checkedList={checkedList}
                setCheckedList={setCheckedList}
              />
            );
          })}
        </tbody>
        <tfoot>
          {tableFooter.map(row => {
            return (
              <tr key={row.title}>
                <td colspan="10">
                  <div className="priceRow">
                    <strong>{row.title}</strong>
                    <div className="pricebox">
                      <span>{row.amount}원</span>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tfoot>
      </table>
      <div className="bottomBtn">
        <div className="deleteBtn">
          <button onClick={() => console.log('삭제:', checkedList)}>
            Select Delete
          </button>
          <button>Delete</button>
        </div>
        <div className="orderBtn">
          <button onClick={() => console.log('주문:', checkedList)}>
            Select Order
          </button>
          <button>Order</button>
        </div>
      </div>
    </>
  );
};

export default CartNotEmpty;
