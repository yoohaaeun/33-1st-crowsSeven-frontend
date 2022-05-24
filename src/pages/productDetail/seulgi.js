import './seulgi.scss';
import { useState, useEffect } from 'react';

const ProductDetail = () => {
  const [list, setList] = useState([]);
  const { itemDetail, itemName, description, price } = list[0];
  useEffect(() => {
    fetch('/Data/ITEM_LIST.json')
      .then(res => res.json())
      .then(function (result) {
        return setList(result);
      });
  }, []);

  return (
    <div className="productDetail">
      <section className="leftSide">
        <img src={itemDetail} alt="img" />
      </section>
      <section className="rightSide">
        <div className="sideDetail">
          <h2>{itemName}</h2>
          <div className="description">
            <ul>
              <li className="description">{description}</li>
              <li className="price">{price}</li>
              <li>택배</li>
              <li>￦3,000 (￦50,000 이상 구매 시 무료)</li>
            </ul>
            <div className="amountTab">
              {itemName}
              <div>
                <input type="number" />
                <button>+</button>
                <button>-</button>
              </div>
            </div>
            <div className="totalPrice">
              TOTAL :<span>{price}</span> (1개)
            </div>
            <div className="buyBtn">
              <button>구매하기</button>
              <button>장바구니</button>
            </div>
            <button>WISH LIST</button>
            <div className="aboutItemBtn">
              <button>상품후기 (5)</button>
              <button>상품문의 (0)</button>
              <button>SIZE</button>
            </div>
            <div className="snsBtn">
              <button>facebook</button>
              <button>twitter</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
