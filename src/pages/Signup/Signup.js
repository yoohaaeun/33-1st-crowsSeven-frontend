import './Signup.scss';
import Agreement from './Agreement';
import AGREE_LIST from './agreeData';
import React, { useState, useEffect } from 'react';

const Signup = () => {
  const [checkedList, setCheckedLists] = useState([]);
  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
    name: '',
    address: '',
    phone: '',
    email: '',
    birthday: '',
    checked: true,
  });

  const { id, pw, name, address, phone, email, birthday, checked } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const goToMain = () => {
    fetch('http://10.58.6.28:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: id,
        password: pw,
        name: name,
        address: address,
        email: email,
        birth_date: birthday,
        phone_number: phone,
        optional_agreement: checked,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result, inputValue));
  };

  useEffect(() => {
    setCheckedLists(AGREE_LIST);
  }, []);

  const handleCheck = e => {
    let copy = [...checkedList];
    if (e === true) {
      copy.map(item => (item.isChecked = true));
      setCheckedLists(copy);
    } else {
      copy.map(item => (item.isChecked = false));
      setCheckedLists(copy);
    }
  };
  return (
    <div>
      <main className="signup">
        <h1 className="title">SIGN UP</h1>
        <title className="information">
          <h2>기본정보</h2>
          <div>*필수입력사항</div>
        </title>

        <section className="memberLine">
          <div className="memberTitle"> Member Type</div>
          <form className="memberRadio">
            <input type="radio" name="member" />
            <label>개인회원</label>
            <input type="radio" name="member" />
            <label>사업자 회원</label>
            <input type="radio" name="member" />
            <label>외국인 회원</label>
          </form>
        </section>

        <form className="inputLine">
          <div className="inputTitle">ID</div>
          <input
            type="text"
            className="userInput"
            onChange={handleInput}
            name="id"
          />
          <div className="inputDescription">
            아이디를 입력해 주세요(영문소문자/숫자,4~16자)
          </div>
        </form>

        <form className="inputLine">
          <div className="inputTitle">Password</div>
          <input type="password" className="userInput" />
          <div className="inputDescription">(영문 대소문자/숫자 4자~16자)</div>
        </form>

        <form className="inputLine">
          <div className="inputTitle">Password Check</div>
          <input
            type="password"
            className="userInput"
            onChange={handleInput}
            name="pw"
          />
        </form>

        <form className="inputLine">
          <div className="inputTitle">Name</div>
          <input
            type="text"
            className="userInput"
            onChange={handleInput}
            name="name"
          />
        </form>

        <form className="addressLine">
          <div className="address">Address</div>
          <input
            type="text"
            className="addressInput"
            onChange={handleInput}
            name="address"
          />
          <div className="addressDescription">기본주소</div>
        </form>

        <form className="addressLine">
          <div className="address" />
          <input type="text" className="addressInput" />
          <div className="addressDescription">나머지 주소 (선택사항)</div>
        </form>

        <form className="phoneLine">
          <div className="phone">Phone</div>
          <select name="phone" className="phoneSelect">
            <option>02</option>
            <option>070</option>
            <option>031</option>
            <option>032</option>
            <option>033</option>
            <option>034</option>
          </select>
          <input type="text" className="phoneSecond" />
          -
          <input type="text" className="phoneThird" />
        </form>

        <form className="phoneLine">
          <div className="phone">Mobile Phone</div>
          <select name="phone" className="phoneSelect">
            <option>010</option>
            <option>011</option>
            <option>016</option>
            <option>017</option>
            <option>018</option>
            <option>019</option>
          </select>
          <input
            type="text"
            className="phoneSecond"
            onChange={handleInput}
            name="phone"
          />
        </form>

        <form className="inputLine">
          <div className="inputTitle">E-Mail</div>
          <input
            type="text"
            className="userInput"
            onChange={handleInput}
            name="email"
          />
        </form>

        <title className="addInformation">
          <h2>추가정보</h2>
        </title>
        <form className="birthdayLine">
          <div className="birthday">생년월일</div>
          <input
            type="text"
            className="birthdayInput"
            onChange={handleInput}
            name="birthday"
          />
          <div className="birthdayRadio">
            <input type="radio" name="birthday" />
            <label>양력</label>
            <input type="radio" name="birthday" />
            <label>음력</label>
          </div>
          <div className="birthdayDescription">
            8자리로 입력해주세요 ex)19960211
          </div>
        </form>

        <title className="agreement">
          <h2>전체 동의</h2>
        </title>
        <form className="agreementBox">
          <div className="allAgreement">
            <input
              type="checkbox"
              checked={
                checkedList.filter(item => item?.isChecked !== true).length < 1
              }
              onChange={e => {
                handleCheck(e.target.checked);
              }}
            />
            <div>
              이동약관 및 개인정보수집 및 이용,쇼핑정보 수신(선택)에 모두 동의
              합니다.
            </div>
          </div>
          {checkedList.map((item, i) => {
            return (
              <Agreement
                key={i}
                item={item}
                i={i}
                checkedList={checkedList}
                setCheckedLists={setCheckedLists}
              />
            );
          })}
        </form>
        <button onClick={goToMain} className="signupBtn">
          회원가입
        </button>
      </main>
    </div>
  );
};

export default Signup;
