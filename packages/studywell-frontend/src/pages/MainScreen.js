import '../App.css';
import '../components/timer/Timer.css';
import React, { useState, useEffect } from 'react';
import Task from '../components/taskbar/Task'
import TaskBar from '../components/taskbar/TaskBar'
import Timer from '../components/timer/Timer';


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