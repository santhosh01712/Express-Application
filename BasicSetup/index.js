const express = require("express");
const app = express();
const products = require("./routes/products/products");
// const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/products", products);

app.listen(5000, () => {
  console.log("server is listening to the port 5000");
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});
