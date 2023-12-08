import "../App.css";
import "../Timer.css";
import ShortBreak from "./ShortBreak";
import LongBreak from "./LongBreak";
import MainScreen from "./MainScreen";
import TotalTask from "../components/taskbar/TotalTask";
import Navbar from "../components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import TotalToDo from "../components/toDo/TotalToDo";
import Popup from "reactjs-popup";

function WorkScreen() {
  const [dataFromTask, updateToDoList] = useState("");
  const [breakCount, setBreakCount] = useState(1);
  const [tasks, setTasks] = useState([]);

  const [workTime, setWorkTime] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const updateTimes = (type, value) => {
    if (type === "work") {
      setWorkTime(value);
    } else if (type === "shortBreak") {
      setShortBreak(value);
    } else if (type === "longBreak") {
      setLongBreak(value);
    }
  };
  const updateToDo = (task) => {
    console.log(task);
    updateToDoList(task);
  };

  function deleteUser(_id) {
    const promise = fetch(`https://studywell.azurewebsites.net/tasks/${_id}`, {
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
    const promise = fetch("https://studywell.azurewebsites.net/tasks", {
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
    const promise = fetch("https://studywell.azurewebsites.net/tasks");
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
  console.log(tasks);

  return (
    <div>
      <Popup
        trigger={<button className={"pop-button"}> Customize Times </button>}
        modal
        closeOnDocumentClick
      >
        <div className={"popup"}>
          <h3>Work Time</h3>
          <input
            value={workTime}
            onChange={(e) => updateTimes("work", e.target.value)}
          />

          <h3>Short Break Time</h3>
          <input
            value={shortBreak}
            onChange={(e) => updateTimes("shortBreak", e.target.value)}
          />

          <h3>Long Break Time</h3>
          <input
            value={longBreak}
            onChange={(e) => updateTimes("longBreak", e.target.value)}
          />
        </div>
      </Popup>
      <Navbar />
      <div>
        <TotalTask
          updateToDo={updateToDo}
          updateList={updateList}
          tasks={tasks}
        />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <MainScreen
              breakCount={breakCount}
              setBreakCount={setBreakCount}
              workTime={workTime}
            />
          }
        />
        <Route
          path="/shortbreak"
          element={
            <ShortBreak
              breakCount={breakCount}
              setBreakCount={setBreakCount}
              shortBreak={shortBreak}
            />
          }
        />
        <Route
          path="/longbreak"
          element={
            <LongBreak
              breakCount={breakCount}
              setBreakCount={setBreakCount}
              longbreak={longBreak}
            />
          }
        />{" "}
      </Routes>
      <TotalToDo sentTask={dataFromTask} />
    </div>
  );
}
export default WorkScreen;
