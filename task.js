import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    Description: {
      type: String,
      required: true,
      trim: true,
    },
    ID: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { collection: "task_list" }
);

export default mongoose.model("Task", TaskSchema);

