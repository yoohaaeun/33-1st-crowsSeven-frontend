import React, { useState, useEffect } from 'react';
import './Cart.scss';
import Nav from '../../components/Nav/Nav';
import CartUI from './CartUI';
import CartEmptyUI from './CartEmptyUI';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const ITEM_TOTAL = cartList.length;
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
          <p>국내배송({ITEM_TOTAL})</p>
          {!cartEmpty ? (
            <CartUI cartList={cartList} itemTotal={ITEM_TOTAL} />
          ) : (
            <CartEmptyUI />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
