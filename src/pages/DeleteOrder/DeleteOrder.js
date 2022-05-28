import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegCalendarAlt } from 'react-icons/fa';
import OrderEmpty from '../OrderCheck/OrderEmpty';
import './DeleteOrder.scss';

const DeleteOrder = () => {
  const navigate = useNavigate();
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let day = `${year}-${month}-${date}`;

  const oneWeek = () => {
    let sixMonthAgo = new Date(today.setDate(today.getDate() - 7));
    let year = sixMonthAgo.getFullYear();
    let month = sixMonthAgo.getMonth() + 1;
    let date = sixMonthAgo.getDate();
    setCalendar(`${year}-${month}-${date}`);
  };

  const oneMonth = () => {
    let sixMonthAgo = new Date(today.setMonth(today.getMonth()));
    let year = sixMonthAgo.getFullYear();
    let month = sixMonthAgo.getMonth();
    let date = sixMonthAgo.getDate();
    setCalendar(`${year}-${month}-${date}`);
  };

  const threeMonth = () => {
    let threeMonthAgo = new Date(today.setMonth(today.getMonth() - 2));
    let year = threeMonthAgo.getFullYear();
    let month = threeMonthAgo.getMonth();
    let date = threeMonthAgo.getDate();
    setCalendar(`${year}-${month}-${date}`);
  };

  const sixMonth = () => {
    let sixMonthAgo = new Date(today.setMonth(today.getMonth() - 5));
    let year = sixMonthAgo.getFullYear();
    let month = sixMonthAgo.getMonth();
    let date = sixMonthAgo.getDate();
    setCalendar(`${year}-${month}-${date}`);
  };

  const [calendar, setCalendar] = useState(day);

  const goToOrderCheck = () => {
    navigate('../orderCheck');
  };

  return (
    <div>
      <main className="orderCheck">
        <h1 className="title">주문 조회</h1>
        <section className="orderCheckBox">
          <div className="line1" />
          <div className="line2" />
          <div className="checkBtnBox">
            <div className="checkBtn3" onClick={goToOrderCheck}>
              주문내역조회(0)
            </div>
            <div className="checkBtn4">취소/반품/교환내역(0)</div>
          </div>
        </section>
        <section className="dateBox">
          <div className="dayBtn">
            <button
              onClick={() => {
                setCalendar(day);
              }}
            >
              오늘
            </button>
            <button onClick={oneWeek}>1주일</button>
            <button onClick={oneMonth}>1개월</button>
            <button onClick={threeMonth}>3개월</button>
            <button onClick={sixMonth}>6개월</button>
          </div>
          <div className="calendar1">{calendar}</div>
          <FaRegCalendarAlt className="calendarIcon" />
          <div className="dash">-</div>
          <div className="calendar1">{day}</div>
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
        </section>
        <div className="itemDescription">
          <p className="orderItemDescription">주문 상품 정보</p>
        </div>
        <div className="orderCart">
          <div className="orderCartWrapper">
            <OrderEmpty />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeleteOrder;
