import "../App.css";
import React, { useState } from "react";
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

function LongBreak({ breakCount, setBreakCount }) {
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const toggleParentComponent = () => {
    setIsVisible(!isVisible);
  };

  function removeTask(index) {
    const updated = tasks.filter((task, i) => {
      return i !== index;
    });
    setTasks(updated);
  }

  function updateList(task) {
    console.log(task);
    setTasks([...tasks, task]);
    console.log(tasks);
  }

  return (
    <div id="MainScreen">
      <div className="container">
        <Timer
          time={3}
          breakCount={breakCount}
          setBreakCount={setBreakCount}
          page={"long"}
        />
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

export default LongBreak;
