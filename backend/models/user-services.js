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

async function getUser(name) {
  let result;
  if (name === undefined) {
    result = undefined;
  } else if (name) {
    result = await findUserByName(name);
    result = result[0];
  }
  return result;
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
    console.log(userToAdd);
    const savedUser = await userToAdd.save();
    return savedUser;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function updateUser(user) {
  try {
    const result = await userModel
      .findOneAndUpdate(
        { name: user.name },
        { tasks: user.tasks },
        { new: true }
      )
      .clone();
    return result;
  } catch (error) {
    console.log("NOTFOUND");
    return false;
  }
}

async function deleteByName(name) {
  try {
    const person = await getUser(name);
    const id = person._id;
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
exports.updateUser = updateUser;
exports.addUser = addUser;

exports.findUserByUsernameAndPassword = findUserByUsernameAndPassword;
exports.deleteByName = deleteByName;
exports.getUser = getUser;
