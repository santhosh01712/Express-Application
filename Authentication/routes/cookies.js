app.get("/set-cookies", (req, res) => {
  res.cookie("Santhosh", "TestedThis", { httpOnly: true, maxAge: 10000 });
  res.send("cookies has been set");
});

app.get("/read-cookies", (req, res) => {
  const cookie = req.cookies;

  console.log(cookie);

  res.json(cookie);
});
app.get("/contact", (req, res) =>
  res
    .setHeader("Content-Type", "text/html")
    .sendFile(path.join(__dirname, "./views", "contact.html"))
);
