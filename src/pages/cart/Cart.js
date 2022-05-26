import React, { useState, useEffect } from 'react';
import './Cart.scss';
import Nav from '../../components/Nav/Nav';
import CartNotEmpty from './CartNotEmpty';
import CartEmpty from './CartEmpty';

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
    <>
      <Nav />
      <div className="cart">
        <h1 className="basket">장바구니</h1>
        <div className="tableWrapper">
          <p>국내배송({cartList.length})</p>
          {cartEmpty ? <CartEmpty /> : <CartNotEmpty cartList={cartList} />}
        </div>
      </div>
    </>
  );
};

export default Cart;
