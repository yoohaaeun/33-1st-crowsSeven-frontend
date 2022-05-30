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
  const isAllChecked = checkedList.length === cartList.length;
  // TODO: every method

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

  const onClicked = e => {
    console.log('체크상태', e.target.checked);

    if (e.target.checked) {
      setCheckedList(cartList); // 모두 체크가 된 상태니까 cartList를 다 담아줌
    } else {
      setCheckedList([]); // 모두 체크가 안된 상태니까 그냥 빈배열
    }
  };

  if (cartList.length === checkedList.length)
    return (
      <>
        <table>
          <thead>
            <tr>
              <th className="checkBox">
                <input
                  type="checkbox"
                  onClick={onClicked}
                  checked={isAllChecked}
                />
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
            <button onClick={() => console.log('선택삭제', checkedList)}>
              Select Delete
            </button>
            <button onClick={() => console.log('전체삭제', cartList)}>
              Delete
            </button>
          </div>
          <div className="orderBtn">
            <button onClick={() => console.log('선택주문', checkedList)}>
              Select Order
            </button>
            <button onClick={() => console.log('전체주문', cartList)}>
              Order
            </button>
          </div>
        </div>
      </>
    );
};

export default CartNotEmpty;
