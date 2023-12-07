const express = require("express");
const app = express();
const path = require("path");
const { products, people } = require("../data/data");

// middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./public/index.html"));
// });
app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/people", (req, res) => {
  res.json(people);
});

app.listen(5000, () => {
  console.log("server is listening to the port 5000");
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});
