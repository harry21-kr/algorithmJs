const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");
const piece = [1, 1, 2, 2, 2, 8];
input.map((v, idx) => {
  if (Number(v) === piece[idx]) {
    input.splice(idx, 1, 0);
  } else {
    input.splice(idx, 1, piece[idx] - Number(v));
  }
});
console.log(...input);
