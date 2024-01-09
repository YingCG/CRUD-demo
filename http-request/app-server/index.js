const express = require("express");
// const { getUsers, createUser } = require("./controllers/users");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello From Server");
});
app.get("/about", (req, res) => {
  res.send(
    "<div><h1>About us</h1><p>We are just somebody who is building this app</p></div>"
  );
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.get("/users", (req, res) => {
  res.sendStatus(200);
});
app.put("/user/oneuser", (req, res) => {
  s;
  res.sendStatus(200);
});
app.patch("/user/oneuser", (req, res) => {
  res.sendStatus(200);
});
app.delete("/user/oneuser", (req, res) => {
  res.sendStatus(200);
});

app.listen(5000, () => {
  console.log(`Server started on port ${port}`);
});
