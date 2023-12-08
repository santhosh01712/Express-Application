const express = require("express");
const app = express();
const logger = require("../middleware/logger");
const authorize = require("../middleware/authorize");

// .use method will apply the middleware
app.use([authorize, logger]);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  console.log(req.user);
  res.send("About Page");
});
app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.listen(5000, () => {
  console.log("server is listening to the port 5000");
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});
