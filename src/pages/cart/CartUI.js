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
  { title: 'Price' },
  { title: 'Shipping' },
  { title: 'Total' },
];

const CartUI = ({ cartList, itemTotal }) => {
  const price = cartList.map(item => item.price).reduce((a, b) => a + b, 0);
  const shipping = price > 50000 ? 0 : 3000;
  const total = price + shipping;

  const priceArr = [price, shipping, total];

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="checkBox">
              <input type="checkbox" />
            </th>
            {tableHeader.map(row => {
              return <th key={row}>{row}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {cartList.map((item, idx) => {
            return <CartItem key={cartList.id} item={item} total={total} />;
          })}
        </tbody>
        <tfoot>
          {tableFooter.map((row, idx) => {
            return (
              <tr key={row.title}>
                <td colspan="10">
                  <div className="priceRow">
                    <strong>{row.title}</strong>
                    <div className="pricebox">
                      <span>{priceArr[idx]}원</span>
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
