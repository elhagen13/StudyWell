import React, { useState } from "react";
import "./checkmark.css";
import "./toDo.css";

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
          <td style={{ width: "5%" }}>
            <div className="checkmark_container_to_do">
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => handleCheckboxChange(index)}
              />
              <span className="checkmark"></span>
            </div>
          </td>
          <td style={{ width: "83%" }}>
            <div className="text">{row.task}</div>
          </td>
          <td style={{ width: "2%" }}></td>
          <td style={{ width: "10%" }}>
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
