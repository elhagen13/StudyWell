import "./App.css";
import "./Timer.css";
import ShortBreak from "./pages/ShortBreak";
import LongBreak from "./pages/LongBreak";
import MainScreen from "./pages/MainScreen";
import Navbar from "./components/navbar/NavBar";
import TotalTask from "./components/taskbar/TotalTask";
import ColorBox from "./components/colorbox/ColorBox";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import TotalToDo from "./components/toDo/TotalToDo";
import React, { useState } from "react";

function App() {
  const [dataFromTask, updateToDoList] = useState("");

  const updateToDo = (task) => {
    console.log(task);
    updateToDoList(task);
  };

  const [breakCount, setBreakCount] = useState(1);

  return (
    <BrowserRouter>
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
          path="/short"
          element={
            <ShortBreak breakCount={breakCount} setBreakCount={setBreakCount} />
          }
        />
        <Route
          path="/long"
          element={
            <LongBreak breakCount={breakCount} setBreakCount={setBreakCount} />
          }
        />{" "}
      </Routes>
      <TotalToDo sentTask={dataFromTask} />
    </BrowserRouter>
  );
}
export default App;
