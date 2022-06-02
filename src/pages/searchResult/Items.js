import { FaShoppingCart } from 'react-icons/fa';

const Items = ({ listType, img, name, itemPrice }) => {
  return (
    <div className={listType === 'small' ? 'smallItems' : 'bigItems'}>
      <span className="itemImg">
        <img src={img} alt="product thumbnail" />
        <span className="itemButton">
          <button className="shopBtn">Quick Shop</button>
          <button className="cartBtn">
            <FaShoppingCart />
          </button>
        </span>
      </span>
      <div className="description">
        <div className="name">{name}</div>
        <hr />
        <div className="price">{itemPrice}</div>
      </div>
    </div>
  );
};

export default Items;
