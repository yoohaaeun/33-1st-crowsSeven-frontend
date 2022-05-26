import React from 'react';
import './Footer.scss';

const Footer = ({ total }) => {
  return (
    <div className="footer">
      <div className="total">
        <p>Total</p>
        <p>{total}원</p>
      </div>
      <button>Payment</button>
    </div>
  );
};

export default Footer;
