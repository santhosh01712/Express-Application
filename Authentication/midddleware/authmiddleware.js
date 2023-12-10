const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "santhosh secret", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/login");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

// check the user

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  jwt.verify(token, "santhosh secret", async (err, decodedToken) => {
    if (err) {
      res.locals.user = null;
      next();
    } else {
      let user = await User.findById(decodedToken.id);
      res.locals.user = user;
      next();
    }
  });
};

module.exports = { requireAuth, checkUser };
