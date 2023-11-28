import "./App.css";
import "./components/timer/Timer.css";
import ShortBreak from "./pages/ShortBreak";
import LongBreak from "./pages/LongBreak";
import MainScreen from "./pages/MainScreen";
import Navbar from "./components/navbar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import Task from "./components/taskbar/Task";
import TaskBar from "./components/taskbar/TaskBar";
import Timer from "./components/timer/Timer";
import StartButton from "./components/timer/StartButton";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/short" element={<ShortBreak />} />
        <Route path="/long" element={<LongBreak />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
