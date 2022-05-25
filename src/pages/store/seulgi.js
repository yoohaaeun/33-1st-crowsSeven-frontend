import { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import PageList from './PageList';
import Items from './Items';
import './seulgi.scss';

const Store = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('/Data/ITEM_LIST.json')
      .then(res => res.json())
      .then(function (result) {
        return setList(result);
      });
  }, []);

  return (
    <div>
      <Nav />
      <div className="store">
        <section>
          <h2>전체상품</h2>
          <div className="itemCategory">
            <div className="itemAmount">
              <b>{list.length}</b>
              <span>개의 상품이 있습니다.</span>
            </div>
            <div className="itemSort">
              <button>신상품</button>
              <button>상품명</button>
              <button>낮은가격</button>
              <button>높은가격</button>
              <button>4열</button>
              <button>2열</button>
            </div>
          </div>
          <div className="itemList">
            {list.map(({ id, state, itemThumbnail, itemName, price }) => {
              return (
                <Items
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
    </div>
  );
};

export default Store;
