const express = require("express");
const app = express();
const path = require("path");
const { products, people } = require("../data/data");

// middleware
app.use(express.static("./public"));

app.get("/api/products", (req, res) => {
  res.json(
    products.map((p) => {
      return {
        id: p.id,
        name: p.name,
        image: p.image,
      };
    })
  );
});

app.get("/api/products/:productId", (req, res) => {
  const oneProuct = products.find((i) => i.id === Number(req.params.productId));
  if (oneProuct) {
    res.json(oneProuct);
  } else {
    res.status(404).send("Product is not found");
  }
});

app.get("/api/products/:productId/review/:reviewId", (req, res) => {
  res.json({
    peoductId: req.params.productId,
    reviewId: req.params.reviewId,
  });
});

app.get("/people", (req, res) => {
  res.json(people);
});

app.get("/api/v1/query/", (req, res) => {
  const { search, limit } = req.query;

  let newProducts = [...products];

  if (search) {
    newProducts = newProducts.filter((item) => {
      return item.name.startsWith(search);
    });
  }
  if (limit) {
    newProducts = newProducts.slice(0, limit);
  }
  if (newProducts.length) {
    res.status(200).json(newProducts);
  }
  res.status(200).send("no results found");
});

app.listen(5000, () => {
  console.log("server is listening to the port 5000");
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});
