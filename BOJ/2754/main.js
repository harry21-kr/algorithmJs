const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

const solution = () => {
  let res = 0;
  switch (input[0]) {
    case 'A':
      res += 4.0;
      break;
    case 'B':
      res += 3.0;
      break;
    case 'C':
      res += 2.0;
      break;
    case 'D':
      res += 1.0;
      break;
  }
  switch (input[1]) {
    case '+':
      res += 0.3;
      break;
    case '-':
      res -= 0.3;
      break;
  }
  console.log(res.toFixed(1));
};

solution();
