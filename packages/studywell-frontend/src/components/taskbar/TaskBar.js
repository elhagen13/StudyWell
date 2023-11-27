import React, { useState } from "react";
import "./checkmark.css";
import "./task.css";
function OptionPanel(props){
  const [showOptionPanel, setShowOptionPanel] = useState(false);

  const openOptionPanel = (index) => {
    setShowOptionPanel(true);
  };

  const closeOptionPanel = () => {
    setShowOptionPanel(false);
  };
  
  
  return(
    <div onClick={openOptionPanel}>
      ...
      {showOptionPanel &&
        <table className = "optionPanel" onMouseLeave={closeOptionPanel}> 
          <tr
              onClick={() => props.removeTask(props.index)}
            >
              Delete
          </tr>
          <tr>Add to To Do</tr>
        </table>
      }
    </div>
  )

}
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

    return (
      <tr key={index}>
        <div className="singleTask">
          <td style={{ width: "10%" }}>
            <div className="checkmark_container">
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => handleCheckboxChange(index)}
              />
              <span className="checkmark"></span>
            </div>
          </td>
          <td style={{ width: "65%" }}>
            <div className="text">{row.task}</div>
          </td>
          <td style={{ width: "25%" }}>     
            <OptionPanel index={index} removeTask ={props.removeTask}/>
          </td>
        </div>
      </tr>
    );
  });
  return (
    <>
      <tbody>{rows}</tbody>
    </>
  );
}

function TaskBar(props) {
  return (
    <table className="table">
      <TaskBarBody tasksData={props.tasksData} removeTask={props.removeTask} />
    </table>
  );
}

export default TaskBar;
