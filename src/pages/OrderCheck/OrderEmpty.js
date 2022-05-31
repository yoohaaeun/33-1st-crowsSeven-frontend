import React from 'react';
import './OrderCheck.scss';
const OrderEmpty = () => {
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
      </div>
    </>
  );
};

export default OrderEmpty;
