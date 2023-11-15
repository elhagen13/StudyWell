import "./App.css";
import "./Timer.css";
import React, { useState, useEffect } from "react";
import Task from "./Task";
import TaskBar from "./TaskBar";
import Timer from "./Timer";
import StartButton from "./StartButton";

function App() {
  const [tasks, setTasks] = useState([]);

  function removeTask(index) {
    const updated = tasks.filter((task, i) => {
      return i !== index;
    });
    setTasks(updated);
  }
  //   ******* Please confirm if this can be deleted or not! *****

  // function updateList(task) {
  //   console.log(task);
  //   setTasks([...tasks, task]);
  //   console.log(tasks)
  // }
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
  });

  return (
    <div className="App">
      <div className="container">
        <Timer time={25} />
      </div>
      <div className="task_bar">
        <TaskBar tasksData={tasks} removeTask={removeTask} />
        <Task handleSubmit={updateList} />
      </div>
    </div>
  );
}

export default App;
