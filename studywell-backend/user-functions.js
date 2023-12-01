import dotenv from "dotenv";
import mongoose from "mongoose";
import userModel from "./user.js";

// const dotenv = require('dotenv');
dotenv.config();

mongoose.set("debug", true);
mongoose
  .connect(
    "mongodb+srv://" +
      // eslint-disable-next-line
      process.env.MONGO_USER +
      ":" +
      // eslint-disable-next-line
      process.env.MONGO_PWD +
      "@" +
      // eslint-disable-next-line
      process.env.MONGO_CLUSTER +
      "/" +
      // eslint-disable-next-line
      process.env.MONGO_DB +
      "?retryWrites=true&w=majority",
    {
      useNewUrlParser: true, //useFindAndModify: false,
      useUnifiedTopology: true,
    },
  )
  .catch((error) => console.log(error));
console.log("connected");

function getUsers(description) {
  let promise;
  if (description === undefined) {
    promise = userModel.find();
  }
  return promise;
}
function getUserByEmail(email) {
  let promise;
  if (email !== undefined) {
    promise = userModel.findOne({ email });
  }
  return promise;
}

function getUserByUsername(username) {
  let promise;
  if (username !== undefined) {
    promise = userModel.findOne({ username });
  }
  return promise;
}

function addUser(user) {
  const userToAdd = new userModel(user);
  const promise = userToAdd.save();
  return promise;
}

export default {
  getUserByUsername,
  getUserByEmail,
  getUsers,
  addUser,
};
