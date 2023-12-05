import "../App.css";
import "../Timer.css";
import ShortBreak from "./ShortBreak";
import LongBreak from "./LongBreak";
import MainScreen from "./MainScreen";
import TotalTask from "../components/taskbar/TotalTask";
import Navbar from "../components/navbar/NavBar";
import ColorBox from "../components/colorbox/ColorBox";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import TotalToDo from "../components/toDo/TotalToDo";
import Task from "../components/taskbar/Task";
import TaskBar from "../components/taskbar/TaskBar";

function WorkScreen() {
  const [dataFromTask, updateToDoList] = useState("");
  const updateToDo = (task) => {
    console.log(task);
    updateToDoList(task);
  };
  const [breakCount, setBreakCount] = useState(1);
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

  // eslint-disable-next-line
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

  // eslint-disable-next-line
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
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <TotalTask updateToDo={updateList} />
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
          path="/shortbreak"
          element={
            <ShortBreak breakCount={breakCount} setBreakCount={setBreakCount} />
          }
        />
        <Route
          path="/longbreak"
          element={
            <LongBreak breakCount={breakCount} setBreakCount={setBreakCount} />
          }
        />{" "}
      </Routes>
      <TotalToDo sentTask={dataFromTask} />
      <div className="tasks">
            <TaskBar tasksData={tasks} removeTask={removeTask} />
            <Task handleSubmit={updateList} />
          </div>
    </div>
  );
}
export default WorkScreen;
