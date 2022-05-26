const Items = ({ listType, state, img, name, itemPrice }) => {
  return (
    <div className={!listType ? 'items' : 'bigItems'}>
      <span className="itemImg">
        {state === 'soldOut' ? <div className="itemTag">품절</div> : ''}
        <img src={img} alt="product thumbnail" />
        <span className="itemButton">
          <button className="shop">Quick Shop</button>
          <button className="cart">Cart</button>
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
