import dotenv from "dotenv";
import mongoose from "mongoose";
import taskModel from "./task.js";

// const dotenv = require('dotenv');
dotenv.config();
<<<<<<< HEAD
=======
let count = 0;
>>>>>>> backend

mongoose.set("debug", true);

mongoose
  .connect(
    "mongodb+srv://" +
<<<<<<< HEAD
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
=======
      process.env.MONGO_USER +
      ":" +
      process.env.MONGO_PWD +
      "@" +
      process.env.MONGO_CLUSTER +
      "/" +
>>>>>>> backend
      process.env.MONGO_DB +
      "?retryWrites=true&w=majority",
    {
      useNewUrlParser: true, //useFindAndModify: false,
      useUnifiedTopology: true,
<<<<<<< HEAD
    },
=======
    }
>>>>>>> backend
  )
  .catch((error) => console.log(error));

function getTasks(description) {
  let promise;
  if (description === undefined) {
    promise = taskModel.find();
  }
<<<<<<< HEAD
  console.log(promise);
=======
  // console.log(promise);
>>>>>>> backend
  return promise;
}

function addTasks(task) {
  const taskToAdd = new taskModel(task);
  const promise = taskToAdd.save();
<<<<<<< HEAD
  console.log(promise);
  return promise;
}

function findTaskID(id) {
  return taskModel.find({ id: id });
}
function deleteUser(id) {
  return taskModel.findByIdAndDelete(id);
=======
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
>>>>>>> backend
}
export default {
  getTasks,
  addTasks,
<<<<<<< HEAD
  findTaskID,
=======
  findTaskIndex,
>>>>>>> backend
  deleteUser,
};
