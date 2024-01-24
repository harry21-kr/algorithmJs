const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
function sol() {
  const A = +input[0];
  const B = +input[1];
  console.log((A + B) * (A - B));
}
sol();
