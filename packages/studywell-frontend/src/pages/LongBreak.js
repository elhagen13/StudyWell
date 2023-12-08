import "../App.css";
import React, { useState, useEffect } from "react";
import Timer from "../components/timer/Timer";
import "./Page.css";
import ColorBox from "../components/colorbox/ColorBox";

function LongBreak({ breakCount, setBreakCount, longBreak }) {
  document.body.style.backgroundColor = "#0C7C59";

  const [timerMinutes, setTimerMinutes] = useState(longBreak);

  useEffect(() => {
    setTimerMinutes(longBreak);
  }, [longBreak]);
  return (
    <div id="MainScreen">
      <ColorBox />
      <div className="container">
        <Timer
          time={timerMinutes}
          breakCount={breakCount}
          setBreakCount={setBreakCount}
          page={"longbreak"}
        />
      </div>
    </div>
  );
}

export default LongBreak;
