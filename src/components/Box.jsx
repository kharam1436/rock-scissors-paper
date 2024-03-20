import React from "react";

export const Box = ({ title, item, result }) => {
  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <img src={item.img} alt={item.name} className="item-img" />
      <h2>{result}</h2>
    </div>
  );
};
