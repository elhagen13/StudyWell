import "../App.css";
import "../Timer.css";
import ShortBreak from "./ShortBreak";
import LongBreak from "./LongBreak";
import MainScreen from "./MainScreen";
import TotalTask from "../components/taskbar/TotalTask";
import Navbar from "../components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import TotalToDo from "../components/toDo/TotalToDo";

function WorkScreen() {
  const [dataFromTask, updateToDoList] = useState("");
  const [breakCount, setBreakCount] = useState(1);
  const [tasks, setTasks] = useState([]);
  const { userId } = useParams();

  const updateToDo = (task) => {
    console.log(task);
    updateToDoList(task);
  };

  function deleteUser(_id) {
    const promise = fetch(`https://studywell.azurewebsites.net/tasks/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return promise;
  }

  // eslint-disable-next-line
  function removeTask(index) {
    const taskId = tasks[index]._id;
    deleteUser(taskId)
      .then((res) => {
        if (res.status === 204) {
          const updated = tasks.filter((task, i) => i !== index);
          setTasks(updated);
        } else {
          console.error("Failed to delete task on the backend.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function postUser(task, userId) {
    console.log(task, userId);
    const promise = fetch(
      `https://studywell.azurewebsites.net/${userId}/tasks`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      },
    );
    console.log(promise);
    return promise;
  }

  // eslint-disable-next-line
  function updateList(task) {
    console.log("userId:", userId);
    console.log("Adding task:", task);
    postUser(task, userId)
      .then((res) => {
        console.log("Response from server:", res);
        return res.status === 200 ? res.json() : undefined;
      })
      .then((json) => {
        console.log("JSON response from server:", json);
        if (json) setTasks([...tasks, json]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const fetchTasks = useCallback(() => {
    const promise = fetch(
      `https://studywell.azurewebsites.net/${userId}/tasks`,
    );
    return promise;
  }, [userId]);

  useEffect(() => {
    fetchTasks()
      .then((res) => res.json())
      .then((json) => {
        console.log("tasks:", json);
        setTasks((prevTasks) => {
          console.log("tasks inside useEffect:", prevTasks);
          return json["task_list"];
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fetchTasks]);

  return (
    <div>
      <Navbar />
      <div>
        <TotalTask
          updateToDo={updateToDo}
          updateList={updateList}
          removeTask={removeTask}
          tasks={tasks}
          userId={userId}
        />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <MainScreen breakCount={breakCount} setBreakCount={setBreakCount} />
          }
        />
        <Route
          path="/shortbreak"
          element={
            <ShortBreak breakCount={breakCount} setBreakCount={setBreakCount} />
          }
        />
        <Route
          path="/longbreak"
          element={
            <LongBreak breakCount={breakCount} setBreakCount={setBreakCount} />
          }
        />{" "}
      </Routes>
      <TotalToDo sentTask={dataFromTask} />
    </div>
  );
}
export default WorkScreen;
