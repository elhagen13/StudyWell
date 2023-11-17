import React, { useState } from "react";
import "./checkmark.css";
import "./task.css";

function TaskBarBody(props) {
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleCheckboxChange = (index) => {
    // Toggle completed status for the task at the given index
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = !completedTasks[index];
    setCompletedTasks(updatedCompletedTasks);
  };

  const rows = props.tasksData.map((row, index) => {
    const isCompleted = completedTasks[index] || false;
    const taskClass = isCompleted ? "completed-task" : "";

    return (
      <tr key={index}>
        <div className="singleTask">
          <td style={{ width: "15%" }}>
            <div className="checkmark_container">
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => handleCheckboxChange(index)}
              />
              <span className="checkmark"></span>
            </div>
          </td>
          <td style={{ width: "60%" }}>
            <div className="text">{row.task}</div>
          </td>
          <td style={{ width: "25%" }}>
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

function TaskBar(props) {
  return (
    <table className="table">
      <TaskBarBody tasksData={props.tasksData} removeTask={props.removeTask} />
    </table>
  );
}

export default TaskBar;
