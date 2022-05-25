import React from 'react';
import './ReviewPage.scss';

const ReviewPage = () => {
  return (
    <div className="reviewContainer">
      <header className="slideRight">
        <h1>상품후기</h1>
      </header>
      <main className="productList">
        <h3>모든리뷰</h3>
        <table>
          <thead>
            <tr>
              <th>NO</th>
              <th>PRODUCT</th>
              <th>SUBJECT</th>
              <th>NAME</th>
              <th>DATE</th>
              <th>HIT</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            <tr></tr>
          </tbody>
        </table>
      </main>
      <section className="btnSearch">
        <article className="prevNextBtn">
          <ul>
            <li></li>
          </ul>
        </article>
        <article className="searchText">
          <span>검색어</span>
          <fieldset className="searchField">
            <select className="searchPeriod">
              <option>일주일</option>
              <option>한달</option>
              <option>세달</option>
              <option>전체</option>
            </select>
            <select className="searchOption">
              <option>제목</option>
              <option>내용</option>
              <option>글쓴이</option>
              <option>아이디</option>
              <option>별명</option>
              <option>상품정보</option>
            </select>
            <input className="searchInput" type="text" />
            <button className="searchBtn">찾기</button>
          </fieldset>
        </article>
      </section>
    </div>
  );
};

export default ReviewPage;
