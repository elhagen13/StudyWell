import "../App.css";
import "../Timer.css";
import "./Page.css";
import Timer from "../components/timer/Timer";
import "../Timer.css";
import "./Page.css";
import React from "react";
import ColorBox from "../components/colorbox/ColorBox";

function ShortBreak({ breakCount, setBreakCount }) {
  document.body.style.backgroundColor = "#568EA3";
  return (
    <div id="ShortBreak">
      <ColorBox />
      <div className="container">
        <Timer
          time={2}
          breakCount={breakCount}
          setBreakCount={setBreakCount}
          page={"shortbreak"}
        />
      </div>
    </div>
  );
}

export default ShortBreak;
