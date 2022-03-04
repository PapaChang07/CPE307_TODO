const myFunctions = require("./user-services.js");

it("add a proper user", async () => {
  const user = { name: "Jojo", password: "1234", tasks: [{}] };
  const res = await myFunctions.addUser(user);
  expect(res.name).toEqual(user.name);
  expect(res.tasks).toEqual(user.tasks);
  expect(res.password).toEqual(user.password);
  const res2 = await myFunctions.deleteByName("Jojo");
  expect(res2.name).toEqual(user.name);
  expect(res2.tasks).toEqual(user.tasks);
  expect(res2.password).toEqual(user.password);
});

it("add a improper user", async () => {
  const user = {};
  const res = await myFunctions.addUser(user);
  expect(res.name).toBeFalsy();
});

it("get a user using a valid  username", async () => {
  const name = "Yvonne";
  const password = undefined;
  const res = await myFunctions.getUsers(name, password);
  const spec = res[0];
  const user = {
    _id: { $oid: "6206ceae0f45b02c67ba888b" },
    name: "Yvonne",
    password: "tacocatttt",
    tasks: [
      { flag: true, date: "2/11/2022", imp: 900, body: "take trash out" },
      { flag: true, date: "2/11/2022", imp: 900, body: "go to the mall" },
      { flag: true, date: "2/11/2022", imp: 900, body: "celebrate" },
      { flag: true, date: "2/11/2022", imp: 900, body: "get code to work" },
      { flag: true, date: "2/11/2022", imp: 900, body: "take a dump" },
      { flag: true, date: "2/11/2022", imp: 900, body: "go on a date" },
    ],
  };

  expect(spec.name).toEqual(user.name);
  expect(spec.tasks).toEqual(user.tasks);
  expect(spec.password).toEqual(user.password);
});

it("get a list of all users", async () => {
  const name = undefined;
  const password = undefined;
  const res = await myFunctions.getUsers(name, password);
  const names = [];
  for (let i = 0; i < res.length; i++) {
    if (!names.includes(res[i].name)) names.push(res[i].name);
  }
  const checkNames = ["Yvonne", "Ryab", "Eric"];

  expect(names[0]).toEqual(checkNames[0]);
  expect(names[1]).toEqual(checkNames[1]);
  expect(names[2]).toEqual(checkNames[2]);
});

it("test to get a single user", async () => {
  const name = "Yvonne";
  const res = await myFunctions.getUser(name);
  console.log(res);
  const user = {
    _id: { $oid: "6206ceae0f45b02c67ba888b" },
    name: "Yvonne",
    password: "tacocatttt",
    tasks: [
      { flag: true, date: "2/11/2022", imp: 900, body: "take trash out" },
      { flag: true, date: "2/11/2022", imp: 900, body: "go to the mall" },
      { flag: true, date: "2/11/2022", imp: 900, body: "celebrate" },
      { flag: true, date: "2/11/2022", imp: 900, body: "get code to work" },
      { flag: true, date: "2/11/2022", imp: 900, body: "take a dump" },
      { flag: true, date: "2/11/2022", imp: 900, body: "go on a date" },
    ],
  };
  expect(res.name).toEqual(user.name);
  expect(res.tasks).toEqual(user.tasks);
  expect(res.password).toEqual(user.password);
});

it("test to get a undefined user", async () => {
  const name = undefined;
  const res = await myFunctions.getUser(name);
  expect(res).toBeFalsy();
});

it("test to get invalid user", async () => {
  const name = "JNSOLASNFJV";
  const res = await myFunctions.getUser(name);
  const user = undefined;
  expect(res).toEqual(user);
});

it("test update task", async () => {
  const Jimbostasks = [
    { flag: true, date: "2/11/2022", imp: 900, body: "take trash out" },
  ];
  const JimbosUpdatedTasks = [
    { flag: true, date: "2/11/2022", imp: 900, body: "take trash out" },
    { flag: true, date: "2/11/2022", imp: 900, body: "eat hambuuger" },
  ];
  const user = {
    name: "Jimbo",
    password: "tacocatttt",
    tasks: Jimbostasks,
  };
  const person = await myFunctions.addUser(user);
  expect(person.name).toEqual(user.name);
  expect(person.tasks).toEqual(user.tasks);
  expect(person.password).toEqual(user.password);

  person.tasks.push({
    flag: true,
    date: "2/11/2022",
    imp: 900,
    body: "eat hambuuger",
  });
  const res = await myFunctions.updateUser(person);
  console.log(res);

  expect(res.name).toEqual(user.name);
  expect(res.tasks).toEqual(JimbosUpdatedTasks);
  expect(res.password).toEqual(user.password);

  const del = await myFunctions.deleteByName("Jimbo");
  expect(del.name).toEqual(user.name);
  expect(del.tasks).toEqual(JimbosUpdatedTasks);
  expect(del.password).toEqual(user.password);
});

it("test non existant update for user", async () => {
  const user = undefined;
  const res = await myFunctions.updateUser(user);
  expect(res).toBe(false);
});

it("test non existant delete", async () => {
  const user = "jlndsinbqeajl";
  const res = await myFunctions.deleteByName(user);
  expect(res).toBe(false);
});
