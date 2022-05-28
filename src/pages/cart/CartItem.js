import React, { useState, useEffect } from 'react';

import './CartItem.scss';

const CartItem = ({ item, total, cartList, setCartList }) => {
  const [quantity, setQuantity] = useState();

  const onSubmit = () => {
    console.log('아이템 아이디', item.id);
    console.log('바꿀수량', quantity);
  };

  const onChangeQty = e => {
    setQuantity(e.target.value);

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
  }, []);

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
      {/* <td>
        <div className="selectBtn">
          <button>주문하기</button>
          <button>관심상품등록</button>
          <button>x 삭제</button>
        </div>
      </td> */}
    </tr>
  );
};

export default CartItem;
