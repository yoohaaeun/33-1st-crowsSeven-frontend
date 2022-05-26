import React from 'react';

const CartEmptyUI = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="noItem">No Items</th>
          </tr>
        </thead>
      </table>
      <div className="bottomBtn">
        <div className="deleteBtn" />
        <div className="orderBtn">
          <button>Select Order</button>
          <button>Order</button>
        </div>
      </div>
    </>
  );
};

export default CartEmptyUI;
