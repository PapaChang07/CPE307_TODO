const express = require("express");
const cors = require("cors");
// Test comment
// Test comment # 2
// Test comment # 3
const userServices = require("./models/user-services");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", async (req, res) => {
  const username = req.query["username"];
  const password = req.query["password"];
  try {
    const result = await userServices.findUserByUsernameAndPassword(
      username,
      password
    );
    res.send({ users_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

app.get("/login/", async (req, res) => {
  const username = req.query["name"];
  console.log(username);
  const password = req.query["password"];
  console.log(password);
  try {
    const result = await userServices.findUserByUsernameAndPassword(
      username,
      password
    );
    res.send({ users_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

app.get("/users", async (req, res) => {
  const name = req.query["name"];
  const password = req.query["password"];
  try {
    const result = await userServices.getUsers(name, password);
    res.send({ users_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

app.get("/users/:name", async (req, res) => {
  const name = req.params["name"];
  const result = await userServices.getUser(name);
  if (result === undefined || result === null)
    res.status(404).send("Resource not found.");
  else {
    res.send({ users_list: result });
  }
});

app.post("/users", async (req, res) => {
  const user = req.body;
  const savedUser = await userServices.addUser(user);
  if (savedUser) res.status(201).send(savedUser);
  else res.status(500).end();
});

app.post("/signup", async (req, res) => {
  const user = req.body;
  console.log(user);
  result = await userServices.findUser(user);
  if (result.length == 0) {
    const savedUser = await userServices.addUser(user);
    if (savedUser) res.status(201).send(savedUser);
    else res.status(500).end();
  } else {
    console.log("Username is already in use");
    res.status(400).send(false);
  }
});

app.put("/users", async (req, res) => {
  const user = req.body;
  const savedUser = await userServices.updateUser(user);
  if (savedUser) res.status(201).send(savedUser);
  else res.status(500).end();
});

app.listen(process.env.PORT || port, () => {
  console.log("REST API is listening.");
});
