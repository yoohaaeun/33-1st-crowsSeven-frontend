import React from 'react';
import './OrderCheck.scss';
import { FaRegCalendarAlt } from 'react-icons/fa';

const OrderCheck = () => {
  return (
    <div>
      <main className="orderCheck">
        <h1 className="title">주문 조회</h1>
        <section className="orderCheckBox">
          <div className="line1" />
          <div className="line2" />
          <div className="checkBtnBox">
            <div className="checkBtn1">주문내역조회(1)</div>
            <div className="checkBtn2">취소/반품/교환내역(0)</div>
          </div>
        </section>
        <section className="dateBox">
          <select className="orderStatus">
            <option>전체 주문처리상태</option>
            <option>입금전</option>
            <option>배송준비중</option>
            <option>배송중</option>
            <option>배송완료</option>
            <option>취소</option>
            <option>교환</option>
            <option>반품</option>
          </select>
          <div className="divideLine">|</div>
          <div className="dayBtn">
            <button>오늘</button>
            <button>1주일</button>
            <button>1개월</button>
            <button>3개월</button>
            <button>6개월</button>
          </div>
          <div className="calendar1">2022-02-25</div>
          <FaRegCalendarAlt />
        </section>
      </main>
    </div>
  );
};

export default OrderCheck;
