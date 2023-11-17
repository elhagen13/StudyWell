import React, { useState } from "react";

function Task(props) {
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
    const { value } = event.target;
    setTask({ task: "" });
  }

  const placeholderStyle = {
    fontStyle: "italic",
  };

  return (
    <form className="submit_row">
      <input
        type="text"
        task="task"
        class="task_form"
        style={task.task === "type here..." ? placeholderStyle : {}}
        value={task.task}
        onChange={handleChange}
        onClick={handleInputClick}
      />
      <input type="button" class="submit_task" value="+" onClick={submitTask} />
    </form>
  );
}
export default Task;
