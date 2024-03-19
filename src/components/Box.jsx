import React from "react";

export const Box = ({ title, userSelect }) => {
  return (
    <div className='box'>
      <h1>{title}</h1>
      <img src={userSelect.img} alt={userSelect.name} className='item-img' />
      <h2>Win</h2>
    </div>
  );
};
