import React, { useState } from 'react';
import './Payment.scss';

const CreditCard = () => {
  return (
    <div className="creditCard">
      <p>
        소액 결제의 경우 PG사 정책에 따라 결제 금액 제한이 있을 수 있습니다.
      </p>
      <div>
        <input type="checkbox" id="check" />
        <label for="check">결제수단과 입력정보를 다음에도 사용</label>
      </div>
    </div>
  );
};

const AccountTransfer = () => {
  return (
    <div className="accountTransfer">
      <table>
        <tr>
          <th>예금주명</th>
          <td>
            <input type="text" />
          </td>
        </tr>
      </table>
      <p>
        ❗️ 소액 결제의 경우 PG사 정책에 따라 결제 금액 제한이 있을 수 있습니다.
      </p>
    </div>
  );
};

const Deposit = () => {
  return (
    <div className="deposit">
      <table>
        <tr>
          <th>입금자명</th>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <th>입금은행</th>
          <td>
            <select className="bank">
              <option value="1">선택해 주세요</option>
              <option value="2">국민은행</option>
              <option value="3">우리은행</option>
              <option value="4">하나은행</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  );
};

const Payment = () => {
  const [payment, setPayment] = useState();

  return (
    <div className="payment">
      <table>
        <th>
          <tr className="paymentWrapper">
            <th scope="row" className="PaymentMethod">
              결제수단
            </th>
            <td>
              <div
                onChange={e => setPayment(e.target.value)}
                className="paymentInputBox"
              >
                <input
                  type="radio"
                  name="payment"
                  id="creditCard"
                  value="creditCard"
                />
                <label for="creditCard">카드 결제</label>

                <input
                  type="radio"
                  name="payment"
                  id="accountTransfer"
                  value="accountTransfer"
                />
                <label for="accountTransfer">실시간 계좌이체</label>

                <input
                  type="radio"
                  name="payment"
                  id="deposit"
                  value="deposit"
                />
                <label for="deposit">무통장 입금</label>
              </div>
            </td>
          </tr>
        </th>
      </table>
      {payment === 'creditCard' && <CreditCard />}
      {payment === 'accountTransfer' && <AccountTransfer />}
      {payment === 'deposit' && <Deposit />}
    </div>
  );
};

export default Payment;
