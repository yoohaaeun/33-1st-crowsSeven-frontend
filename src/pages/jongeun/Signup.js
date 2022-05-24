import React from 'react';
import './Signup.scss';

const Signup = () => {
  return (
    <div>
      <section className="signupBox">
        <h1 className="title">SIGN UP</h1>
        <div className="Member">
          <div> Member Type</div>
          <input type="radio" />
          <label for="male">개인회원</label>
          <input type="radio" />
          <label for="male">사업자 회원</label>
          <input type="radio" />
          <label for="male">외국인 회원</label>
        </div>
      </section>
    </div>
  );
};

export default Signup;
