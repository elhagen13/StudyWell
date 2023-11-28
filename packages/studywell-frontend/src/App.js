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

  function deleteUser(_id) {
    const promise = fetch(`http://localhost:8000/tasks/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return promise;
  }
  function removeTask(index) {
    const taskId = tasks[index]._id;
    deleteUser(taskId)
      .then((res) => {
        if (res.status === 204) {
          const updated = tasks.filter((task, i) => i !== index);
          setTasks(updated);
          
        } else {
          console.error("Failed to delete task on the backend.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function postUser(task) {
    console.log(task);
    const promise = fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    console.log(promise);
    return promise;
  }

  function updateList(task) {
    postUser(task)
      .then((res) => {
        console.log(res);
        return res.status === 200 ? res.json() : undefined;
      })
      .then((json) => {
        if (json) setTasks([...tasks, json]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function fetchTasks() {
    const promise = fetch("http://localhost:8000/tasks");
    return promise;
  }

  useEffect(() => {
    fetchTasks()
      .then((res) => res.json())
      .then((json) => setTasks(json["task_list"]))
      .catch((error) => {
        console.log(error);
      });
  },[]);

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

