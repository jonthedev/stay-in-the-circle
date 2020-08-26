import React from "react";

const ButtonStart = props => {
  return (
    <button onClick={() => props.setGameStatus()}>
      {props.gameStatus ? "Stop" : "Start"}
    </button>
  );
};

export default ButtonStart;
