import "../App.css";
import React from "react";
import Timer from "../components/timer/Timer";
import "./Page.css";

function LongBreak({ breakCount, setBreakCount }) {
  return (
    <div id="MainScreen">
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
