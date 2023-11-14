import React, { useState } from "react";
import './checkmark.css'
  
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
            <td> 
                <div className="checkmark_container">
                    <input 
                        type="checkbox"
                        checked={isCompleted}
                        onChange={() => handleCheckboxChange(index)}
                    />
                    <span className="checkmark"></span>
                </div>
            </td>
            <td className={taskClass}>{row.task}</td>
            <td>
                <button className="delete_button" onClick={() => 
                        props.removeTask(index)}>
                        Delete
                </button>
            </td>
          </tr>
        );
       }
      );
      return (
          <tbody>
            {rows}
          </tbody>
       );
}

  
function TaskBar(props) {
    return (
      <div>
        <table>
          <TaskBarBody tasksData={props.tasksData} 
          removeTask = {props.removeTask}
          />
        </table>

      </div>
      );
}

export default TaskBar;