import "../App.css";
import "../components/timer/Timer.css";
import React from "react";
import Timer from "../components/timer/Timer";
import "./Page.css";
import ColorBox from "../components/colorbox/ColorBox";


function LongBreak() {
  return (
    <div>
      <div className="container">
        <Timer time={15} />
      </div>
      <div className="break_text">
        <p>Stretch and grab a snack!</p>
      </div>
      <ColorBox />
    </div>
  );
}

export default LongBreak;
