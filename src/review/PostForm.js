import React from 'react';
import './PostForm.scss';

const PostForm = () => {
  return (
    <div className="postForm">
      <header className="slideRight">
        <h1>상품후기</h1>
      </header>
      <form className="reviewFormContainer">
        <table>
          <tr>
            <th>제목</th>
            <td>
              <input type="text" />
              <select className="reviewOption">
                <option>제품 선택</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="textArea" colSpan="2">
              <textarea>내용</textarea>
            </td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td>
              <input type="password" />
            </td>
          </tr>
        </table>
        <section className="btns">
          <div>
            <button className="listBtn">목록</button>
          </div>
          <div>
            <button className="createBtn">등록</button>
            <button className="cancleBtn">취소</button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default PostForm;
