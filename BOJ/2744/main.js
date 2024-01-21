const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('');
let solution = '';

const changeStr = (str) => {
  const upperStr = str.toUpperCase();
  const lowerStr = str.toLowerCase();
  return upperStr === str ? lowerStr : upperStr;
};

input.map((str) => {
  solution = solution + changeStr(str);
});

console.log(solution);
