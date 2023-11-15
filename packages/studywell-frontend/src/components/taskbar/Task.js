import React, { useState } from "react";

function Task(props) {
  const [task, setTask] = useState({
    task: "",
  });

  function submitTask() {
    props.handleSubmit(task);
    setTask({ task: "" });
  }

  function handleChange(event) {
    const { value } = event.target;
    setTask({ task: value });
  }

  return (
    <form>
      <input
        type="text"
        task="task"
        value={task.task}
        onChange={handleChange}
      />
      <input
        type="button"
        class="submit_task"
        value="Submit"
        onClick={submitTask}
      />
    </form>
  );
}
export default Task;
