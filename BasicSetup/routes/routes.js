const router = require("express").Router();

router.get("/ping", (req, res) => {
  res.json({
    status: 200,
    res: "This could be a actual response",
  });
});

router.post("/ping", (req, res) => {
  if (req.body.ping) {
    res.status(200).json({
      pong: "Resposne from the server",
    });
  } else {
    res.status(400).json({
      error: "The request doesn't contain the ping",
    });
  }
});

router.delete("/ping", (req, res) => {
  res.json({ message: "The resource is deleted" });
});
module.exports = router;
