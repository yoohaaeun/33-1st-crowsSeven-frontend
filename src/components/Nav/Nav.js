import React from 'react';
import { GiAtSea, GiHamburgerMenu } from 'react-icons/gi';
import { GoSearch } from 'react-icons/go';
import { BsHandbag, BsInstagram, BsYoutube } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import './Nav.scss';

const SearchBox = ({ handleSearchClick }) => {
  return (
    <>
      <GrClose onClick={handleSearchClick} className="searchClose" />
      <section className="searchBox">
        <input type="text" placeholder="SEARCH" />
        <span>검색어 입력후에 엔터를 누르세요.</span>
      </section>
    </>
  );
};

const Logo = () => {
  return (
    <ul className="logo">
      <GiAtSea className="logoIcon" />
      <div className="logoText">
        <span>CORWSEVEN</span>
        <span>HOME</span>
        <span>SEOUL KOREA</span>
      </div>
    </ul>
  );
};

const RightBoxNav = ({ isToggle, handleClick }) => {
  return (
    <div className={isToggle ? 'rightNavBox widthZero' : 'rightNavBox'}>
      <GrClose onClick={handleClick} className="cancel" />
      <ul className="rightBoxText">
        <li>로그인</li>
        <li>장바구니</li>
        <li>주문조회</li>
        <li>마이쇼핑</li>
        <span>최근 상품</span>
      </ul>
      <div />
    </div>
  );
};

const Nav = () => {
  const [isToggle, setToggle] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const handleClick = () => {
    setToggle(!isToggle);
  };
  const handleSearchClick = () => {
    setIsSearch(!isSearch);
  };
  return (
    <>
      <nav className="nav">
        <ul className="navText">
          <Logo />
          <li className="navTextList">
            ABOUT
            <div className="navTextListInfo">
              <li>STORE</li>
              <li>COMPANY</li>
              <li>CONTACT</li>
              <li>STOCKIST</li>
            </div>
          </li>

          <li className="navTextList">
            STORE
            <div className="navTextListInfo">
              <li>RE-STOCK</li>
              <li>카탈리나</li>
              <li>컵</li>
              <li>플레이트</li>
              <li>보울</li>
              <li>키친웨어</li>
              <li>굿즈</li>
            </div>
          </li>
          <li className="navTextList">
            JOURNAL
            <div className="navTextListInfo">
              <li>MAGAZINE</li>
            </div>
          </li>
          <li className="navTextList">
            COMMUNITY
            <div className="navTextListInfo">
              <li>NOTICE</li>
              <li>Q&A</li>
              <li>REVIEW</li>
              <div className="navTextListIcon">
                <BsInstagram className="insta" />
                <BsYoutube className="youtube" />
              </div>
            </div>
          </li>
          <li className="navTextList">WHOLESALE</li>
        </ul>
        <div className="navIcon">
          <GoSearch onClick={handleSearchClick} />
          <BsHandbag />
          <GiHamburgerMenu onClick={handleClick} />
        </div>
        <RightBoxNav isToggle={isToggle} handleClick={handleClick} />
      </nav>
      {isSearch && (
        <SearchBox isSearch={isSearch} handleSearchClick={handleSearchClick} />
      )}
    </>
  );
};

export default Nav;
