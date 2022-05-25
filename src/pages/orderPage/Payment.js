import React, { useState } from 'react';
import './Payment.scss';

const Payment = () => {
  const [payment, setPayment] = useState();

  const CreditCard = () => {
    return (
      <div>
        <p>
          소액 결제의 경우 PG사 정책에 따라 결제 금액 제한이 있을 수 있습니다.
        </p>
        <div>
          <input type="checkbox" />
          <span>결제수단과 입력정보를 다음에도 사용</span>
        </div>
        <Footer />
      </div>
    );
  };

  const AccountTransfer = () => {
    return (
      <div>
        <table>
          <tr>
            <th>예금주명</th>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
        <p>
          ❗️ 소액 결제의 경우 PG사 정책에 따라 결제 금액 제한이 있을 수
          있습니다.
        </p>
        <Footer />
      </div>
    );
  };

  const MakeADeposit = () => {
    return (
      <div>
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
              <select className="bank" value="1">
                <option value="1">선택해 주세요</option>
                <option value="2">국민은행</option>
                <option value="3">우리은행</option>
                <option value="4">하나은행</option>
              </select>
            </td>
          </tr>
        </table>
        <Footer />
      </div>
    );
  };

  const Footer = () => {
    return (
      <div>
        <dl>
          <dt>Total</dt>
          <dd>101,000원</dd>
        </dl>
        <button>Payment</button>
      </div>
    );
  };

  return (
    <div className="payment">
      <table>
        <th>
          <tr>
            <th scope="row">결제수단</th>
            <td>
              <div onChange={e => setPayment(e.target.value)}>
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
                  id="makeADeposit"
                  value="makeADeposit"
                />
                <label for="makeADeposit">무통장 입금</label>
              </div>
            </td>
          </tr>
        </th>
      </table>
      {payment === 'creditCard' ? <CreditCard /> : null}
      {payment === 'accountTransfer' ? <AccountTransfer /> : null}
      {payment === 'makeADeposit' ? <MakeADeposit /> : null}
    </div>
  );
};

export default Payment;
