import { useState, useEffect } from 'react';
import './Store.scss';

const Store = () => {
  const [list, setList] = useState([]);
  // const [listType, setListtype] = useState('');

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
        <h2>전체상품</h2>
        <div className="itemCategory">
          <div className="itemAmount">
            <b>{list.length}</b>
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
  // const widthChangeFour = e => {
  //   console.log(e.target);
  // };

  // const widthChangeTwo = e => {
  //   console.log(e.target);
  // };

  return (
    <div className="itemSort">
      <button>신상품</button>
      <button>상품명</button>
      <button>낮은가격</button>
      <button>높은가격</button>
      {/* onClick={widthChangeFour} */}
      <button>4열</button>
      {/* onClick={widthChangeTwo} */}
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
        <ItemHoverButton />
      </span>
      <div class="description">
        <div class="name">{name}</div>
        <hr />
        <div class="price">{itemPrice}</div>
      </div>
    </div>
  );
};
// onClick버튼에 따라 다른 Component 보여주기

const ItemHoverButton = () => {
  return (
    <span className="itemButton">
      <button className="shop">Quick Shop</button>
      <button className="cart">Cart</button>
    </span>
  );
};

const PageList = () => {
  return (
    <div className="pageList">
      <button>FIRST</button>
      <button>
        <span className="leftBtn">{`<`}</span>PREV
      </button>
      <ul>
        <li>
          <button className="select">1</button>
        </li>
        <li>
          <button>2</button>
        </li>
        <li>
          <button>3</button>
        </li>
      </ul>
      <button>
        NEXT<span className="rightBtn">{`>`}</span>
      </button>
      <button>LAST</button>
    </div>
  );
};

export default Store;
