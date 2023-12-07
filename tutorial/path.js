const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.tsx");

console.log(filePath);

console.log(path.basename(filePath));

console.log("Absolutepath : ", path.resolve(__dirname, "content", "subfoder"));
