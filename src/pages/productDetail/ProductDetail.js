import './ProductDetail.scss';
import Nav from '../../components/Nav/Nav';
import { FiHeart } from 'react-icons/fi';
import { MdPhotoSizeSelectSmall } from 'react-icons/md';
import { GrFacebook, GrTwitter } from 'react-icons/gr';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { useState, useEffect } from 'react';

const ProductDetail = () => {
  const [list, setList] = useState([]);
  const { itemDetail, itemName, description, price } = list;

  useEffect(() => {
    fetch('/Data/ITEM_LIST.json')
      .then(res => res.json())
      .then(function (result) {
        return setList(result[0]);
      });
  }, []);

  return (
    <div className="productDetail">
      <Nav />
      <section className="imgSide">
        <img src={itemDetail} alt="Product Detail" />
      </section>
      <section className="descriptionSide">
        <div className="sideWrapper">
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
              <div className="inputAmount">
                <input type="number" />
                <div className="amountHandler">
                  <button className="up">
                    <IoMdArrowDropup className="arrow" />
                  </button>
                  <button className="down">
                    <IoMdArrowDropdown className="arrow" />
                  </button>
                </div>
              </div>
            </div>
            <div className="totalPrice">
              TOTAL :<span>{price}</span> (1개)
            </div>
            <div className="buyBtn">
              <button className="buy">구매하기</button>
              <button className="cart">장바구니</button>
            </div>
            <button className="wishList">
              <FiHeart />
              <span>WISH LIST</span>
            </button>
            <div className="aboutItemBtn">
              <span>
                <button>상품후기 (5)</button>
                <button>상품문의 (0)</button>
              </span>
              <button className="size">
                <MdPhotoSizeSelectSmall className="sizeImg" />
                SIZE
              </button>
            </div>
            <div className="snsBtn">
              <GrFacebook className="facebookBtn" />
              <GrTwitter className="twitterBtn" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
