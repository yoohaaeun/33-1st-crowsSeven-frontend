import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegCalendarAlt } from 'react-icons/fa';
import './DeleteOrder.scss';

const DeleteOrder = () => {
  const navigate = useNavigate();

  const goToOrderCheck = () => {
    navigate('../ordercheck');
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
        </section>
      </main>
    </div>
  );
};

export default DeleteOrder;
