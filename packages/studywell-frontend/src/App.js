import "./App.css";
import "./Timer.css";
import WorkScreen from "./pages/WorkScreen";
import LogIn from "./pages/LogIn";
import CreateAccount from "./pages/CreateAccount";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import TotalToDo from "./components/toDo/TotalToDo";

function App() {
  const [dataFromTask, updateToDoList] = useState("");

  const updateToDo = (task) => {
    console.log(task);
    updateToDoList(task);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/short" element={<ShortBreak />} />
        <Route path="/long" element={<LongBreak />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
