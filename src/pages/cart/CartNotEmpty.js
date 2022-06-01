import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const TABLE_HEADER = [
  'Product',
  'Info',
  'Price',
  'Qty.',
  'Mileage',
  'Delivery',
  'Charge',
  'Total',
];

const CartNotEmpty = ({
  cartList,
  setCartList,
  checkedList,
  setCheckedList,
  fetchCartList,
}) => {
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    setIsAllChecked(cartList.every(cartItem => checkedList.includes(cartItem)));
  }, [cartList, checkedList]);

  const price = cartList
    .map(item => item.price * item.qty)
    .reduce((a, b) => a + b, 0);
  const shipping = price >= 50000 ? 0 : 3000;
  const total = price + shipping;

  const tableFooter = [
    { title: 'Price', amount: price },
    { title: 'Shipping', amount: shipping },
    { title: 'Total', amount: total },
  ];

  const onChecked = e => {
    if (e.target.checked) {
      setCheckedList(cartList);
      setIsAllChecked(true);
    } else {
      setCheckedList([]);
      setIsAllChecked(false);
    }
  };

  const navigate = useNavigate();

  // 시작❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️

  // ✨ 선택삭제 ✨
  // const onSelectDelete = () => {
  //   const checkedIds = checkedList.map(checkedItem => checkedItem.id);
  //   const query = checkedIds.map(id => `cart_id=${id}`).join('&');
  //   fetch(`http://10.58.0.138:8000/carts/?${query}`, {
  //     method: 'DELETE',
  //     // body: JSON.stringify({
  //     //   cart_item: checkedIds,
  //     // }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       // console.log(result);
  //       if (result.message === 'success') {
  //         fetchCartList();
  //       }
  //     })
  //     .catch(e => {
  //       alert('다시 시도해주세요.');
  //     });
  // };

  const onSelectDelete = () => {
    const checkedIds = checkedList.map(checkedItem => checkedItem.id);
    console.log('checkedIds', checkedIds);
    // const query = checkedIds.map(id => `cart_id=${id}`).join('&');
    fetch(`http://10.58.0.138:8000/carts/${checkedIds}`, {
      method: 'DELETE',
      // body: JSON.stringify({
      //   cart_item: checkedIds,
      // }),
    })
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        if (result.message === 'success') {
          fetchCartList();
        }
      })
      .catch(e => {
        alert('다시 시도해주세요.');
      });
  };

  // ✨ 선택주문 ✨
  const goToSelectOrder = () => {
    const checkedIds = checkedList.map(checkedItem => checkedItem.id);
    const query = checkedIds.map(id => `cart_ids=${id}`).join('&');

    console.log(checkedIds);

    const price = checkedList
      .map(item => item.price * item.qty)
      .reduce((a, b) => a + b, 0);
    const shipping = price >= 50000 ? 0 : 3000;

    fetch(`http://10.58.0.138:8000/orders/`, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTB9.i1C1V7Mue-i8VfcUp-ZO-kzEDgLOxX7xzQK7WLadk7U',
      },
      body: JSON.stringify({
        cart_ids: checkedIds,
        shipping_fee: shipping,
      }),
    })
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        if (result.message === 'results') {
          navigate('/order');
        }
      })
      .catch(e => {
        alert('다시 시도해주세요.');
      });
  };

  // ✨ 전체삭제x ✨
  const onDelete = () => {
    // const cartItemIds = cartList.map(cartItem => cartItem.id);
    // const query = cartItemIds.map(id => `cart_id=${id}`).join('&');
    // fetch(`http://~~~:8080/cart?${query}`, {
    //   method: 'DELETE',
    //   body: JSON.stringify({
    //     cart_item: cartItemIds,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     // console.log(result);
    //     if (result.message === 'success') {
    //       fetchCartList();
    //     }
    //   })
    //   .catch(e => {
    //     alert('다시 시도해주세요.');
    //   });
  };

  // ✨ 전체주문 ✨
  const goToOrder = () => {
    const cartItemIds = cartList.map(cartItem => cartItem.id);
    fetch('http://10.58.0.138:8000/orders/', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTB9.i1C1V7Mue-i8VfcUp-ZO-kzEDgLOxX7xzQK7WLadk7U',
      },
      body: JSON.stringify({
        cart_item: cartItemIds,
        shipping_free: shipping,
      }),
    })
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        if (result.message === 'success') {
          navigate('/order');
        }
      })
      .catch(e => {
        alert('다시 시도해주세요.');
      });
  };

  // 끝❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="checkBox">
              <input
                type="checkbox"
                onChange={onChecked}
                checked={isAllChecked}
              />
            </th>
            {TABLE_HEADER.map(row => (
              <th key={row} className={row.toLowerCase()}>
                {row}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cartList &&
            cartList.map(item => {
              return (
                <CartItem
                  key={cartList.id}
                  item={item}
                  total={total}
                  cartList={cartList && cartList}
                  setCartList={setCartList}
                  checkedList={checkedList}
                  setCheckedList={setCheckedList}
                />
              );
            })}
        </tbody>
        <tfoot>
          {tableFooter.map(row => {
            return (
              <tr key={row.title}>
                <td colspan="10">
                  <div className="priceRow">
                    <strong>{row.title}</strong>
                    <div className="pricebox">
                      <span>{row.amount}원</span>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tfoot>
      </table>
      <div className="bottomBtn">
        <div className="deleteBtn">
          <button onClick={onSelectDelete}>Select Delete</button>
          <button onClick={onDelete}>Delete</button>
        </div>
        <div className="orderBtn">
          <button onClick={goToSelectOrder}>Select Order</button>
          <button onClick={goToOrder}>Order</button>
        </div>
      </div>
    </>
  );
};

export default CartNotEmpty;
