const express = require("express");
require("dotenv").config();
const { connectDB } = require("./config/database");

const app = express();

const PORT = 7777;

app.use(express.json());

app.use("/hello", (req, res) => {
  res.send("Hello hello hello ..!!");
});

app.use("/test", (req, res) => {
  throw new Error("Something went wrong!eeee");
  res.send("Hello, from test route");
});

app.post("/user", (req, res) => {
  const body = req.body;
  console.log(body);
  console.log(process.env.MONGODB_URI);
  res.send({ messsage: "User created successfully!" });
});

app.use("/", (req, res) => {
  res.send("Hello, from Express.js backend!");
});

app.use("/", (err, req, res, next) => {
  console.log(err);
  console.log(res);
  if (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
    return;
  }
});

connectDB().then(() => {
  console.log("Database connected successfully");
  app.listen(PORT, () => {
    console.log(`Server started listening incoming requets on port ${PORT}...`);
  });
});
