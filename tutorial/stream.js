const { createReadStream } = require("fs");

const stream = createReadStream("./content/bigfile-text.txt");

stream.on("data", (data) => {
  console.log(data);
});
