import "../App.css";
import "../Timer.css";
import ShortBreak from "./ShortBreak";
import LongBreak from "./LongBreak";
import MainScreen from "./MainScreen";
import TotalTask from "../components/taskbar/TotalTask";
import ColorBox from "../components/colorbox/ColorBox";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import TotalToDo from "../components/toDo/TotalToDo";

function WorkScreen() {
  const [dataFromTask, updateToDoList] = useState("");
  const updateToDo = (task) => {
    console.log(task);
    updateToDoList(task);
  };
  const [breakCount, setBreakCount] = useState(1);

  return (
    <div>
      <Navbar />
      <div>
        <TotalTask updateToDo={updateToDo} />
      </div>
      <ColorBox />
      <Routes>
        <Route
          path="/"
          element={
            <MainScreen breakCount={breakCount} setBreakCount={setBreakCount} />
          }
        />
        <Route
          path="shortbreak"
          element={
            <ShortBreak breakCount={breakCount} setBreakCount={setBreakCount} />
          }
        />
        <Route
          path="longbreak"
          element={
            <LongBreak breakCount={breakCount} setBreakCount={setBreakCount} />
          }
        />{" "}
      </Routes>
      <TotalToDo sentTask={dataFromTask} />
    </div>
  );
}
export default WorkScreen;
