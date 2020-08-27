import React from "react";

const ButtonStart = props => {
  return (
    <button onClick={() => props.setGameStatus()}>
      {props.gameStatus ? "Reset" : "Start"}
    </button>
  );
};

export default ButtonStart;
