import "../App.css";
import "../components/timer/Timer.css";
import React, { useState, useEffect } from "react";
import Timer from "../components/timer/Timer";
import "./Page.css";

function MainScreen() {
  const [tasks, setTasks] = useState([]);

  // function removeTask(index) {
  //   const updated = tasks.filter((task, i) => {
  //     return i !== index;
  //   });
  //   setTasks(updated);
  // }
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
  }, []);

  return (
    <div id="MainScreen">
      <div className="container">
        <Timer time={1} />
      </div>
    </div>
  );
}

export default MainScreen;
