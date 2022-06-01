import { FaShoppingCart } from 'react-icons/fa';

const Items = ({ listType, state, img, name, price, showModal }) => {
  const priceToString = Number(price).toLocaleString('ko-KR');

  return (
    <div className={listType === 'small' ? 'smallItems' : 'bigItems'}>
      <span className="itemImg">
        {state === 'soldOut' ? <div className="itemTag">품절</div> : ''}
        <img src={img} alt="product thumbnail" />
        <span className="itemButton">
          <button
            onClick={() => {
              showModal(true);
            }}
            className="shopBtn"
          >
            Quick Shop
          </button>
          <button className="cartBtn">
            <FaShoppingCart />
          </button>
        </span>
      </span>
      <div className="description">
        <div className="name">{name}</div>
        <hr />
        <div className="price">￦{priceToString}</div>
      </div>
    </div>
  );
};

export default Items;
