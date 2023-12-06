import React, { useState } from "react";

function Task(props) {
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
    <div>
      <form className="submit_row">
        <div className="newtask">
          <div className= "newtask2">
            <input
              type="text"
              task="task"
              class="task_form"
              style={task.task === "type here..." ? placeholderStyle : {}}
              value={task.task}
              onChange={handleTaskChange}
              onClick={handleInputClick}
            />
            <input
              type="number"
              placeholder="# of pomodoros"
              class="pomodoro_form"
              onChange={handlePomodoroChange}
              value={task.pomodoros}
            />
          </div>
          <input
            type="button"
            class="submit_task"
            value="+"
            onClick={submitTask}
          />
        </div>
      </form>
    </div>
  );
}
export default Task;
