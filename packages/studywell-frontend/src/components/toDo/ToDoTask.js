import React, { useState } from "react";
import "./toDo.css";


function ToDoTask(props) {
  const [task, setTask] = useState({
    task: "type here...",
  });

  function submitTask() {
    props.handleSubmit(task);
    setTask({ task: "type here..." });
  }

  function handleChange(event) {
    const { value } = event.target;
    setTask({ task: value });
  }

  function handleInputClick(event) {
    setTask({ task: "" });
  }

  const placeholderStyle = {
    fontStyle: "italic",
  };

  return (
    <form className="submit_row_to_do">
      <input
        type="text"
        task="task"
        class="task_form_to_do"
        style={task.task === "type here..." ? placeholderStyle : {}}
        value={task.task}
        onChange={handleChange}
        onClick={handleInputClick}
      />
      <input type="button" class="submit_task" value="+" onClick={submitTask} />
    </form>
  );
}
export default ToDoTask;
