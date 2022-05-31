import React from 'react';

const ReviewPost = ({ textList }) => {
  return (
    <main className="mainPost" key={textList[0]?.id}>
      <div className="postSubject">
        <div>제목</div>
        <div>{textList[0]?.subject}</div>
      </div>
      <div className="postAuthor">
        <div>작성자</div>
        <div>{textList[0]?.author}</div>
      </div>
      <div className="postDateView">
        <span className="postDate">작성일 {textList[0]?.date}</span>
        <span className="postView">조회수 {textList[0]?.hit}</span>
      </div>
      <article className="postArea">{textList[0]?.post}</article>
    </main>
  );
};

export default ReviewPost;
