const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();
const parseInput = input
  .toUpperCase()
  .split("")
  .filter((v) => isNaN(v));
const counts = parseInput.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
const keys = Object.keys(counts);
let mode = keys[0];
keys.forEach((v) => {
  if (counts[v] > counts[mode]) {
    mode = v;
  }
});
const result = [];
keys.forEach((v) => {
  if (counts[mode] === counts[v]) {
    result.push(v);
  }
});
if (result.length > 1) {
  console.log("?");
} else {
  console.log(result[0]);
}
