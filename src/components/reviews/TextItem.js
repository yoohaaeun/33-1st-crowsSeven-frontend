import React from 'react';

const TextItem = ({ postItem }) => {
  const { id, number, subject, author, date, hit } = postItem;
  return (
    <tr key={id}>
      <td>{number} </td>
      <td className="productName">D49 스몰스푼 베이비블루마블</td>
      <td className="tableLeft">{subject}</td>
      <td>{author}</td>
      <td>{date}</td>
      <td>{hit}</td>
    </tr>
  );
};

export default TextItem;
