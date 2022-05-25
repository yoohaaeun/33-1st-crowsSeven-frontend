import React, { useState, useEffect } from 'react';
import './Payment.scss';

const Payment = () => {
  const [payment, setPayment] = useState();

  return (
    <div className="payment">
      <table>
        <th>
          <tr>
            <th scope="row">결제수단</th>
            <td>
              <input type="radio" name="payment" id="apple" />
              <label for="apple">카드 결제</label>
            </td>
            <td>
              <input type="radio" name="payment" id="mango" />
              <label for="mango">실시간 계좌이체</label>
            </td>
            <td>
              <input type="radio" name="payment" id="banana" />
              <label for="banana">무통장 입금</label>
            </td>
          </tr>
        </th>
      </table>
    </div>
  );
};

export default Payment;
