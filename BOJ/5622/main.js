const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");
const number = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};
let result = 0;
const keys = Object.keys(number);
input.forEach((inputValue) => {
  const a = keys
    .map((v) => v.split(""))
    .filter((keyValue) => keyValue.includes(inputValue))
    .flat()
    .join("");
  result += number[a];
});
console.log(result);
