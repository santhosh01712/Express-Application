const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt");
console.log(first);

for (let i = 0; i < 1000; i++) {
  writeFileSync(
    "./content/bigfile-text.txt",
    `The combined file content is \n First: ${first} \n Second: ${second} \n \n \n`,
    { flag: "a" }
  );
}
