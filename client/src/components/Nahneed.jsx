import React, { useRef } from "react";
import "./Nahneed.css";
import "font-awesome/css/font-awesome.min.css";

const FullScreenNahneed = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="nahneedcontainer">
      <p>
        <span className="nahneedmainlogo">nahneed</span> 
        <i onClick={playAudio} className="fa-solid fa-bullhorn ew" style={{fontSize : "20px"}}></i>
        <audio ref={audioRef} src="/ugh.m4a" />
        for this website
      </p>
      <a href="/blurt" className="mainlink">
        go to blurt 
        <img className="arrow" src="/mainarrow.png" />
      </a>
    </div>
  );
};

export default FullScreenNahneed;
