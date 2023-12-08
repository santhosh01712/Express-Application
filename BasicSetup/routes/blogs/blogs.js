const express = require("express");
const Blog = require("../../models/blog");
const {
  addBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("./controlers/blog-controler");

const route = express.Router();

route.get("/", getAllBlogs);
route.route("/:id").get(getBlog).put(updateBlog).delete(deleteBlog);

route.post("/add-blog", addBlog);

module.exports = route;
