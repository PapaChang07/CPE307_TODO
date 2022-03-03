//const res = require("express/lib/response");
const mongoose = require("mongoose");
const userModel = require("./user");
const dotenv = require("dotenv");

dotenv.config();

// Uncomment the following to debug mongoose queries, etc.
// mongoose.set("debug", true);

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_USER +
      ":" +
      process.env.MONGO_PWD +
      "@cluster0.n2ftg.mongodb.net/" +
      process.env.MONGO_DB +
      "?retryWrites=true&w=majority",
    // "mongodb://localhost:27017/users",
    {
      useNewUrlParser: true, //useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .catch((error) => console.log(error));

async function getUsers(name, password) {
  let result;
  if (name === undefined && password === undefined) {
    result = await userModel.find();
  } else if (name && !password) {
    result = await findUserByName(name);
  } else if (password && !name) {
    result = await findUserByJob(password);
  } else if (password && name) {
    result = await findUserByNameandPassword(name, password);
  }
  return result;
}

async function findUserById(id) {
  try {
    return await userModel.findById(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function findUserByUsernameAndPassword(name, password){
  try {
    return await findUserByNameandPassword(name, password)
  } catch (error) {
    console.log("Couldn't find the User")
    return undefined;
  }
}

async function addUser(user) {
  try {
    const userToAdd = new userModel(user);
    const savedUser = await userToAdd.save();
    return savedUser;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteByID(id) {
  try {
    return await userModel.findByIdAndDelete(id);
  } catch (error) {
    return false;
  }
}

async function findUserByName(name) {
  return await userModel.find({ name: name });
}

async function findUserByJob(password) {
  return await userModel.find({ password: password });
}

async function findUserByNameandPassword(name, password) {
  return await userModel.findOne({ name: name , password: password });
}

exports.getUsers = getUsers;
exports.findUserById = findUserById;
exports.addUser = addUser;
exports.deleteByID = deleteByID;
exports.findUserByUsernameAndPassword = findUserByUsernameAndPassword;
