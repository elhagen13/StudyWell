import dotenv from "dotenv";
import mongoose from "mongoose";
import taskModel from "./task.js";

// const dotenv = require('dotenv');
dotenv.config();

mongoose.set("debug", true);

mongoose
  .connect(
    "mongodb+srv://" +
      /* eslint-disable-next-line no-undef*/
      process.env.MONGO_USER +
      ":" +
      /* eslint-disable-next-line no-undef*/
      process.env.MONGO_PWD +
      "@" +
      /* eslint-disable-next-line no-undef*/
      process.env.MONGO_CLUSTER +
      "/" +
      /* eslint-disable-next-line no-undef*/
      process.env.MONGO_DB +
      "?retryWrites=true&w=majority",
    {
      useNewUrlParser: true, //useFindAndModify: false,
      useUnifiedTopology: true,
    },
  )
  .catch((error) => console.log(error));

function getTasks(description) {
  let promise;
  if (description === undefined) {
    promise = taskModel.find();
  }
  console.log(promise);
  return promise;
}

function addTasks(task) {
  const taskToAdd = new taskModel(task);
  const promise = taskToAdd.save();
  console.log(promise);
  return promise;
}

function findTaskID(id) {
  return taskModel.find({ id: id });
}
function deleteUser(id) {
  return taskModel.findByIdAndDelete(id);
}
export default {
  getTasks,
  addTasks,
  findTaskID,
  deleteUser,
};
