import React from 'react';

const TextItem = ({ postData }) => {
  return (
    <tr key={postData.id}>
      <td>{postData.number} </td>
      <td className="productName">D49 스몰스푼 베이비블루마블</td>
      <td className="tableLeft">{postData.subject}</td>
      <td>{postData.author}</td>
      <td>{postData.date}</td>
      <td>{postData.hit}</td>
    </tr>
  );
};

export default TextItem;
