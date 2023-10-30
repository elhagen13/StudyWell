import './App.css';
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
    <div className="container">
      <TaskBar tasksData = {tasks}
       removeTask={removeTask}/>
      <Task handleSubmit = {updateList}/>
    </div>
  );
}

export default App;
