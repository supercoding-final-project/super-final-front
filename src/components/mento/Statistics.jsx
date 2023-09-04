// import React from 'react';

const Statistics = ({ total, title }) => {
  return (
    <li>
      <div className="total">{total}</div>
      <div className="title">{title}</div>
    </li>
  );
};

export default Statistics;
