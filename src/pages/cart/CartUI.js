import React from 'react';
import CartItem from './CartItem';

const tableHeader = [
  'Product',
  'Info',
  'Price',
  'Qty.',
  'Mileage',
  'Delivery',
  'Charge',
  'Total',
  '선택',
];

const tableFooter = [
  { title: 'Price', total: '50000' },
  { title: 'Shipping', total: '0' },
  { title: 'Total', total: '50000' },
];

const CartUI = ({ cartList, itemTotal }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="checkBox">
              <input type="checkbox" />
            </th>
            {tableHeader.map(row => {
              return <th>{row}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {cartList.map((item, idx) => {
            return (
              <CartItem key={idx} item={item} total={itemTotal} idx={idx} />
            );
          })}
        </tbody>
        <tfoot>
          {tableFooter.map((row, idx) => {
            return (
              <tr key={idx}>
                <td colspan="10">
                  <div className="apple">
                    <strong>{row.title}</strong>
                    <div className="pricebox">
                      <span>{row.total}원</span>
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
          <button>Select Delete</button>
          <button>Delete</button>
        </div>
        <div className="orderBtn">
          <button>Select Order</button>
          <button>Order</button>
        </div>
      </div>
    </>
  );
};

export default CartUI;
