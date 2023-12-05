import "../App.css";
import "../Timer.css";
import React, { useState, useEffect } from "react";
import Timer from "../components/timer/Timer";
import "./Page.css";

function MainScreen({ breakCount, setBreakCount }) {

  return (
    <div id="MainScreen">
      <div className="container">
        <Timer
          time={1}
          breakCount={breakCount}
          setBreakCount={setBreakCount}
          page={"main"}
        />
      </div>
    </div>
  );
}

export default MainScreen;
