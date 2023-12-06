import React, { useState } from "react";
import "./toDo.css";

function ToDoTask(props) {
  const [task, setTask] = useState({
    task: "type here...",
    pomodoros: "",
  });

  function submitTask() {
    props.handleSubmit(task);
    setTask({ ...task, task: "type here...", pomodoros: "" });
  }

  function handleTaskChange(event) {
    const { value } = event.target;
    setTask({ ...task, task: value });
  }

  function handlePomodoroChange(event) {
    const { value } = event.target;
    setTask({ ...task, pomodoros: Number(value) });
  }

  function handleInputClick(event) {
    setTask({ ...task, task: "" });
  }

  const placeholderStyle = {
    fontStyle: "italic",
  };

  return (
    <form className="submit_row_to_do">
      <div className="newtask">
        <input
          type="text"
          task="task"
          class="task_form_to_do"
          style={task.task === "type here..." ? placeholderStyle : {}}
          value={task.task}
          onChange={handleTaskChange}
          onClick={handleInputClick}
        />
        <input
          type="number"
          placeholder="# of pomodoros"
          onChange={handlePomodoroChange}
          value={task.pomodoros}
        />
        <input
          type="button"
          class="submit_task"
          value="+"
          onClick={submitTask}
        />
      </div>
    </form>
  );
}
export default ToDoTask;
