const Items = ({ state, img, name, itemPrice }) => {
  return (
    <div className="items">
      <span className="itemImg">
        <span className="itemTag">{state}</span>
        <img src={img} alt="img" />
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
