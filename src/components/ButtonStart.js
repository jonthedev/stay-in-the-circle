import React from "react";

const ButtonStart = props => {
  return (
    <button
      className={`${!props.gameStatus ? "start" : "stop"}`}
      onClick={() => props.setGameStatus()}
    >
      {props.gameStatus ? "Reset" : "Start"}
    </button>
  );
};

export default ButtonStart;
