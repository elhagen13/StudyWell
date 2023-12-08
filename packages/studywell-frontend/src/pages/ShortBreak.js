import "../App.css";
import "../Timer.css";
import "./Page.css";
import Timer from "../components/timer/Timer";
import "../Timer.css";
import "./Page.css";
import React, { useState, useEffect } from "react";
import ColorBox from "../components/colorbox/ColorBox";

function ShortBreak({ breakCount, setBreakCount, shortBreak }) {
  document.body.style.backgroundColor = "#568EA3";
  const [timerMinutes, setTimerMinutes] = useState(shortBreak);

  useEffect(() => {
    setTimerMinutes(shortBreak);
  }, [shortBreak]);
  return (
    <div id="ShortBreak">
      <ColorBox />
      <div className="container">
        <Timer
          time={timerMinutes}
          breakCount={breakCount}
          setBreakCount={setBreakCount}
          page={"shortbreak"}
        />
      </div>
    </div>
  );
}

export default ShortBreak;
