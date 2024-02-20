const { readFileSync, writeFileSync } = require("fs");
console.log("start : ");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first);
console.log(second);
writeFileSync(
  "./content/result-sync.txt",
  `here is the resule ${first} and here comes more ${second}`
);
console.log("done with task");
console.log("starting the next task");
