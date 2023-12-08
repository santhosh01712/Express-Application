const express = require("express");
const app = express();

const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const currTime = new Date().toUTCString();

  console.log(`URL: ${url} \nMethod: ${method} \nTimeStamp: ${currTime}`);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home Page");
});

app.get("/about", logger, (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("server is listening to the port 5000");
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});
