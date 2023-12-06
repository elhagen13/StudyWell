import React, { useState } from "react";
import "./checkmark.css";
import "./toDo.css";
import tomato from "../../images/tomato.png";

function ToDoBody(props) {
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleCheckboxChange = (index) => {
    // Toggle completed status for the task at the given index
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = !completedTasks[index];
    setCompletedTasks(updatedCompletedTasks);
  };

  const rows = props.tasksData.map((row, index) => {
    const isCompleted = completedTasks[index] || false;

    return (
      <tr key={index}>
        <div className="single_task_to_do">
          <td className="checkbox_column">
            <div className="checkmark_container_to_do">
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => handleCheckboxChange(index)}
              />
              <span className="checkmark"></span>
            </div>
          </td>
          <td className="text_column">
            <div className="text">{row.task}</div>
          </td>
          <td className="column3">
            <div className="pomodoros">
              <div className="number">{row.pomodoros}</div>
              <img className="image" src={tomato} />
            </div>
          </td>
          <td className="delete_column">
            <button
              className="delete_button"
              onClick={() => props.removeTask(index)}
            >
              Delete
            </button>
          </td>
        </div>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

function ToDo(props) {
  return (
    <table className="table_to_do">
      <ToDoBody tasksData={props.tasksData} removeTask={props.removeTask} />
    </table>
  );
}

export default ToDo;
