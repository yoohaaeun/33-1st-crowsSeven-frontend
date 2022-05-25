import { GrClose } from 'react-icons/gr';
import './SearchBox.scss';

const SearchBox = ({ isSearch, handleSearchClick }) => {
  return (
    <>
      <GrClose onClick={handleSearchClick} className="searchClose" />
      <section className={isSearch ? 'searchBox' : 'searchBox opacity'}>
        <input type="text" placeholder="SEARCH" />
        <span>검색어 입력후에 엔터를 누르세요.</span>
      </section>
    </>
  );
};

export default SearchBox;
