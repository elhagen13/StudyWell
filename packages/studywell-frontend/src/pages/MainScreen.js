import "../App.css";
import "../Timer.css";
import React, { useState, useEffect } from "react";
import Timer from "../components/timer/Timer";
import "./Page.css";
import ColorBox from "../components/colorbox/ColorBox";

function MainScreen({ breakCount, setBreakCount, workTime }) {
  document.body.style.backgroundColor = "#374954";

  const [timerMinutes, setTimerMinutes] = useState(workTime);

  useEffect(() => {
    setTimerMinutes(workTime);
  }, [workTime]);
  console.log(timerMinutes);

  return (
    <div id="MainScreen">
      <ColorBox />
      <div className="container">
        <Timer
          time={timerMinutes}
          breakCount={breakCount}
          setBreakCount={setBreakCount}
          page={"main"}
        />
      </div>
    </div>
  );
}

export default MainScreen;
