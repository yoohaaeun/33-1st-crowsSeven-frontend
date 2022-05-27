import { CgViewSplit } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import { MdCalendarViewMonth } from 'react-icons/md';
import Nav from '../../components/Nav/Nav';
import PageList from './PageList';
import Items from './Items';
import './Store.scss';

const Store = () => {
  const [items, setItems] = useState([]);
  const [listType, setListType] = useState('small');

  useEffect(() => {
    fetch('/data/ITEM_LIST.json')
      .then(res => res.json())
      .then(result => setItems(result));
  }, []);

  const changeBigList = e => {
    setListType('big');
  };

  const changeSmallList = e => {
    setListType('small');
  };

  return (
    <>
      <Nav />
      <div className="store">
        <section>
          <h2>전체상품</h2>
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
            {items.map(({ id, state, itemThumbnail, itemName, price }) => {
              return (
                <Items
                  listType={listType}
                  key={id}
                  state={state}
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
    </>
  );
};

export default Store;
