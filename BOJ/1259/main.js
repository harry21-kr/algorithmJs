const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 0; i < input.length; i++) {
  if (input[i] === "0") {
    break;
  }
  if (input[i] === input[i].split("").reverse().join("")) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
