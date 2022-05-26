import React from 'react';
import './OrderInfo.scss';

const Orderinfo = () => {
  return (
    <div className="orderinfo">
      <table>
        <tr>
          <th scope="row">배송지 선택</th>
          <td className="destinationBox">
            <input type="radio" name="destination" id="optional1" />
            <label for="optional1">회원 정보와 동일</label>

            <input type="radio" name="destination" id="optional2" />
            <label for="optional2">새로운 배송지</label>

            <input type="radio" name="destination" id="optional3" />
            <label for="optional3">최근배송지 : name</label>

            <button className="addressBookBtn">주소록 보기</button>
          </td>
        </tr>
        <tr>
          <th scope="row">받으시는 분</th>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <th scope="row">주소</th>
          <div className="addressBox">
            <td className="zipcode">
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
          <th scope="row">휴대전화</th>
          <td>
            <input type="tel" />
          </td>
        </tr>
        <tr>
          <th scope="row">이메일</th>
          <td>
            <input type="email" />
          </td>
        </tr>
        <tr>
          <th scope="row">배송메세지</th>
          <td>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="messageBox"
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Orderinfo;
