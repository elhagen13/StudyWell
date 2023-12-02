import "../App.css";
import "../Timer.css";
import "./Page.css";
import Timer from "../components/timer/Timer";
import "../Timer.css";
import "./Page.css";
import React from "react";

function ShortBreak({ breakCount, setBreakCount }) {
  return (
    <div id="MainScreen">
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
