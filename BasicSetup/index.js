const express = require("express");
const app = express();
const products = require("./routes/products/products");
const blogs = require("./routes/blogs/blogs");
const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://santhosh:new123@cluster-santhosh.ztelrbu.mongodb.net/blogs-app?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then((res) => {
    console.log("Connected to database");
    app.listen(5000, () => {
      console.log("server is listening to the port 5000");
    });
  })
  .catch((err) => {
    console.log("Failed to connect", err);
  });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/products", products);
app.use("/api/blogs", blogs);

// app.listen(5000, () => {
//   console.log("server is listening to the port 5000");
// });

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});
