const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
    required: false
  },
}, {collection : 'users_list'});

const User = mongoose.model("User", UserSchema);


function Task(imp, flag, body, date) {
  this.imp = imp;
  this.flag = flag;
  this.body = body;
  this.date = date;

}


module.exports = User;