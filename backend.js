import express from "express";
import cors from "cors";
import taskModel from "./task-functions.js";


const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});  

app.get('/tasks', (req,res) => {
    taskModel.getTasks(req.description)
        .then((result) => {
            res.send({task_list: result})
        })
});

app.post('/tasks', (req,res) => {
    const taskToAdd = req.body;
    taskModel.addTasks(taskToAdd)
        .then((result) => {
            res.status(201).send(taskToAdd);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send(error);
        });
});

app.delete('/tasks', (req, res) => {
    const id = req.params['id'];
    const result = taskModel.findTaskID(id);
    let removed = tasks['task_list'].splice(result, 1);
    if (result === undefined) {
        res.status(404).send('Resource not found.');
    }
    else {
        res.status(204).send("User Deleted.");
    }
});
