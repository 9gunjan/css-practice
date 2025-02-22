import React, { useEffect, useState } from "react";


const TrafficLight = () => {
  const [index, setIndex] = useState(0);

  const trafficDetails = [
    { color: "red", time: 600 },
    { color: "yellow", time: 400 },
    { color: "green", time: 800 },
  ];

  useEffect(() => {
    const interval = setTimeout(() => {
      setIndex((index + 1) % 3);
    }, [trafficDetails[index].time]);

    return () => clearTimeout(interval);
  }, [index]);

  return (
   
      <div
        style={{
          width: "90px",
          height: "230px",
          backgroundColor: "black",
          padding: "5px",
        }}
      >
        {trafficDetails.map((signal, ind) => (
          <div
            style={{
              backgroundColor: ind === index ? signal.color : "white",
              height: "70px",
              borderRadius: "50%",
              margin: "2px",
            }}
          ></div>
        ))}
      </div>
    
  );
};

export default TrafficLight;
