import "../App.css";
import "../Timer.css";
import React, { useState, useEffect } from "react";
import Task from "../components/taskbar/Task";
import TaskBar from "../components/taskbar/TaskBar";
import Timer from "../components/timer/Timer";
import ColorBox from "../components/colorbox/ColorBox";

import "./Page.css";

const CloseButton = ({ onClose, isVisible }) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <button className="closeButton" onClick={handleClick}>
      <div className="task_text">Tasks</div>
      <div className="close_arrow">{isVisible ? "▲" : "▼"}</div>
    </button>
  );
};

function MainScreen() {
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const toggleParentComponent = () => {
    setIsVisible(!isVisible);
  };

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
  // function updateList(task) {
  //   console.log(task);
  //   setTasks([...tasks, task]);
  //   console.log(tasks);
  // }
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

      <div className={isVisible ? "task_bar_on" : "task_bar_off"}>
        <CloseButton onClose={toggleParentComponent} isVisible={isVisible} />
        {isVisible && (
          <div className="tasks">
            <TaskBar tasksData={tasks} removeTask={removeTask} />
            <Task handleSubmit={updateList} />
          </div>
        )}
      </div>
      <ColorBox />
    </div>
  );
}

export default MainScreen;
