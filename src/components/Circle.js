import React, { useState, useEffect } from "react";
import MrT from "./MrT";

const Circle = ({ addCount, gameStatus }) => {
  const [insideCircle, setInsideCircle] = useState(false);

  function toggleInside() {
    setInsideCircle(prevStatus => !prevStatus);
  }

  useEffect(() => {
    if (insideCircle && gameStatus) {
      addCount();
    }
  }, [insideCircle]);

  return (
    <div className="container">
      <svg viewBox="0,0 10,10" width="250px" height="250px">
        <path
          className="track"
          fill="none"
          strokeWidth="0.25"
          d="M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0"
        />
        <circle
          className={gameStatus ? "marker marker-rotate" : "marker"}
          onMouseOver={toggleInside}
          onMouseLeave={toggleInside}
          r="0.6"
          fill="orange"
        ></circle>
      </svg>
      <MrT />
    </div>
  );
};

export default Circle;
