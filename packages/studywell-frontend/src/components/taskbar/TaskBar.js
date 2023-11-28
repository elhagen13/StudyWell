import React, { useState } from "react";
import "./checkmark.css";
import "./task.css";
function OptionPanel(props){
  const [showOptionPanel, setShowOptionPanel] = useState(false);
  const [position, setPosition] = useState({x: null, y: null})

  const openOptionPanel = (event) => {
    const {clientX, clientY} = event
    setPosition({x: clientX, y: clientY})
    setShowOptionPanel(true);
  };

  const closeOptionPanel = () => {
    setShowOptionPanel(false);
  };
  
  return(
    <div onClick={openOptionPanel}>
      ...
      {showOptionPanel &&
        <table className = "optionPanel" onMouseLeave={closeOptionPanel}
          style = {{top: position.y, left: position.x}}
        > 
          <tr className = "optionRow" onClick={() => props.removeTask(props.index)}>
              <td className = "optionColumn">Delete</td>
          </tr>
          <tr className = "optionRow">
            <td className = "optionColumn">Add to To Do</td>
          </tr>
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
