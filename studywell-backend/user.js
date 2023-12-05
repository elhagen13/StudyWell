import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "users" },
);

export default mongoose.model("User", UserSchema);
