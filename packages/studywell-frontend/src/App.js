import "./App.css";
import "./components/timer/Timer.css";
import ShortBreak from "./pages/ShortBreak";
import LongBreak from "./pages/LongBreak";
import MainScreen from "./pages/MainScreen";
import Navbar from "./components/navbar/NavBar";
import TotalTask from "./components/taskbar/TotalTask";
import ColorBox from "./components/colorbox/ColorBox";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import TotalToDo from "./components/toDo/TotalToDo"

function App() {
  const [dataFromTask, updateToDoList] = useState('');
  
  const updateToDo= (task) => {
    console.log(task)
    updateToDoList(task);
  };


  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <TotalTask updateToDo={updateToDo}/>
      </div>
      <ColorBox />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/short" element={<ShortBreak />} />
        <Route path="/long" element={<LongBreak />} />
      </Routes>
      <TotalToDo sentTask={dataFromTask}/>
    </BrowserRouter>
  );
}
export default App;
