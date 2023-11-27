import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true,
    },
    id: {
<<<<<<< HEAD
      type: Number,
=======
      type: String,
>>>>>>> backend
      required: true,
      trim: true,
    },
  },
  { collection: "task_list" },
);

export default mongoose.model("Task", TaskSchema);
