import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div>
      <section className="loginArea">
        <div className="loginTitle">CROWS SENVEN</div>
        <div className="inputArea">
          <div className="idLine">
            <span className="idInputLine">Id</span>
            <input className="idInput"></input>
          </div>
          <div className="pwLine">
            <span className="pwInputLine">Password</span>
            <input type="password" className="pwInput"></input>
          </div>
        </div>
        <button className="signBtn">SIGN IN</button>
        <div className="loginFooter">
          <div className="findUser">
            <div className="forgotId">Forgot Your Id?</div>
            <div>or</div>
            <div className="forgotPw">Password</div>
          </div>
          <div className="createAccount">CreateAccount</div>
        </div>
      </section>
    </div>
  );
};

export default Login;
