import React from "react";
import winner from "../sounds/winner.mp3";

function Message({ count }) {
  //Winning audio
  const audio = new Audio(winner);
  if (count == 50) {
    audio.play();
  }

  //winning message
  const winMessage = (
    <p style={{ fontSize: "2em" }}>Congratulations you won!</p>
  );

  //start message
  const startMessage = <p>"I pity the fool who doesn't stay in the circle!"</p>;
  return <div>{count <= 49 ? startMessage : winMessage}</div>;
}

export default Message;
