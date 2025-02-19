const express = require("express");

const app = express();

const PORT = 7777;

app.use("/hello", (req, res) => {
  res.send("Hello hello hello ..!!");
});

app.use("/test", (req, res) => {
  throw new Error("Something went wrong!eeee");
  res.send("Hello, from test route");
});

app.use("/", (req, res) => {
  res.send("Hello, from Express.js backend!");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    next();
    // res.send(err.message); 
    // console.error(err);
    // res.status(500).send("Something went wrong");
  }
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

app.listen(PORT, () => {
  console.log(`Server started listening incoming requets on port ${PORT}...`);
});
