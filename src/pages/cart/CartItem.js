import React from 'react';
import './CartItem.scss';

const CartItem = ({ item, total }) => {
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
          <input type="number" className="quantityBtn" />
          <button className="modifyBtn">Modify</button>
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
      <td>￦{item.price}</td>
      <td>
        <div className="selectBtn">
          <button>주문하기</button>
          <button>관심상품등록</button>
          <button>x 삭제</button>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
