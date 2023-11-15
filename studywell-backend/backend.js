import express from "express";
import cors from "cors";
import taskModel from "./task-functions.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//generates random ID
const generateID = () => {
  const id = Math.floor(100000 + Math.random() * 900000);
  const newID = id.toString();
  var count = 0;
  return newID;
};

app.get("/tasks", (req, res) => {
  taskModel.getTasks(req.description).then((result) => {
    res.send({ task_list: result });
  });
});

app.post("/tasks", (req, res) => {
  const taskToAdd = req.body;
  console.log(taskToAdd);
  taskToAdd.id = generateID();
  taskModel
    .addTasks(taskToAdd)
    .then((result) => {
      res.status(201).send(taskToAdd);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
});
async function deleteUserById(id) {
  try {
    if (await taskModel.deleteUser(id)) return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
app.delete("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTask = await taskModel.deleteUser(id);
    if (deletedTask === undefined) {
      res.status(404).send("Resource not found.");
    } else {
      res.status(204).send("Task Deleted.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
