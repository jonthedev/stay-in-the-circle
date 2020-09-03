import React from "react";
import winner from "../sounds/winner.mp3";

function Message({ count }) {
  //winning message
  const winMessage = <p className="bounce">Congratulations you won!</p>;

  //start message
  const startMessage = <p>"I pity the fool who doesn't stay in the circle!"</p>;
  return <div>{count <= 49 ? startMessage : winMessage}</div>;
}

export default Message;
