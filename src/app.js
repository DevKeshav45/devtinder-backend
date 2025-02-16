const express = require("express");

const app = express();

const PORT = 7777;

app.use("/hello", (req, res) => {
  res.send("Hello hello hello ..!!");
});

app.use("/test", (req, res) => {
  res.send("Hello, from test route");
});

app.use("/", (req, res) => {
  res.send("Hello, from Express.js backend!");
});

app.listen(PORT, () => {
  console.log(`Server started listening incoming requets on port ${PORT}...`);
});
