const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const mul = input[0] * input[1] * input[2];

function solution() {
  let numbers = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

  mul
    .toString()
    .split("")
    .map((value) => {
      numbers[value] += 1;
    });

  for (let i = 0; i <= 9; i++) {
    console.log(numbers[i]);
  }
}

solution();
