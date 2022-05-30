import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoSearch } from 'react-icons/go';
import { BsHandbag, BsInstagram, BsYoutube } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SearchBox from './SearchBox';
import RightBoxNav from './RightBoxNav';
import './Nav.scss';

const Nav = () => {
  const [isToggle, setToggle] = useState(true);
  const [isSearch, setIsSearch] = useState(false);

  const navigate = useNavigate();

  const handleMoveStore = () => {
    navigate('/store');
  };

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
              {ABOUT.map(({ id, listName }) => (
                <li key={id}>{listName}</li>
              ))}
            </div>
          </div>

          <div className="navTextList">
            <span onClick={handleMoveStore}>STORE</span>
            <div className="navTextListInfo">
              {STORE.map(({ id, listName }) => (
                <li key={id}>{listName}</li>
              ))}
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
              {COMMUNITY.map(({ id, listName }) => (
                <li key={id}>{listName}</li>
              ))}
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

const ABOUT = [
  {
    id: 1,
    listName: 'STORE',
  },
  {
    id: 2,
    listName: 'COMPANY',
  },
  {
    id: 3,
    listName: 'CONTACT',
  },
  {
    id: 4,
    listName: 'STOCKIST',
  },
];
const STORE = [
  {
    id: 1,
    listName: 'RE-STOCK',
  },
  {
    id: 2,
    listName: '카탈리나',
  },
  {
    id: 3,
    listName: '컵',
  },
  {
    id: 4,
    listName: '플레이트',
  },
  {
    id: 5,
    listName: '보울',
  },
  {
    id: 6,
    listName: '키친웨어',
  },
  {
    id: 7,
    listName: '보울',
  },
];
const COMMUNITY = [
  {
    id: 1,
    listName: 'NOTICE',
  },
  {
    id: 2,
    listName: 'Q&A',
  },
  {
    id: 3,
    listName: 'REVIEW',
  },
];

export default Nav;
