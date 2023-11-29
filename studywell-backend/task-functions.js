import dotenv from "dotenv";
import mongoose from "mongoose";
import taskModel from "./task.js";

// const dotenv = require('dotenv');
dotenv.config();
let count = 0;

mongoose.set("debug", true);

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_USER +
      ":" +
      process.env.MONGO_PWD +
      "@" +
      process.env.MONGO_CLUSTER +
      "/" +
      process.env.MONGO_DB +
      "?retryWrites=true&w=majority",
    {
      useNewUrlParser: true, //useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .catch((error) => console.log(error));

function getTasks(description) {
  let promise;
  if (description === undefined) {
    promise = taskModel.find();
  }
  return promise;
}

function addTasks(task) {
  const taskToAdd = new taskModel(task);
  const promise = taskToAdd.save();
  //console.log(promise);
  return promise;
}

function findTaskIndex(id) {
  return taskModel.find({ id: id });
}
async function deleteUser(id) {
  try{
    const deletedTask = await taskModel.findByIdAndDelete(id);
    return deletedTask;
  }
  catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}
export default {
  getTasks,
  addTasks,
  findTaskIndex,
  deleteUser,
};
