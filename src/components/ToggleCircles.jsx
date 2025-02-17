import React, { useState } from 'react';
import '../styles/toggleCircles.css';

const ToggleCircles = () => {
  const [isVertical, setIsVertical] = useState(false);

  const toggleDirection = () => {
    setTimeout(() => {
      setIsVertical((prev) => !prev);
    }, 1000);
  };

  return (
    <div className={`container ${isVertical ? 'vertical' : ''}`}>
      <div className="line"></div>
      <div className="circle"></div>
      <div className="circle">
        <button className="toggleBtn" onClick={toggleDirection}>
          Toggle
        </button>
      </div>
      <div className="circle"></div>
    </div>
  );
};

export default ToggleCircles;
