import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import './Cart.scss';
=======
>>>>>>> 5d4e417db194fdf73ff5306c87c20883147b4afe
import CartNotEmpty from './CartNotEmpty';
import CartEmpty from './CartEmpty';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartEmpty = cartList.length === 0;

  useEffect(() => {
    fetch('/data/cartList.JSON')
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, []);

  return (
    <div className="cart">
      <h1 className="basket">장바구니</h1>
      <div className="tableWrapper">
        <p>국내배송({cartList.length})</p>
        {cartEmpty ? <CartEmpty /> : <CartNotEmpty cartList={cartList} />}
      </div>
    </div>
  );
};

export default Cart;
