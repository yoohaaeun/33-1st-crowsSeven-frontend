import React from 'react';
import OrderItem from './OrderItem';


const itemTotal = CART_LIST.length;
const Orderpage = () => {
  return (
    <div>
      <h1>주문서작성</h1>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Product</th>
            <th>Info</th>
            <th>Price</th>
            <th>Qty.</th>
            <th>Mileage</th>
            <th>Delivery</th>
            <th>Charge</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {CART_LIST.map((item, idx) => {
            return (
              <OrderItem key={idx} item={item} total={itemTotal} idx={idx} />
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="9">
              [기본배송] 상품구매금액 48,000 + 배송비 3,000 = 합계 : 51,000원
            </td>
          </tr>
        </tfoot>
      </table>
      <table>
        <tr>
          <th scope="row">배송지 선택</th>
          <td>
            <input type="radio" name="red" id="apple" />
            <label for="apple">회원 정보와 동일</label>
          </td>
          <td>
            <input type="radio" name="red" id="mango" />
            <label for="mango">새로운 배송지</label>
          </td>
          <td>
            <input type="radio" name="red" id="banana" />
            <label for="banana">최근배송지 : 유하은</label>
          </td>
          <td>
            <button>주소록 보기</button>
          </td>
        </tr>
        <tr>
          <th scope="row">받으시는 분❤️‍🔥</th>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <th scope="row">주소❤️‍🔥</th>
          <div>
            <td>
              <input type="text" />
              <button>우편번호</button>
            </td>
            <td>
              <input type="text" />
              <span>기본주소</span>
            </td>
            <td>
              <input type="text" />
              <span>나머지주소(선택입력가능)</span>
            </td>
          </div>
        </tr>
        <tr>
          <th scope="row">휴대전화❤️‍🔥</th>
          <td>
            <input type="tel" />
          </td>
        </tr>
        <tr>
          <th scope="row">이메일❤️‍🔥</th>
          <td>
            <input type="email" />
          </td>
        </tr>
        <tr>
          <th scope="row">배송메세지</th>
          <td>
            <textarea name="" id="" cols="30" rows="10" />
          </td>
        </tr>
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
      </table>
      <div>
        <div>
          <span>Total</span>
          <span>51,000</span>
          <span>원</span>
        </div>
        <button>Payment</button>
      </div>
    </div>
  );
};

export default Orderpage;


//

import React from 'react';
import './OrderItem.scss';

const Cartitem = ({ idx, item, total }) => {
  return (
    <tr className="cartItem">
      <td className="checkBox">
        <input type="checkbox" />
      </td>
      <td>
        <img src={item.product} alt={`${item.info}`} />
      </td>
      <td>{item.info}</td>
      <td>￦{item.price}</td>
      <td className="quantity">
        <div>
          <input type="number" />
          <button>Modify</button>
        </div>
      </td>
      <td>-</td>
      <td>기본배송</td>
      {/* {idx === 0 && (
        <td rowSpan={total} className="charge">
          3000원
        </td>
      )} */}
      <td className="charge">
        3000원 <br />
        조건
      </td>
      {/* {total < 50000 ? <td className="charge">3000원 <br />조건</td> : <td className="charge">무료배송</td>} */}
      <td>￦21,000</td>
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

export default Cartitem;



const OrderItem = ({ idx, item }) => {
  return (
    <tr className="cartItem">
      <td className="checkBox">
        <input type="checkbox" />
      </td>
      <td>
        <img src={item.product} alt={`${item.info}`} />
      </td>
      <td>{item.info}</td>
      <td>￦{item.price}</td>
      <td className="quantity">
        <div>
          <input type="number" />
          <button>Modify</button>
        </div>
      </td>
      <td>-</td>
      <td>기본배송</td>
     <td className="charge">
        3000원 <br />
        조건
      </td>
      <td>￦21,000</td>
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


<div className="cartTable">
<table>
  <thead>
    <tr>
      <th>
        <input type="checkbox" />
      </th>
      {tabelHeader.map(header => {
        return <th>{header}</th>;
      })}
    </tr>
  </thead>
  <tbody>
    {cartItem.map((item, idx) => {
      return <OrderItem key={idx} item={item} idx={idx} />;
    })}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="9">
        [기본배송] 상품구매금액 48,000 + 배송비 3,000 = 합계 : 51,000원
      </td>
    </tr>
  </tfoot>
</table>
</div>