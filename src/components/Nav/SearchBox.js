import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import './SearchBox.scss';

const SearchBox = ({ isSearch, handleSearchClick }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = e => {
    const queryString = `?keyword=${search}`;
    navigate(`/search${queryString}`);
    handleSearchClick();
    e.preventDefault();
  };

  return (
    <>
      <GrClose onClick={handleSearchClick} className="searchClose" />
      <section className={isSearch ? 'searchBox' : 'searchBox opacity'}>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="SEARCH" onChange={handleChange} />
        </form>
        <span>검색어 입력후에 엔터를 누르세요.</span>
      </section>
    </>
  );
};

export default SearchBox;
