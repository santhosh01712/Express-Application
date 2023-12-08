const Blog = require("../../../models/blog");

const handleError = (err, res) => {
  console.log(err);
  res.status(400).json({ success: false, message: String(err) });
};

const getAllBlogs = (req, res) => {
  Blog.find()
    .then((result) => {
      res.status(200).json({ success: true, Data: result });
    })
    .catch((err) => handleError(err, res));
};

const getBlog = (req, res) => {
  const { id } = req.params;
  Blog.findById(id)
    .then((result) => {
      res.status(200).json({ success: true, Data: result });
    })
    .catch((err) => handleError(err, res));
};

const updateBlog = (req, res) => {
  const { id } = req.params;

  const { title, snippet, body } = req.body;

  if (!(title && snippet && body)) {
    return res.status(400).json({
      success: false,
      message: "Did not receive the required parameters",
    });
  }
  Blog.findByIdAndUpdate(
    id,
    {
      title,
      snippet,
      body,
    },
    { new: true }
  )
    .then((result) => {
      res.status(200).json({ success: true, Data: result });
    })
    .catch((err) => handleError(err, res));
};

const deleteBlog = (req, res) => {
  const { id } = req.params;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.status(200).json({ success: true, Data: result });
    })
    .catch((err) => handleError(err, res));
};

const addBlog = (req, res) => {
  const { title, snippet, body } = req.body;

  if (!(title && snippet && body)) {
    return res.status(400).json({
      success: false,
      message: "Did not receive the required parameters",
    });
  }

  const addBlog = new Blog({
    title,
    snippet,
    body,
  });
  addBlog
    .save()
    .then((reponse) => {
      return res.status(201).json({ success: true, Data: reponse._id });
    })
    .catch((err) => handleError(err, res));
};

module.exports = {
  addBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
};
