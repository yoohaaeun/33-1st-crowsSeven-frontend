import { CgViewSplit } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MdCalendarViewMonth } from 'react-icons/md';
import PageList from '../store/PageList';
import Items from './Items';
import '../store/Store.scss';

const SearchResult = () => {
  const [items, setItems] = useState([]);
  const [listType, setListType] = useState('small');
  const location = useLocation();

  useEffect(() => {
    fetch(`http://10.58.2.129:8000/products/search${location.search}`)
      .then(res => res.json())
      .then(result => {
        setItems(result.products);
      });
  }, [location]);

  const changeBigList = () => {
    setListType('big');
  };

  const changeSmallList = () => {
    setListType('small');
  };

  return (
    <div className="store">
      <section>
        <h2>Search</h2>
        <div className="itemCategory">
          <div className="itemAmount">
            <b>{items.length}</b>
            <span>개의 상품이 있습니다.</span>
          </div>
          <div className="itemSort">
            <button>신상품</button>
            <button>상품명</button>
            <button>낮은가격</button>
            <button>높은가격</button>
            <button onClick={changeSmallList} className="icon">
              <MdCalendarViewMonth />
            </button>
            <button onClick={changeBigList} className="icon">
              <CgViewSplit />
            </button>
          </div>
        </div>
        <div className="itemList">
          {items.map(({ id, itemThumbnail, itemName, price }) => {
            return (
              <Items
                listType={listType}
                key={id}
                img={itemThumbnail}
                name={itemName}
                itemPrice={price}
              />
            );
          })}
        </div>
        <PageList />
      </section>
    </div>
  );
};

export default SearchResult;
