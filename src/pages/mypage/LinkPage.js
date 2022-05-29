import React from 'react';

const LinkPage = ({ item }) => {
  return (
    <section className="linkBox">
      <img className="linkIcon" src={item.icon} alt="" />
      <div className="linkTitle">{item.title}</div>
      <div className="linkDescription">{item.description1}</div>
      <div className="linkDescription">{item.description2}</div>
    </section>
  );
};

export default LinkPage;
