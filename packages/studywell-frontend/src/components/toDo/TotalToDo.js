import ToDoTask from "./ToDoTask";
import ToDo from "./ToDo";
import React, { useState } from "react";
import "./toDo.css";

const CloseButton = ({ onClose, isVisible }) => {
    const handleClick = () => {
      onClose();
    };
    return (
      <button className="closeButton_to_do" onClick={handleClick}>
        <div className="task_text">To Do</div>
        <div className="close_arrow">{isVisible ? "▲" : "▼"}</div>
      </button>
    );
  };

function TotalToDo() {
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
        <div>
          <CloseButton onClose={toggleParentComponent} isVisible={isVisible} />
          {isVisible && (
            <div className="tasks_to_do">
                <ToDo tasksData={tasks} removeTask={removeTask} />
                <ToDoTask handleSubmit={updateList} />
            </div>
          )}
        </div>
    );
  }
  export default TotalToDo;
  