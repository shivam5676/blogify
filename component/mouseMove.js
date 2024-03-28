"use client"
import React, { useState } from 'react';

function MouseCoordinates() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    // Extract mouse coordinates from the event
    const { clientX, clientY } = event;
console.log(clientX,clientY)
    // Update state with mouse coordinates
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div style={{ height: '100vh' ,width:"100vw"}} onMouseMove={handleMouseMove}>
      <p>Mouse X: {mousePosition.x}</p>
      <p>Mouse Y: {mousePosition.y}</p>
      
    </div>
  );
}

export default MouseCoordinates;