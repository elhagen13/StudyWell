import "../App.css";
import React from "react";
import Timer from "../components/timer/Timer";
import "./Page.css";
import ColorBox from "../components/colorbox/ColorBox";

function LongBreak({ breakCount, setBreakCount }) {
  document.body.style.backgroundColor = "#0C7C59";
  return (
    <div id="MainScreen">
      <ColorBox />
      <div className="container">
        <Timer
          time={3}
          breakCount={breakCount}
          setBreakCount={setBreakCount}
          page={"longbreak"}
        />
      </div>
    </div>
  );
}

export default LongBreak;
