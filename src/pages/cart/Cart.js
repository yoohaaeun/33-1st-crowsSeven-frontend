import React, { useState, useEffect } from 'react';
import CartNotEmpty from './CartNotEmpty';
import CartEmpty from './CartEmpty';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  const cartEmpty = cartList.length === 0;

  useEffect(() => {
    fetch('http://10.58.0.159:8000/carts', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, []);

  return (
    <div className="cart">
      <h1 className="basket">장바구니</h1>
      <div className="tableWrapper">
        <p>국내배송({cartList && cartList.length})</p>
        {cartEmpty ? (
          <CartEmpty />
        ) : (
          <CartNotEmpty
            cartList={cartList}
            setCartList={setCartList}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
