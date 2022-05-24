import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoSearch } from 'react-icons/go';
import { BsHandbag, BsInstagram, BsYoutube } from 'react-icons/bs';
import { useState } from 'react';
import Logo from './Logo';
import SearchBox from './SearchBox';
import RightBoxNav from './RightBoxNav';
import './Nav.scss';

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
          <div className="navTextList">
            ABOUT
            <div className="navTextListInfo">
              <li>STORE</li>
              <li>COMPANY</li>
              <li>CONTACT</li>
              <li>STOCKIST</li>
            </div>
          </div>

          <div className="navTextList">
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
          </div>
          <div className="navTextList">
            JOURNAL
            <div className="navTextListInfo">
              <li>MAGAZINE</li>
            </div>
          </div>
          <div className="navTextList">
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
          </div>
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
