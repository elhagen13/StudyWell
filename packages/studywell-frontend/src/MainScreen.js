import './App.css';
import './Timer.css';
import React, { useState, useEffect } from 'react';
import Task from './Task'
import TaskBar from './TaskBar'
import Timer from './Timer';


function MainScreen() {

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
    <div id = "MainScreen">
        <div className="container">
            <Timer time = {1}/>
        </div>
        <div className="task_bar">
            <TaskBar tasksData = {tasks}
            removeTask={removeTask}/>
            <Task handleSubmit = {updateList}/>
        </div>
    </div>
      
  );
}
 
export default MainScreen;