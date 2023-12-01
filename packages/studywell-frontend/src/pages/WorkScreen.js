import "../App.css";
import "../Timer.css";
import ShortBreak from "./ShortBreak";
import LongBreak from "./LongBreak";
import MainScreen from "./MainScreen";
import TotalTask from "../components/taskbar/TotalTask";
import ColorBox from "../components/colorbox/ColorBox";
import {Route, Routes} from "react-router-dom";
import React, { useState } from "react";
import TotalToDo from "../components/toDo/TotalToDo";

function WorkScreen() {
  const [dataFromTask, updateToDoList] = useState("");

  const updateToDo = (task) => {
    console.log(task);
    updateToDoList(task);
  };

  return (
    <div>
      <Routes>
        <Route path = "/" element = {<MainScreen/>}/>
        <Route path = "shortbreak" element = {<ShortBreak/>}/>
        <Route path = "longbreak" element = {<LongBreak/>}/>
      </Routes>

      <TotalTask updateToDo={updateToDo} />
      <ColorBox />
      <TotalToDo sentTask={dataFromTask} />
    </div>
  );
}
export default WorkScreen;
