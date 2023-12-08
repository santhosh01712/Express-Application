const logger = (req, res, next) => {
  const path = req.path;
  const method = req.method;
  const currTime = new Date().toUTCString();

  console.log(`Path: ${path} \nMethod: ${method} \nTimeStamp: ${currTime}`);
  next();
};

module.exports = logger;
