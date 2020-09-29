import React from "react";
import "./Grid.css";

const Grid = ({ numbers }) => {
  return (
    <div className="gridContainer">
      {numbers.map((num, index) => (
        <div
          key={index}
          className="gridItem"
          style={{ height: `calc(0.6*${num}vh)` }} // if changed then also change in mergeSort (App.js)
        ></div>
      ))}
    </div>
  );
};

export default Grid;
