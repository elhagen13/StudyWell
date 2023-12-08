import React, { useState } from "react";

function TaskCard(props) {
  const [task, setTask] = useState({
    task: "",
  });

  const [showModal, setShowModal] = useState(false);

  function submitTask() {
    props.handleSubmit(task);
    setTask({ task: "" });
  }

  function handleChange(event) {
    const { value } = event.target;
    setTask({ task: value });
  }

  function handleShowModal() {
    setShowModal((prev) => !prev);
  }

  return (
    <div>
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
    </div>
  );
}
export default TaskCard;
