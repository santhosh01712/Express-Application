const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypet = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "Please use an alternative email"],
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a Password"],
    minlength: [6, "Minimum password length should be 6 character"],
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypet.genSalt();
  this.password = await bcrypet.hash(this.password, salt);
  next();
});

userSchema.post("save", async function (doc, next) {
  next();
});

// static method

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypet.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const User = mongoose.model("user", userSchema);

module.exports = User;
