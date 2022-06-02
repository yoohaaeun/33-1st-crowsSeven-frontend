import React from 'react';
import { useNavigate } from 'react-router-dom';

const TextItem = ({ postItem, isImgShow }) => {
  const {
    // review_id,
    // review_thumb_nail,
    // review_product,
    // review_title,
    // review_name,
    // review_date,
    // review_view_count,
    id,
    number,
    img,
    subject,
    post,
    author,
    product,
    date,
    hit,
  } = postItem;

  const navigate = useNavigate();
  const goToPostPage = () => {
    navigate(`/review_post/${id}`);
  };
  return (
    <tr key={id} onClick={goToPostPage}>
      <td className="marginRight">{number} </td>

      <td className="productName tableLeft">
        <div>
          {isImgShow ? <img src={img} alt="tableware" /> : null}
          {product}
        </div>
      </td>
      <td className="tableLeft">{subject}</td>
      <td>{author}</td>
      <td>{date}</td>
      <td>{hit}</td>
    </tr>
  );
};

// props isImgShow true img tag rendering
// IMG O, IMG X
// img property img tag rendering
export default TextItem;

// what
// ~~~
// fetch
// article, udemy, youtube,
// O

// Project
// fetch ~~~
// ~~~

//
