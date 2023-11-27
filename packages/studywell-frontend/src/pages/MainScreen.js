import "../App.css";
import "../components/timer/Timer.css";
import React from "react";
import Timer from "../components/timer/Timer";
import "./Page.css";
import TotalToDo from "../components/toDo/TotalToDo"


function MainScreen() {
  return (
    <div id="MainScreen">
      <div className="container">
        <Timer time={1} />
        <TotalToDo/>
      </div>
    </div>
  );
}

export default MainScreen;
