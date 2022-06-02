import React, { useState, useEffect } from 'react';
import CartTable from './CartTable';
import Orderinfo from './OrderInfo';

import './OrderPage.scss';

const OrderPage = () => {
  const [orderItemList, setOrderItem] = useState([]);

  const fetchCartList = () => {
    fetch('http://10.58.1.252:8000/carts/', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then(res => res.json())
      .then(res => {
        setOrderItem(res.results);
        console.log('results', res.results);
      })
      .catch(e => {
        console.log('에러', e);
      });
  };

  // const fetchCartList = () => {
  //   fetch('http://10.58.0.138:8000/carts/')
  //     .then(res => res.json())
  //     .then(data => {
  //       setCartList(data);
  //     });
  // };

  useEffect(() => {
    fetchCartList();
  }, []);

  // useEffect(() => {
  //   fetch('/data/cartListData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setOrderItem(data);
  //     });
  // }, []);

  const price = orderItemList
    .map(item => item.price * item.qty)
    .reduce((a, b) => a + b, 0);
  const shipping = price >= 50000 ? 0 : 3000;
  const total = price + shipping;

  return (
    <div className="orderPage">
      <h1>주문서작성</h1>
      <CartTable orderItemList={orderItemList} />
      <Orderinfo
        shipping={shipping}
        total={total}
        orderItemList={orderItemList}
      />
    </div>
  );
};

export default OrderPage;
