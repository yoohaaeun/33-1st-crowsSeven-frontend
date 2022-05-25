import { useState, useEffect } from 'react';
import './seulgi.scss';
import Nav from '../../components/Nav/Nav';

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
            <ItemSort />
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

const Items = ({ state, img, name, itemPrice }) => {
  // console.log({ state });
  const ItemTag = () => {
    // if ({ state } === 'soldOut') {
    return <span className="itemTag">{state}</span>;
    // }
    // if ({ state } === 'new') {
    //   return <span>신상품</span>;
    // }
    // if ({ state } === 'none') {
    //   return <span>none</span>;
    // }
    // return <span>h2</span>;
    // }
  };

  return (
    <div className="items">
      <span className="itemImg">
        <ItemTag />
        <img src={img} alt="img" />
        <ItemHoverButton />
      </span>
      <div className="description">
        <div className="name">{name}</div>
        <hr />
        <div className="price">{itemPrice}</div>
      </div>
    </div>
  );
};

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
