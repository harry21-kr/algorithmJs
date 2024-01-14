const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString();
let sol = 1;
for (let i = 1; i <= input; i++) {
  sol = sol * i;
}
console.log(sol);
