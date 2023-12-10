const router = require("express").Router();

const {
  login_get,
  login_post,
  signup_get,
  signup_post,
  logout,
} = require("../controller/authController");

router.route("/signup").get(signup_get).post(signup_post);

router.route("/login").get(login_get).post(login_post);
router.route("/logout").get(logout);

module.exports = router;
