import React from "react";
import "./overlappingCircles.css";
const OverlappingCircles = ({ numCircles }) => {

  const circles = [...Array(numCircles).keys()]

  const handleMouseEnter = (e,index) =>{
    e.preventDefault();
    const element = document.getElementById(index);
    console.log(element);
    element.style.zIndex = 51

  }
  const handleMouseLeave = (e,index) =>{
    e.preventDefault();
    const element = document.getElementById(index);
    // console.log(element);
    element.style.zIndex = 50-index

  }

  /*Step 1: create a on click handler
    Step2: Call the API with page no. and get data
    Step3: filter out desires series names while iterating over the data list
  Step4: Render the desired output on the UI

  */

  const parseData = (dataList,genre) => {
    dataList.map((item) => {
      // if(item.genre == genre)

    })
  }

  const handleClick = async() =>{
  
    let apiResponse = await fetch("https://jsonmock.hackerrank.com/api/tvseries?page=1")
    apiResponse = await apiResponse.json();
    console.log(apiResponse);
    parseData(apiResponse.data,"Action");
  
      // .then(response => response.text())
      // .then(result => console.log(result))
      // .catch(error => console.log('error', error));

  }

  return (
    <div className="container">
      {/* {circles.map((item, index) => (
        <div
          className="circle"
          id={index}
          key={index}
          onMouseEnter={(e) => handleMouseEnter(e,index)}
          onMouseLeave={(e) => handleMouseLeave(e,index)}
          style={{ left: 80 * index, zIndex: 50 - index , backgroundColor: `rgba(${index*30},${index*10},${index*20},1)`}}
        ></div>
      ))} */}
      <button onClick={handleClick}>Call me</button>
    </div>
  );
};

export default OverlappingCircles;
