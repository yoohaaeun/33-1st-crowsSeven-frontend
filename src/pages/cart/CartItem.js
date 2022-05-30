import React, { useState, useEffect } from 'react';

import './CartItem.scss';

const CartItem = ({
  item,
  total,
  cartList,
  setCartList,
  checkedList,
  setCheckedList,
}) => {
  const [isChecked, setIsChecked] = useState();

  const onSubmit = () => {};

  const onChangeQty = e => {
    const newCartList = cartList.map(cartItem => {
      if (cartItem.id === item.id) {
        cartItem.qty = Number(e.target.value);

        return cartItem;
      } else {
        return cartItem;
      }
    });
    setCartList(newCartList);
  };

  const onCheck = e => {
    if (e.target.checked) {
      setIsChecked(true);
      setCheckedList([...checkedList, item]);
    } else {
      setIsChecked(false);
      const result = checkedList.filter(cartItem => cartItem.id !== item.id);
      setCheckedList(result);
    }
  };

  return (
    <tr className="cartItem">
      <td className="checkBox">
        <input type="checkbox" onChange={onCheck} checked={isChecked} />
      </td>
      <td>
        <img src={item.product} alt={item.info} />
      </td>
      <td>{item.info}</td>
      <td>￦{item.price}</td>
      <td className="quantity">
        <div>
          <input
            type="number"
            className="quantityBtn"
            onChange={onChangeQty}
            value={item.qty}
            min="1"
          />
          <button className="modifyBtn" onClick={onSubmit}>
            Modify
          </button>
        </div>
      </td>
      <td>-</td>
      <td>기본배송</td>
      {total >= 50000 ? (
        <td className="charge">무료배송</td>
      ) : (
        <td className="charge">
          3000원
          <br />
          조건
        </td>
      )}
      <td>￦ {item.price * item.qty}</td>
    </tr>
  );
};

export default CartItem;
