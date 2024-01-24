const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

function solution() {
  let answer = 0;
  input.map((value) => (answer += value * value));
  console.log(answer % 10);
}

solution();
