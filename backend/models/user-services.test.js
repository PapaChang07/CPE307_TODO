const myFunctions = require("./user-services.js");

it("add a proper user", async () => {
  const user = { name: "Jojo", password: "1234", tasks: [{}] };
  const res = await myFunctions.addUser(user);
  console.log(res);
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
  const checkNames = ["Yvonne", "Ryab", "Eric", "Joey"];
  checkNames.sort();
  names.sort();

  expect(names).toEqual(checkNames);
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
    ],
  };
  expect(res.name).toEqual(user.name);
  expect(res.tasks).toEqual(user.tasks);
  expect(res.password).toEqual(user.password);
});

it("test to get invalid user", async () => {
  const name = "JNSOLASNFJV";
  const res = await myFunctions.getUser(name);
  console.log(res);
  const user = undefined;
  expect(res).toEqual(user);
});
