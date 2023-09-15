const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      trim: true,
      maxlength: 20,
      unique: true,
    },
    passwd: {
      type: String,
      require: true,
      minlength: 6,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
