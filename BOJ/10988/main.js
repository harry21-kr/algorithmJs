const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const reversedInput = input.split("").reverse().join("");
if (input === reversedInput) {
  console.log(1);
} else {
  console.log(2);
}
