import React from 'react';

const TextItem = ({ postItem, isImgShow }) => {
  const { id, number, img, product, subject, author, date, hit } = postItem;

  return (
    <tr key={id}>
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
