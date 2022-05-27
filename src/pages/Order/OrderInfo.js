import React, { useState } from 'react';
import './OrderInfo.scss';

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

const OrderInfo = ({ total }) => {
  const [inputValue, setInputValue] = useState({
    name: '',
    zipcode: '',
    address: '',
    number: '',
    email: '',
  });

  console.log(inputValue);

  const [payment, setPayment] = useState();
  const [disabled, setDisabled] = useState(true);

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onBtnActive = () => {
    inputValue.email.includes('@') && inputValue.name.length > 0
      ? setDisabled(false)
      : setDisabled(true);
  };

  return (
    <div className="orderInfo">
      <form action="" autocomplete="off">
        <div className="destinationBox">
          <div className="title">배송지 선택</div>
          <div className="radiobox">
            <div className="radio">
              <input type="radio" name="destination" id="optional1" />
              <label for="optional1">회원 정보와 동일</label>
            </div>

            <div className="radio">
              <input type="radio" name="destination" id="optional2" />
              <label for="optional2">새로운 배송지</label>
            </div>

            <div className="radio">
              <input type="radio" name="destination" id="optional3" />
              <label for="optional3">최근배송지 : name</label>
            </div>
          </div>

          <button className="addressBookBtn">주소록 보기</button>
        </div>

        <div className="row">
          <div className="title">받으시는 분</div>
          <input
            type="text"
            onChange={handleInput}
            onKeyUp={onBtnActive}
            name="name"
          />
        </div>

        <div className="row">
          <div className="title">주소</div>
          <div className="addressBox">
            <div>
              <input
                type="text"
                onChange={handleInput}
                onKeyUp={onBtnActive}
                name="zipcode"
              />
              <span>우편주소</span>
            </div>
            <div>
              <input
                type="text"
                onChange={handleInput}
                onKeyUp={onBtnActive}
                name="address"
              />
              <span>기본주소</span>
            </div>
            <div>
              <input type="text" />
              <span>나머지주소(선택입력가능)</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="title">휴대전화</div>
          <input
            type="text"
            onChange={handleInput}
            onKeyUp={onBtnActive}
            name="number"
          />
        </div>

        <div className="row">
          <div className="title">이메일</div>
          <div>
            <input
              type="email"
              onChange={handleInput}
              onKeyUp={onBtnActive}
              name="email"
            />
            <div className="emailText">
              <p>
                이메일을 통해 주문처리과정을 보내드립니다. <br /> 이메일
                주소란에는 반드시 수신가능한 이메일주소를 입력해 주세요.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="title">배송메세지</div>
          <textarea type="text" onChange={handleInput} />
        </div>

        <div
          onChange={e => setPayment(e.target.value)}
          className="paymentInputBox"
        >
          <div className="paymentBox">
            <div className="title">결제수단</div>
            <div className="radiobox">
              <div className="radio">
                <input
                  type="radio"
                  name="payment"
                  id="creditCard"
                  value="creditCard"
                />
                <label>카드 결제</label>
              </div>

              <div className="radio">
                <input
                  type="radio"
                  name="payment"
                  id="accountTransfer"
                  value="accountTransfer"
                />
                <label for="accountTransfer">실시간 계좌이체</label>
              </div>

              <div className="radio">
                <input
                  type="radio"
                  name="payment"
                  id="deposit"
                  value="deposit"
                />
                <label for="deposit">무통장 입금</label>
              </div>
            </div>
          </div>

          {payment === 'creditCard' && <CreditCard />}
          {payment === 'accountTransfer' && <AccountTransfer />}
          {payment === 'deposit' && <Deposit />}

          <div className="footer">
            <div className="row">
              <p>Total</p>
              <p>{total}원</p>
            </div>
            <button disabled={disabled}>Payment</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderInfo;
