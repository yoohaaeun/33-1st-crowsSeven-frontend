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
          <FaRegCalendarAlt className="calendarIcon" />
          <div className="dash">-</div>
          <div className="calendar1">2022-02-25</div>
          <FaRegCalendarAlt className="calendarIcon" />
          <button className="inquire">조회</button>
        </section>
        <section className="orderDescription">
          <div>
            ㆍ기본적으로 최근 3개월간의 자료가 조회되며, 기간 검색시 지난
            주문내역을 조회하실 수 있습니다.
          </div>
          <div>
            ㆍ주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수
            있습니다.
          </div>
          <div>
            ㆍ취소/교환/반품 신청은 주문 완료일 기준 7일까지 가능합니다.
          </div>
        </section>
      </main>
    </div>
  );
};

export default OrderCheck;
