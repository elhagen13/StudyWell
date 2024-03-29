import express from "express";
import cors from "cors";
import taskModel from "./task-functions.js";
import userModel from "./user-functions.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const generateID = () => {
  const id = Math.floor(100000 + Math.random() * 900000);
  const newID = id.toString();
  return newID;
};

/* eslint-disable-next-line no-undef*/
app.listen(process.env.PORT || port, () => {
  console.log("REST API is listening.");
});

app.get("/:userId/tasks", (req, res) => {
  const userId = req.params.userId;
  taskModel.getTasks(userId).then((result) => {
    res.send({ task_list: result });
  });
});

app.post("/:userId/tasks", async (req, res) => {
  try {
    const taskToAdd = req.body;
    taskToAdd.id = generateID();
    taskToAdd.user_id = req.params.userId;

    await taskModel.addTasks(taskToAdd);

    console.log("Task added successfully to the database:", taskToAdd);

    res.status(201).send(taskToAdd);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// eslint-disable-next-line no-unused-vars
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
  console.log("DELETE request received for task ID:", id);
  try {
    const deletedTask = await taskModel.deleteUser(id);
    console.log("Deleted task:", deletedTask);

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

app.get("/users/email/:email", (req, res) => {
  const email = req.params.email;
  userModel
    .getUserByEmail(email)
    .then((user) => {
      if (user) {
        res.status(200).send({ user });
      } else {
        res.status(404).send({ message: "User not found" });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .send({ error: "Internal Server Error", details: error.message });
    });
});

app.get("/users/username/:username", (req, res) => {
  const username = req.params.username;
  console.log(username);
  userModel
    .getUserByUsername(username)
    .then((user) => {
      if (user) {
        res.status(200).send({ user });
      } else {
        res.status(404).send({ message: "User not found" });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .send({ error: "Internal Server Error", details: error.message });
    });
});

app.get("/users", (req, res) => {
  userModel.getUsers(req.description).then((result) => {
    res.send({ user_list: result });
  });
});

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  userModel
    .addUser(userToAdd)
    .then(() => {
      res.status(201).send(userToAdd);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
});
