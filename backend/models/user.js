const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    tasks: {
      type: Array,
      required: false,
    },
  },
  { collection: "users_list" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
