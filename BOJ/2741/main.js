const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath);
let sol = '';
for (let i = 1; i <= input; i++) {
  sol += i + '\n';
}
console.log(sol);
