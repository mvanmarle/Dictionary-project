import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  const audio = new Audio(`${props.phonetic.audio}`);

  const start = () => {
    audio.play();
  };

  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <button onClick={start}>listen</button>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
