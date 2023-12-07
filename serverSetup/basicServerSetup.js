const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(3000, () => {
  console.log("connected to the server");
});

app.get("/", (req, res) => {
  res.send("server is up and running");
});

const routes = require("../routes/routes");

app.use("/routes", routes);
