import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import winner from "../sounds/winner.mp3";

const AudioIcon = ({ count }) => {
  const [audio, toggleAudio] = useState(false);

  //function toggle audio and icon display
  function toggleIconAudio() {
    //toggle audio
    toggleAudio(audioState => !audioState);
  }

  //watch for when the game is won
  //Winning audio
  const winAudio = new Audio(winner);
  useEffect(() => {
    if (count == 50 && audio) {
      winAudio.play();
    }
  }, [count]);

  const audioOff = (
    <FontAwesomeIcon className="sound" size="2x" icon={faVolumeMute} />
  );
  const audioOn = (
    <FontAwesomeIcon className="sound" size="2x" icon={faVolumeUp} />
  );
  return <div onClick={toggleIconAudio}>{audio ? audioOn : audioOff}</div>;
};

export default AudioIcon;
