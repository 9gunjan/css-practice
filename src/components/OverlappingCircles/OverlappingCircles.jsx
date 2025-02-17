import React from "react";
import "./overlappingCircles.css";
const OverlappingCircles = ({ numCircles }) => {

  const circles = [...Array(numCircles).keys()]
  return (
    <div class="container">
      {circles.map((item, index) => (
        <div
          class="circle"
          style={{ left: 50 * index, zIndex: 3 - index , backgroundColor: `rgba(${index*30},${index*10},${index*20},1)`}}
        ></div>
      ))}
    </div>
  );
};

export default OverlappingCircles;
