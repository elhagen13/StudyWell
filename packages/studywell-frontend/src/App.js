import "./App.css";
import "./Timer.css";
import React, { useState, useEffect } from "react";
import Task from "./Task";
import TaskBar from "./TaskBar";
import Timer from "./Timer";
import StartButton from "./StartButton";

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
  },[]);

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
