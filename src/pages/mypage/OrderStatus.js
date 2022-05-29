import React from 'react';

const OrderStatus = ({ item }) => {
  return (
    <div className="stateBox">
      <div className="stateTitle">{item.title}</div>
      <span className="stateNum" style={{ color: 'blue' }}>
        {item.status}
      </span>
    </div>
  );
};

export default OrderStatus;
