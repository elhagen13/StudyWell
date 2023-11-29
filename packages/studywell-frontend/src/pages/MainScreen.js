import "../App.css";
import "../components/timer/Timer.css";
import React from "react";
import Timer from "../components/timer/Timer";
import "./Page.css";


function MainScreen() {
  return (
    <div id="MainScreen">
      <div className="container">
        <Timer time={1} />
      </div>
    </div>
  );
}

export default MainScreen;
