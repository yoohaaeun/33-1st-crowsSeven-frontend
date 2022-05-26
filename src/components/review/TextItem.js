import React from 'react';

const TextItem = ({ data }) => {
  return (
    <tr key={data.id}>
      <td>{data.number} </td>
      <td className="productName">{data.product}</td>
      <td className="tableLeft">{data.subject}</td>
      <td>{data.author}</td>
      <td>{data.date}</td>
      <td>{data.hit}</td>
    </tr>
  );
};

export default TextItem;
