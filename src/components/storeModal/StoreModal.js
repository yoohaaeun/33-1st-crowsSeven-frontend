import { AiFillCloseSquare } from 'react-icons/ai';
import './StoreModal.scss';

const StoreModal = () => {
  return (
    <div className="storeModal">
      <div className="modalBackground" />
      <div className="modalComponent">
        <AiFillCloseSquare className="closeBtn" />
        <section className="imgSection">
          <span>product thumbnail</span>
        </section>
        <section className="infoSection">
          <h2>itemName</h2>
          <hr />
          <table>
            <tr>
              <th>상품 간략설명</th>
              <td>description</td>
            </tr>
            <tr>
              <th>판매가</th>
              <td>price</td>
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
              <td>
                <button>facebook</button>
                <button>twitter</button>
              </td>
            </tr>
          </table>
          <hr />
          <div>(최소주문수량 1개 이상)</div>
          <div>수량을 선택해주세요.</div>
          <hr />
          <div>
            <span>itemName</span>
            <input type="Number" />
            <span>price</span>
          </div>
          <hr />
          <div>총 상품금액(수량) : ￦ price ( 개)</div>
          <div>
            <button>BUY NOW</button>
            <button>CART</button>
          </div>
          <div>+ WISH LIST</div>
        </section>
      </div>
    </div>
  );
};

export default StoreModal;
