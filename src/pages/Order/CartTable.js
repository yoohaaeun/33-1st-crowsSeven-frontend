import React from 'react';
import './CartTable.scss';

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

const OrderItem = ({ item, price }) => {
  return (
    <tr className="cartItem">
      <td className="product">
        <img src={item.product} alt={item.info} />
      </td>
      <td className="info">{item.info}</td>
      <td>￦{item.price}</td>
      <td>{item.qty}</td>
      <td>-</td>
      <td>기본배송</td>
      {price >= 50000 ? (
        <td lassName="charge">무료배송</td>
      ) : (
        <td lassName="charge">
          3000원 <br /> 조건
        </td>
      )}
      <td>{item.price}</td>
    </tr>
  );
};

const CartTable = ({ orderItemList }) => {
  const price = orderItemList
    .map(item => item.price)
    .reduce((a, b) => a + b, 0);
  const shipping = price >= 50000 ? 0 : 3000;
  const total = price + shipping;

  return (
    <div className="cartTable">
      <table>
        <thead>
          <tr>
            {TABLE_HEADER.map((header, idx) => {
              return <th key={idx}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {orderItemList.map(item => {
            return (
              <OrderItem key={orderItemList.id} item={item} price={price} />
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            {total >= 50000 ? (
              <td colspan="9">
                [기본배송] 상품구매금액 {price} + 배송비 {shipping} (무료) =
                합계 : {total}원
              </td>
            ) : (
              <td colspan="9">
                [기본배송] 상품구매금액 {price} + 배송비 {shipping} = 합계 :
                {total}원
              </td>
            )}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartTable;
