import { AiFillCloseSquare } from 'react-icons/ai';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { GrFacebook, GrTwitter } from 'react-icons/gr';
import { useState } from 'react';
import './StoreModal.scss';

const StoreModal = ({ items, closeModal }) => {
  const [amount, setAmount] = useState(1);
  const { img, itemName, price } = items;

  const currentAmount = e => {
    const amount = e.target;
    setAmount(amount);
  };

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    setAmount(amount - 1);
    if (amount <= 1) {
      alert('주문 수량은 1 이상이어야 합니다.');
      setAmount(1);
    }
  };

  const priceToString = Number(price).toLocaleString('ko-KR');
  const calculateTotalPrice = price * amount;
  const totalPriceToString = calculateTotalPrice.toLocaleString('ko-KR');

  const handleWishList = () => {
    alert('로그인 후 관심상품 등록을 해주세요.');
  };

  return (
    <div className="storeModal">
      <div className="modalBackground" />
      <div className="modalComponent">
        <AiFillCloseSquare
          onClick={() => {
            closeModal(false);
          }}
          className="closeBtn"
        />
        <section className="imgSection">
          <img src={img} alt="Product Thumbnail" />
        </section>
        <section className="infoSection">
          <h2 className="itemName">{itemName}</h2>
          <hr />
          <table>
            <tr className="description">
              <th>상품 간략설명</th>
              <td>description</td>
            </tr>
            <tr className="price">
              <th>판매가</th>
              <td>￦{priceToString}</td>
            </tr>
            <tr>
              <th>배송 방법</th>
              <td>택배</td>
            </tr>
            <tr>
              <th>배송비</th>
              <td>￦3,000 (￦50,000 이상 구매 시 무료)</td>
            </tr>
            <tr>
              <th>SNS 상품홍보</th>
              <td className="snsBtn">
                <GrFacebook className="facebookBtn" />
                <GrTwitter className="twitterBtn" />
              </td>
            </tr>
          </table>
          <hr />

          <div className="amountTab">
            {itemName}
            <div className="inputAmount">
              <div
                className="amountInput"
                onChange={currentAmount}
                type="number"
              >
                <span>{amount}</span>
              </div>
              <div className="amountHandler">
                <button onClick={increaseAmount} className="up">
                  <IoMdArrowDropup className="arrow" />
                </button>
                <button onClick={decreaseAmount} className="down">
                  <IoMdArrowDropdown className="arrow" />
                </button>
              </div>
            </div>
            <span>￦{totalPriceToString}</span>
          </div>
          <hr />
          <div className="totalPrice">
            총 상품금액({amount}) :<span> ￦{totalPriceToString} </span>(
            {amount}개)
          </div>
          <div className="totalBuyBtn">
            <button className="buyBtn">BUY NOW</button>
            <button className="cartBtn">CART</button>
          </div>
          <button onClick={handleWishList} className="wishList">
            <span>+ WISH LIST</span>
          </button>
        </section>
      </div>
    </div>
  );
};

export default StoreModal;
