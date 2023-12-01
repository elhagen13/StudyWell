import "./App.css";
import "./components/timer/Timer.css";
import ShortBreak from "./pages/ShortBreak";
import LongBreak from "./pages/LongBreak";
import MainScreen from "./pages/MainScreen";
import Navbar from "./components/navbar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import TotalToDo from "./components/toDo/TotalToDo";

function App() {
  const [breakCount, setBreakCount] = useState(1);
  const [dataFromTask, updateToDoList] = useState("");

  const updateToDo = (task) => {
    console.log(task);
    updateToDoList(task);
  };

  return (
    <BrowserRouter>
      <Navbar />
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
    </BrowserRouter>
  );
}
export default App;
