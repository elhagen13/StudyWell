import Task from "./Task";
import TaskBar from "./TaskBar";
import React, { useState, useEffect } from "react";
import "../../pages/Page.css";

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

function TotalTask(props) {
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
    props.removeTask(index);
  }

  function updateList(task) {
    setTasks([...tasks, task]);
    props.updateList(task);
  }

  useEffect(() => {
    if (props.tasks.length !== tasks.length) {
      setTasks((prevTasks) =>
        props.tasks.length ? [...props.tasks] : prevTasks,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.tasks]);

  return (
    <div className={isVisible ? "task_bar_on" : "task_bar_off"}>
      <CloseButton onClose={toggleParentComponent} isVisible={isVisible} />
      {isVisible && (
        <div className="tasks">
          <TaskBar
            tasksData={tasks}
            removeTask={removeTask}
            updateToDo={props.updateToDo}
          />
          <Task handleSubmit={updateList} />
        </div>
      )}
    </div>
  );
}
export default TotalTask;
