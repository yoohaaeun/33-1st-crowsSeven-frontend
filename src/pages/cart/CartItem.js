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
    console.log('아이템 아이디', item.id);
    console.log('바꿀수량', item.qty);

    fetch(`http://10.58.0.138:8000/carts/${item.id}`, {
      method: 'PATCH',
      headers: {
        // Authorization: localStorage.getItem('Authorization');
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTB9.i1C1V7Mue-i8VfcUp-ZO-kzEDgLOxX7xzQK7WLadk7U',
      },
      body: JSON.stringify({
        // id: item.id,
        qty: item.qty,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        //2. 그러면 result에 뭐가 담겨져 오는지 확인하기. console.log(result);
        //3. result에 성공에 대한 무언가가 있으면 그걸확인해서 조건으로 만들기 (ex) result.status === 200 이라거나 아니면 message 가 있는데, 그 메세지가 뭔지 확인 'success'말고 다른 말일..
        if (result.message === 'success') {
          //1. 여기 콘솔 찍어보고 콘솔 안찍히면 이 코드블럭은 실행이 안된거다.
          alert('수량이 변경되었습니다.');
        }
      })
      .catch(e => {
        console.log('재고부족', e);
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
