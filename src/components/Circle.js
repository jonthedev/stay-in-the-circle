import React from "react";

const Circle = props => {
  return (
    <svg viewBox="0,0 10,10" width="400px" height="400px">
      <path
        className="track"
        fill="none"
        strokeWidth="0.25"
        d="M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0"
      />
      <circle className="marker" r="1" fill="orange"></circle>
    </svg>
  );
};

export default Circle;
