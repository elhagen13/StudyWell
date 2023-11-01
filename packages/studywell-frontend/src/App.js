import './App.css';
import Timer from './Timer';
import React, {useState} from "react";
import TaskBar from './TaskBar';
import Task from './Task'


function App() {
  
  const [tasks, setTasks] = useState([]);

  function removeTask(index){
    const updated = tasks.filter((task, i) => {
      return i !== index
    });
    setTasks(updated);
  }

  function updateList(task) {
    console.log(task);
    setTasks([...tasks, task]);
    console.log(tasks)
  }

  return (
    <div className = "App">
      <div className="container">
        <Timer time = {25}/>
      </div>
      <div className="task_bar">
        <TaskBar tasksData = {tasks}
        removeTask={removeTask}/>
        <Task handleSubmit = {updateList}/>
      </div>
    </div>
  );
}

export default App;
