import React from "react";

function TaskBarHeader() {
    return (
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
    );
}
  
function TaskBarBody(props) {
    const rows = props.tasksData.map((row, index) => {
        return (
          <tr key={index}>
            <td> 
                <div>
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                </div>
            </td>
            <td>{row.task}</td>
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
        <table>
          <TaskBarHeader/>
          <TaskBarBody tasksData={props.tasksData} 
          removeTask = {props.removeTask}
          />
        </table>
      );
}

export default TaskBar;