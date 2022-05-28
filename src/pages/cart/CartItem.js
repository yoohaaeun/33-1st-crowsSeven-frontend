import React, { useState, useEffect } from 'react';

import './CartItem.scss';

const CartItem = ({ item, total, cartList, setCartList }) => {
  const [quantity, setQuantity] = useState();

  const onSubmit = () => {};

  const onChangeQty = e => {
    setQuantity(Number(e.target.value));

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

  useEffect(() => {
    setQuantity(item.qty);
  }, [item.qty]);

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
      <td className="quantity">
        <div>
          <input
            type="number"
            className="quantityBtn"
            onChange={onChangeQty}
            value={quantity}
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
      <td>￦ {item.price * quantity}</td>
    </tr>
  );
};

export default CartItem;
