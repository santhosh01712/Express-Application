const express = require("express");
const app = express();
const fs = require("fs");
// const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/getAllProducts", (req, res) => {
  const newData = JSON.parse(fs.readFileSync("./data/newdata.json", "utf-8"));

  res.json({ success: true, data: newData.products });
});

app.get("/getProduct/:productId", (req, res) => {
  const { productId } = req.params;

  const newData = JSON.parse(fs.readFileSync("./data/newdata.json", "utf-8"));
  const findProduct = newData.products.find((item) => {
    console.log(item, item.id === productId);

    return item.id == productId;
  });

  if (findProduct === undefined) {
    return res
      .status(400)
      .json({ success: false, message: "Product details doesn't excist" });
  }

  res.status(200).json({
    success: true,
    data: findProduct,
  });
});

app.put("/updateProduct/:productId", (req, res) => {
  const { productId } = req.params;
  const newProduct = req.body.newProduct;

  const newData = JSON.parse(fs.readFileSync("./data/newdata.json", "utf-8"));
  const findProduct = newData.products.find((item) => {
    return item.id == productId;
  });

  if (findProduct === undefined) {
    return res
      .status(400)
      .json({ success: false, message: "Product details doesn't excist" });
  }
  newData.products = newData.products.map((item) => {
    if (item.id == productId) {
      return {
        ...item,
        name: newProduct,
      };
    }
    return item;
  });
  fs.writeFileSync("./data/newdata.json", JSON.stringify(newData));

  res.status(200).json({ success: true });
});

app.delete("/deleteProduct/:productId", (req, res) => {
  const { productId } = req.params;

  const newData = JSON.parse(fs.readFileSync("./data/newdata.json", "utf-8"));
  const findProduct = newData.products.find((item) => {
    return item.id == productId;
  });

  if (findProduct === undefined) {
    return res
      .status(400)
      .json({ success: false, message: "Product details doesn't excist" });
  }
  newData.products = newData.products.filter((item) => item.id != productId);
  fs.writeFileSync("./data/newdata.json", JSON.stringify(newData));

  res.status(200).json({ success: true });
});

app.post("/addNewProduct", (req, res) => {
  const newProduct = req.body.newProduct;

  const newData = JSON.parse(fs.readFileSync("./data/newdata.json", "utf-8"));
  const lastId = newData.products[newData.products.length - 1].id + 1;

  newData.products = [...newData.products, { id: lastId, name: newProduct }];

  fs.writeFileSync("./data/newdata.json", JSON.stringify(newData));

  res.json({ success: true });
});

app.listen(5000, () => {
  console.log("server is listening to the port 5000");
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});
