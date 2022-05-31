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

  useEffect(() => {
    setIsChecked(checkedList && checkedList.includes(item));
  }, [checkedList, item]);

  // 시작❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️

  // ✨ 수량수정, 재고부족알림 ✨
  const onSubmit = () => {
    // console.log('아이템 아이디', item.id);
    // console.log('바꿀수량', item.qty);

    fetch('http://221.114.81.121:8080/cart', {
      method: 'PUT',
      body: JSON.stringify({
        id: item.id,
        qty: item.qty,
      }),
    })
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        if (result.message === 'success') {
          alert('수량이 변경되었습니다.');
        }
      })
      .catch(e => {
        // console.log(e);
        if (e.message === 'STUFF_OVERFLOW') {
          alert('재고가 부족합니다.');
        }
      });
  };

  // 끝❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️

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
      setCheckedList(checkedList.filter(cartItem => cartItem.id !== item.id));
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
