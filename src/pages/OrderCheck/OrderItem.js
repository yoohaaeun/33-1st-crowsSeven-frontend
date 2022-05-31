import React from 'react';

const OrderItem = ({ item, total }) => {
  return (
    <tr className="cartItem">
      <td className="checkBox">
        <div>{item.date}</div>
      </td>
      <td>
        <img className="productImg" src={item.product} alt={item.info} />
      </td>
      <td>{item.info}</td>
      <td>￦{item.price}</td>
      <td className="quantity">
        <div>
          <div>{item.qty}</div>
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
    </tr>
  );
};

export default OrderItem;
