import "../App.css";
import "../Timer.css";
import React, { useState, useEffect } from "react";
import Task from "../components/taskbar/Task";
import TaskBar from "../components/taskbar/TaskBar";
import Timer from "../components/timer/Timer";
import ColorBox from "../components/colorbox/ColorBox";

import "./Page.css";

function LogIn() {
  return (
    <div id="LogInPage">
      <div className = "LogIn">
        LogIn
      </div>
    </div>
  );
}

export default LogIn;