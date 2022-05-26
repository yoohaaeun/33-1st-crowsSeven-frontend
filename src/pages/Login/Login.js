import { React, useState } from 'react';
import './Login.scss';

const Login = () => {
  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <div>
      <section className="login">
        <div className="loginTitle">CROWS SEVEN</div>
        <div className="inputArea">
          <form className="idLine">
            <span className="idInputLine">Id</span>
            <input
              className="idInput"
              type="text"
              name="id"
              onChange={handleInput}
            />
          </form>
          <form className="pwLine">
            <span className="pwInputLine">Password</span>
            <input
              className="pwInput"
              type="password"
              name="pw"
              onChange={handleInput}
            />
          </form>
        </div>
        <button
          className="signBtn"
          disabled={!(id.includes('@') && pw.length >= 5)}
        >
          SIGN IN
        </button>
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
