import { useState, useEffect } from 'react';
import './seulgi.scss';

const Store = () => {
  const [list, setList] = useState([]);
  const [changeItemList, setChangeItemList] = useState();

  useEffect(() => {
    fetch('/Data/ITEM_LIST.json')
      .then(res => res.json())
      .then(function (result) {
        return setList(result);
      });
  }, []);

  return (
    <div className="Store">
      <section>
        <h1>Category name</h1>
        <div className="itemCategory">
          <div className="itemAmount">
            <b>190</b>
            <span>개의 상품이 있습니다.</span>
          </div>
          <ItemSort />
        </div>
        <div className="itemList">
          {list.map(list => {
            return (
              <Items
                key={list.id}
                img={list.itemThumbnail}
                name={list.itemName}
                itemPrice={list.price}
              />
            );
          })}
        </div>
        <PageList />
      </section>
    </div>
  );
};

const ItemSort = () => {
  return (
    <div className="itemSort">
      <button>신상품</button>
      <button>상품명</button>
      <button>낮은가격</button>
      <button>높은가격</button>
      <button>4열</button>
      <button>2열</button>
      {/* <span>제조사</span> */}
    </div>
  );
};

const Items = ({ img, name, itemPrice }) => {
  return (
    <div className="items">
      <span className="itemImg">
        <img src={img} alt="img" />
        <span className="itemButton">
          <button>Quick Shop</button>
          <button>Cart</button>
        </span>
      </span>
      <div>{name}</div>
      <div>{itemPrice}</div>
    </div>
  );
};

const PageList = () => {
  return (
    <div className="pageList">
      <button>FIRST</button>
      <button>{`< PREV`}</button>
      <ul>
        <li>
          <button>1</button>
        </li>
        <li>
          <button>2</button>
        </li>
        <li>
          <button>3</button>
        </li>
      </ul>
      <button>{`NEXT >`}</button>
      <button>LAST</button>
    </div>
  );
};

export default Store;
