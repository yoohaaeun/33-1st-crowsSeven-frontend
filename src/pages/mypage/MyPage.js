import React, { useState, useEffect } from 'react';
import './MyPage.scss';

const MyPage = () => {
  const [myPageList, setMyPageList] = useState([]);

  useEffect(() => {
    fetch('/data/cartList.JSON')
      .then(res => res.json())
      .then(data => {
        setMyPageList(data);
      });
  }, []);

  return (
    <div className="MyPage">
      <h1 className="title">마이 페이지</h1>
      <section className="myPageBox">
        <div className="photoBox" />
      </section>
    </div>
  );
};

export default MyPage;
